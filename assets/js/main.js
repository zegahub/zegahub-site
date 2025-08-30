document.addEventListener('DOMContentLoaded',()=>{
  // Simple header reveal on scroll
  let lastY = window.scrollY;
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    header.style.boxShadow = y>10 ? '0 2px 20px rgba(0,0,0,.06)' : 'none';
    lastY = y;
  });
});