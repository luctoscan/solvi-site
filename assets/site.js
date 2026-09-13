const menuBtn=document.getElementById('menuBtn');
const navlinks=document.getElementById('navlinks');

menuBtn?.addEventListener('click',()=>{
  const open=navlinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
navlinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  navlinks.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
}));

const socialStatus=document.getElementById('socialStatus');
document.querySelectorAll('[data-social-pendente="true"]').forEach(link=>link.addEventListener('click',e=>{
  e.preventDefault();
  if(socialStatus){
    socialStatus.textContent='Perfil em breve — indisponível no momento.';
    socialStatus.classList.add('show');
    clearTimeout(window.__socialTimer);
    window.__socialTimer=setTimeout(()=>socialStatus.classList.remove('show'),2600);
  }
}));
