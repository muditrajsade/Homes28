'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

document.querySelector("#pro-btn").addEventListener("click",function(){
  openModal();

})

function openModal() 
{
  var modal = document.getElementById("myModal");
  document.body.style.overflowY='hidden';
  modal.style.display = "block";
  //event listener to close popup when clicking outside of it
  window.addEventListener("click", outsideModalClick);
}
// close popup
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  //remove event listener
  window.removeEventListener("click", outsideModalClick);
}

//handles click outside of modal
function outsideModalClick(event) 
{
  var modal = document.getElementById("myModal");
  document.body.style.overflowY='visible';
  if (event.target == modal) 
  {
      modal.style.display = "none";
      window.removeEventListener("click", outsideModalClick);
  }
}



document.querySelector("#sign_in").addEventListener("click",function(){

  let rg = document.querySelector("#username").value;
  let edf = document.querySelector("#password").value;
  if(rg == 'harshit' && edf == "12345"){
    closeModal();
    alert("signed in");
  }
  else{
    closeModal();
    alert("invalid login credentials");
  }

});
/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 