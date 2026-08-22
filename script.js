const nav=document.querySelector('.nav'),btn=document.querySelector('.menu-btn');
btn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));