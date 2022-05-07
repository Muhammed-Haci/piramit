// Open Close sidebar
let openMenu = document.querySelector(".toggle-btn");
let closeMenu = document.querySelector(".close-btn");
let aside = document.querySelector(".aside-menu");

openMenu.addEventListener("click", function () {
  aside.style.cssText = `left: 0; box-shadow: 40px 0px 100px black;`;
});
closeMenu.addEventListener("click", function () {
  aside.style.cssText = `left: -100vw; box-shadow: none;`;
});

// open close mega-menu:
let subNavbar = document.querySelectorAll(".sub-navbar");
let megaMenu = document.querySelectorAll(".mega-menu");
let open = false;

megaMenu.forEach((item) => {
  item.addEventListener("click", function () {
    subNavbar.forEach((item) => {
      if(item.classList.contains("active")){
        item.classList.remove("active");
      }
    });
    if (open === false) {
      item.nextElementSibling.classList.add("active");
      item.firstElementChild.style.cssText = `transform: rotate(90deg);`;
      open = true;
    } else {
      item.nextElementSibling.classList.remove("active");
      item.firstElementChild.style.cssText = `transform: rotate(0deg);`;
      open = false;
    }
  });
});

// play video: 
let videoPlayer = document.querySelector(".video .video-play-icon");
let video = document.querySelector(".video video");
let playing = false;

videoPlayer.addEventListener("click", function () {
  if (playing === false && video.paused) {
    video.style.cssText = `display: block;`;
    video.play();
    playing = true;
  }
});
document.addEventListener("click", function (e) {
  if (e.target !== video && playing === true) {
    video.style.cssText = `display: none;`;
    video.pause();
    playing = false;
  }
});


// --------- scroll to the top Function:

// let scrollUp = document.querySelector('.scroll-up');

// window.onscroll = function () {
//     if (window.scrollY >= 600 ) {
//       scrollUp.style.display = "block";
//     }else {
//       scrollUp.style.display = "none";
//     }
// };

// scrollUp.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })
// };

// ------- Search field (input) Function:

// let search_icon = document.querySelector('#search-icon');
// let input = document.querySelector('#search-form');
// let search = false;

// search_icon.addEventListener("click", function(){
//   if (search === true) {
//       input.style.display = "none";
//       open = false;
//   } else {
//       input.style.display = "block";
//       open = true;
//   }
// });

// ------- nav active link function:
//# sourceMappingURL=main.js.map
