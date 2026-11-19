/*
 * HighLevel lead-form bridge for Kydos Digital.
 * Reports a privacy-safe dataLayer signal only after a recognised embedded form
 * sends a contact-bearing success message. GTM and GA4 must still be configured
 * and tested to turn this into a GA4 generate_lead key event.
 */
(function () {
  'use strict';

  var FORM_ID = 'QaXpE6farn2QrRKGKVR1';
  var seenFrames = new WeakMap();
  var debounceMs = 20000;

  function allowedOrigin(origin) {
    var url;
    try { url = new URL(origin); } catch (err) { return false; }
    if (url.protocol !== 'https:') return false;
    return url.hostname === 'app.kydosdigital.com' ||
      url.hostname === 'api.leadconnectorhq.com' ||
      url.hostname === 'widgets.leadconnectorhq.com' ||
      url.hostname === 'link.msgsndr.com' ||
      url.hostname.endsWith('.msgsndr.com');
  }

  function matchingFormFrame(source) {
    if (!source) return null;
    var frames = document.querySelectorAll('iframe[data-form-id="' + FORM_ID + '"]');
    for (var i = 0; i < frames.length; i++) {
      var frame = frames[i];
      if (frame.contentWindow === source) return frame;
    }
    return null;
  }

  function isContactBearing(message) {
    if (!Array.isArray(message) || message[0] !== 'set-sticky-contacts') return false;
    if (typeof message[2] !== 'string') return false;
    var value;
    try { value = JSON.parse(message[2]); } catch (err) { return false; }
    if (!value || typeof value !== 'object') return false;
    // Never copy customer data from this object into the data layer or logs.
    return Boolean(value.lead_id || value.contact_id || value.contactId ||
      (typeof value.user_email === 'string' && typeof value.user_phone === 'string'));
  }

  window.addEventListener('message', function (event) {
    if (!allowedOrigin(event.origin) || !isContactBearing(event.data)) return;
    var formFrame = matchingFormFrame(event.source);
    if (!formFrame) return;
    var now = Date.now();
    if (now - (seenFrames.get(formFrame) || 0) < debounceMs) return;
    seenFrames.set(formFrame, now);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'kydos_ghl_form_success',
      form_id: FORM_ID,
      form_name: 'kydos_website_project_enquiry',
      page_path: window.location.pathname
    });
  });
})();
