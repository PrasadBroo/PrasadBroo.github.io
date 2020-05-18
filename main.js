const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const topBtn = document.getElementById('topbtn');

burger.addEventListener('click',()=>{navLinks.classList.toggle('active');burger.classList.toggle('burger-active')});
topBtn.addEventListener('click',topFunction);
window.onscroll = ()=>(document.body.scrollTo >20 || document.documentElement.scrollTop > 20)?topBtn.style.display="block":topBtn.style.display="none";

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }