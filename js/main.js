// ------ Open Close sidebar -------:
let openBtn = document.querySelector(".toggle-btn");
let closeBtn = document.querySelector(".close-btn");
let aside = document.querySelector(".aside-menu");

openBtn.addEventListener("click", function () {
  aside.style.cssText = `left: 0;`;
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
});
closeBtn.addEventListener("click", function () {
  aside.style.cssText = `left: -100vw;`;
  document.querySelector(".overlay").remove();
});

// ------ open close mega-menu --------:
let subNavbar = document.querySelectorAll(".sub-navbar");
let megaMenu = document.querySelectorAll(".mega-menu");
let open = false;

megaMenu.forEach((item) => {
  item.addEventListener("click", function () {
    subNavbar.forEach((item) => {
      if (item.classList.contains("active")) {
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

// ------- play video -------:
let videoSection = document.querySelector(".video .container");
let videoPlayer = document.querySelector(".video .video-play-icon");
let playing = false;

videoPlayer.addEventListener("click", function () {
  if (playing === false) {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    let video = document.createElement("video");
    video.setAttribute("autoplay", "true");
    video.setAttribute("controls", "true");
    video.setAttribute("playsinline", "true");

    let source = document.createElement("source");
    source.setAttribute("src", "videos/video.mp4");
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    videoSection.appendChild(video);
    video.play();
    playing = true;
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("overlay")) {
    if (playing === true) {
      document.querySelector(".video .container video").remove();
      document.querySelector(".overlay").remove();
      playing = false;
    }
  }
});

// ------ Slider --------:
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
};
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});


//# sourceMappingURL=main.js.map
