const toggle=document.querySelector('.menu'),nav=document.querySelector('nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('[data-category]').forEach(card=>card.hidden=button.dataset.filter!=='todos'&&card.dataset.category!==button.dataset.filter)}));const form=document.querySelector('#brief');if(form){const emailField=form.querySelector('#email');emailField?.addEventListener('input',()=>emailField.setCustomValidity(''));form.addEventListener('submit',event=>{event.preventDefault();emailField?.setCustomValidity('');if(!form.reportValidity())return;const data=new FormData(form);const destination=event.submitter?.value||'whatsapp';const email=String(data.get('email')||'').trim();if(destination==='email'&&!email){emailField.setCustomValidity('Informe seu e-mail para que a Solvi possa responder.');emailField.reportValidity();return}const message=`Olá, Atendimento Solvi! Meu nome é ${data.get('nome')}. Meu negócio: ${data.get('negocio')}. Tenho interesse em ${data.get('servico')}.${email?' Meu e-mail para retorno: '+email+'.':''} Podemos conversar?`;if(destination==='email'){const subject='Novo contato pelo site — Solvi';window.location.assign('mailto:atendimento@solvi.ia.br?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(message));return}window.location.assign('https://wa.me/5554996349062?text='+encodeURIComponent(message))})}
/* SOLVI MOBILE START */
(()=>{
 const home=document.querySelector('.solvi-home');
 if(!home||!('IntersectionObserver' in window))return;
 const mobile=matchMedia('(max-width:680px), (pointer:coarse)');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const cards=[...home.querySelectorAll('.model')];
 let observer;
 const setup=()=>{
  if(observer)observer.disconnect();
  cards.forEach(card=>card.classList.remove('mobile-card-enter'));
  if(!mobile.matches||reduced.matches)return;
  observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(!entry.isIntersecting||entry.target.hidden)return;
    entry.target.classList.add('mobile-card-enter');
    observer.unobserve(entry.target);
   });
  },{threshold:0.12,rootMargin:'0px 0px -24px 0px'});
  cards.forEach(card=>observer.observe(card));
 };
 setup();
 mobile.addEventListener('change',setup);
 reduced.addEventListener('change',setup);
})();
/* SOLVI MOBILE END */
