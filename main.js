const body = document.querySelector("body");
const search = document.getElementById("search");
const inp = document.querySelector(".form-control");
const searchBar = document.querySelector(".search-bar");
const mic = document.querySelector(".fa-microphone");
const menu = document.querySelector(".fa-ellipsis-v");
const app = document.querySelectorAll(".app");
const btn = document.getElementById("sbtn");
const nav = document.querySelector("nav");
const menuHide = document.querySelector(".menu-options");
const backbtn = document.querySelector(".fa-arrow-right");
const tab = document.querySelector(".box");
const fbody = document.getElementById("full-body");



window.onscroll= function(){scrollFuc()};

function scrollFuc(){
    if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
        search.style.padding="0";
        inp.style.backgroundColor="white";
        searchBar.style.backgroundColor="#333";
        searchBar.style.padding="10px";
        mic.style.right="25px";
        mic.style.top="20px";

      } else {
        search.style.padding='10px 20px';
        searchBar.style.padding="0";
        inp.style.backgroundColor="lightgray";
        mic.style.right="15px";
        mic.style.top="10px";
      }
}

btn.addEventListener("click",change);

function change(){
  search.style.padding="0";
  searchBar.style.backgroundColor="#333";
  searchBar.style.padding="5px 10px";
  searchBar.style.transform="translate(0,-190px)";
  mic.style.right="25px";
  mic.style.top="20px";
  nav.style.padding="0";
  inp.style.backgroundColor="white";

}

menu.addEventListener("click",showMenu);

function showMenu(){
  menuHide.style.display="block";
  menuHide.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500,fill:"forwards"});

}

backbtn.addEventListener("click",dontMenu);

function dontMenu(){
  menuHide.style.display="none";
}



for(let i=0;i<app.length;i++){
  app[i].addEventListener('click',function(){
    app[i].classList.toggle("app-active")
  });

}

