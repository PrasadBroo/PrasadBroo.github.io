const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const topBtn = document.getElementById('topbtn');
const projectOne = document.querySelector('.project1');
const projectTwo = document.querySelector('.project2');
const projectThree = document.querySelector('.project3');
const projectFour = document.querySelector('.project4');
const projectFive = document.querySelector('.project5');
const projectSix = document.querySelector('.project6');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('burger-active')
});
topBtn.addEventListener('click', topFunction);
window.onscroll = () => (document.body.scrollTo > 20 || document.documentElement.scrollTop > 20) ? topBtn.style.display = "block" : topBtn.style.display = "none";

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

projectOne.addEventListener('click', () => window.open("https://github.com/PrasadBroo/PrasadBroo.github.io", '_blank'));
projectTwo.addEventListener('click', () => window.open("https://github.com/PrasadBroo/Realtime-Chat", '_blank'));
projectThree.addEventListener('click', () => window.open("https://github.com/PrasadBroo/Sololearn-Api", '_blank'));
projectFour.addEventListener('click', () => window.open("https://github.com/PrasadBroo/Link-Shortner-Website", '_blank'));
projectFive.addEventListener('click', () => window.open("https://github.com/PrasadBroo/Firebase-Chat", '_blank'));
projectSix.addEventListener('click', () => window.open("https://github.com/PrasadBroo/Bookmark-Application", '_blank'));