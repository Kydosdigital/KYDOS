(()=>{const run=()=>{const realWork=document.querySelector('#real-work');const currentVideo=document.querySelector('.sm-section.dark .sm-video-grid')?.closest('.sm-section');if(!realWork||document.querySelector('.sm-proof-extension'))return;

const designs=[
['12LHsuD2lOBLVMmvpDjrHsY641CTIpXfO','Ethical Wealth Academy','September campaign creative'],
['14repeHMOH8G1Lk0Z7SzABf6C7PvnWfPe','Ethical Wealth Academy','August social creative'],
['1i3FEYYraL2yWld9FPKpr51R7dFPYQwUe','Black Health Initiative','September community-health creative'],
['1Ukx5SWrN1nutW1Ywp84osY6Dv3W13jYq','Black Health Initiative','September awareness creative'],
['1zXgMqMI58yW9EAMCVcWJHLos4hcypsp3','The Lifeline Company','August editorial creative'],
['1RoRpZ1ug_84cgA1tj_oU8zVmPc7bzM_z','RenewCap UK','Diaspora clean-energy carousel creative'],
['1SoK2hPWG6iNd53vI_Tgc2J6KKh40eHJC','RenewCap UK','Campaign carousel creative'],
['14BgUJX5mAswvDAM-X5xMdNYUtsuvatHP','RenewCap UK','Social campaign creative'],
['1S6uPhOzg15rpIT7rhhAhWJMvfotI92Li','Black Music Festival','August campaign creative'],
['1iyIE8ozQneEv_yiP53DCW4gUkDTTOQxT','Lightning Radio Network','Monthly social creative'],
['16qXBQq3WH_6Hpc_QYHO88F3Ep2ls0CG0','TFC','Finished carousel creative'],
['1h9nKCTyfNeKaczecWP_mQwHAf2_WVo1V','For the Love of Pets','Finished social creative'],
['1tR05LBKXw16OYfpi9K_58pcm-qvbSb-h','Luria Events','Event campaign creative'],
['1BDfHb1kbjxJx6hWaDBZ159R8w8Pgkt_v','Kevin Warrington Comedy','Comedy campaign creative'],
['132v-vbe8QExUVwrCuTD4MjWyVf1chPtM','GENuine','Finished September creative'],
['1jdsk3J6hYRc6PK-2-Jg4ClxB4FggkZIv','Dr Isoken','Personal-brand social creative'],
['1wP1s-ZbfTBkTV9TF5UOSFZZV47UbalkH','LITD','Monthly campaign creative'],
['1Xr7pFsomMmCbSk9LX_i-arsmzjF_nLbt','Citywide Housing','Landlord campaign creative']
];

const proof=document.createElement('section');
proof.className='sm-proof-extension';
proof.innerHTML=`<div class="kd-container"><div class="sm-more-head"><div><div class="sm-eyebrow">More client work</div><h3>A broader look at the work.</h3></div><p>Finished creative across property, wealth education, health, therapy, clean energy, radio, live events, comedy, pet care and personal brands. The aim is not one house style. It is work that fits the client.</p></div><div class="sm-more-work-grid">${designs.map(([id,name,desc])=>`<figure class="sm-more-work-card"><img loading="lazy" src="https://drive.google.com/thumbnail?id=${id}&sz=w1200" alt="${name} social media design example"><figcaption><strong>${name}</strong><span>${desc}</span></figcaption></figure>`).join('')}</div><div class="sm-proof-note-public">Selected finished creative from Kydos-managed client programmes.</div></div>`;
realWork.insertAdjacentElement('afterend',proof);

let lastInserted=proof;
if(currentVideo){
const videos=[
['1V5aQ46iryHibZyYboHqa-jNfoL_TzYxC','Black Health Initiative','Campaign recap video'],
['1Qjc66ntT-KAs9Oq6ezBGVZlyj40ZXBCx','Ethical Wealth Academy','September event video'],
['1vt2d2T-RJgrdIjZXcIrPEIhIKOBX94u5','Ethical Wealth Academy','Social campaign video'],
['1IsW4PenDNXxhLOmR5PJgiZAb74EUg6Hp','Black Music Festival','Festival campaign video'],
['1saiDPX2koHYeol5yWzexft7Hi9H9gqHV','Lightning Radio Network','Short-form social video'],
['1rcmWgk2ugbJjggutIXN_LJUMMQmy0dJb','TFC','Finished social Reel'],
['1FNmwMncYRB8Ty8Ji92kT8U56Y03iMLGW','For the Love of Pets','Finished social Reel'],
['1fRZxOAoEXfa4_pL0f_lqSeJ3Hlhhlwfe','Luria Events','Event campaign video'],
['1qp8815wot4VKQuFLo0g3CorheZxonos0','Kevin Warrington Comedy','Finished campaign Reel'],
['1mUvpi_SwUmY4jZwPgGD4dCgoIJ3TwtJH','GENuine','Finished social video']
];
const section=document.createElement('section');
section.className='sm-video-proof-extension';
section.innerHTML=`<div class="kd-container"><div class="sm-more-head"><div><div class="sm-eyebrow">More short-form video</div><h3>Motion work across more client categories.</h3></div><p>The original BHI example stays in place. These additional finished videos expand the proof across education, events, radio, comedy, pet care and other client programmes.</p></div><div class="sm-more-video-grid">${videos.map(([id,name,desc])=>`<article class="sm-more-video-card"><div class="sm-more-video-stage" data-drive-video="${id}"><img loading="lazy" src="https://drive.google.com/thumbnail?id=${id}&sz=w900" alt="${name} video thumbnail"><button class="sm-video-play" type="button" aria-label="Play ${name} video"><span>▶</span></button></div><div class="caption"><strong>${name}</strong><span>${desc}</span></div></article>`).join('')}</div></div>`;
currentVideo.insertAdjacentElement('afterend',section);
lastInserted=section;
section.addEventListener('click',e=>{const button=e.target.closest('.sm-video-play');if(!button)return;const stage=button.closest('[data-drive-video]');const id=stage?.dataset.driveVideo;if(!id)return;const card=stage.closest('.sm-more-video-card');const title=card?.querySelector('.caption strong')?.textContent||'Kydos client video';stage.innerHTML=`<iframe loading="lazy" allow="autoplay; fullscreen" allowfullscreen title="${title}" src="https://drive.google.com/file/d/${id}/preview"></iframe>`});
}

const results=document.createElement('section');
results.className='sm-results-extension';
results.innerHTML=`<div class="kd-container"><div class="sm-more-head"><div><div class="sm-eyebrow">Measured performance</div><h3>We look beyond whether the feed looks good.</h3></div><p>Client reporting combines platform analytics with website and lead reporting where Kydos is managing the wider journey. The figures below are taken from Kydos client reports and are labelled by channel so different outcomes are not blended together.</p></div><div class="sm-results-grid">
<article class="sm-result-card"><div class="sm-result-client">Ethical Wealth Academy · Instagram · July 2026</div><strong>11.7K</strong><span>views</span><p>Up 27% from June, alongside 329 interactions and 28 followers gained.</p></article>
<article class="sm-result-card"><div class="sm-result-client">Ethical Wealth Academy · TikTok · August 2026</div><strong>92.4%</strong><span>For You traffic</span><p>Up from 4.1% in July, with 491 total viewers during the August reporting period.</p></article>
<article class="sm-result-card"><div class="sm-result-client">Citywide Housing · Website · April 2026</div><strong>332</strong><span>active readers</span><p>325 new readers were recorded in the monthly website reporting.</p></article>
<article class="sm-result-card"><div class="sm-result-client">Citywide Housing · Lead programme · April 2026</div><strong>90</strong><span>leads recorded</span><p>39 were classified as hot leads and 51 entered the nurture sequence. This reflects the wider Kydos digital programme, not social media in isolation.</p></article>
</div><p class="sm-results-disclaimer">Performance varies by client, audience, budget, offer and channel. These are historical client-reporting examples, not guaranteed future results.</p></div>`;
lastInserted.insertAdjacentElement('afterend',results);
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();})();