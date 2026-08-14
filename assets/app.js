document.querySelectorAll('.menu-button').forEach(button=>button.addEventListener('click',()=>{const nav=document.querySelector('.mobile-nav');if(!nav)return;const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',open)}));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.mobile-nav')?.classList.remove('open')));
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
const leaders=document.querySelector('#home-leaders');if(leaders){const rows=window.BARFORD_DATA.allTimeBatting.slice(0,5);leaders.innerHTML=rows.map(r=>`<li><b>${r.player}</b><span>${r.runs} runs</span></li>`).join('')}
