// --- create overlay function ---:
function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
}

// --- Open Close sidebar on mobile devices ---:
let openBtn = document.querySelector(".toggle-btn");
let closeBtn = document.querySelector(".close-btn");
let aside = document.querySelector(".aside-menu");

openBtn.addEventListener("click", () => {
  aside.style.cssText = `left: 0;`;
  createOverlay();
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
      item.lastElementChild.style.cssText = `transform: rotate(90deg);`;
      open = true;
    } else {
      item.nextElementSibling.classList.remove("active");
      item.firstElementChild.style.cssText = `transform: rotate(0deg);`;
      open = false;
    }
  });
});

// --- play the video ---:
let videoSection = document.querySelector(".video .container");
let videoPlayer = document.querySelector(".video .video-play-icon");
let playing = false;

videoPlayer.addEventListener("click", function () {
  if (playing === false) {
    createOverlay();

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
// --- close the video ---:
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("overlay")) {
    if (playing === true) {
      document.querySelector(".video .container video").remove();
      document.querySelector(".overlay").remove();
      playing = false;
    }
  }
});

//  --- Slider ---:
let slider = document.querySelector(".slider");
let slides = Array.from(document.querySelectorAll(".slide"));
let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");
let indicators = Array.from(document.querySelectorAll(".indicators li"));
let current = 0;
let slidesCount = slides.length - 1;

//  Remove Active Class function:
function removeActive() {
  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));
}

//  prev button function  :
prev.addEventListener("click", () => {
  removeActive();

  current--;

  if (current < 0) {
    current = slidesCount;
  }

  slides[current].classList.add("active");
  indicators[current].classList.add("active");
});

//   Next button function  :
next.addEventListener("click", () => {
  removeActive();

  current++;

  if (current > slidesCount) {
    current = 0;
  }

  slides[current].classList.add("active");
  indicators[current].classList.add("active");
});

//  indicators click function :
indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    removeActive();
    current = e.target.dataset.index;
    slides[current].classList.add("active");
    indicators[current].classList.add("active");
  });
});

//   Set autoplay function  :
let clickNext = () => {
  next.click();
};

let repeater = setInterval(clickNext, 5000);

//   Stop autoplay on hover function  :
slider.addEventListener("mouseover", () => {
  clearInterval(repeater);
});

//   Set autoplay on mouse out function  :
slider.addEventListener("mouseout", () => {
  repeater = setInterval(clickNext, 5000);
});
//# sourceMappingURL=main.js.map
