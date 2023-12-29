const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");
const btn = document.querySelector(".close-btn");
const container = document.querySelector(".nav-container");
navToggle.addEventListener("click", (e) => {
     e.preventDefault();
     // responsive drop-down menu
     if (container.classList.contains("show")){
          container.classList.remove("show");
     }
     else{
          container.classList.add("show");
     }  

});

