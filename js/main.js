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

// --- remove class function ---:
function removeActiveClass(e) {
  e.forEach((item) => item.classList.remove("active"));
}

// --- Add active class to the navbar links ---:
let navLinks = document.querySelectorAll(".navbar .nav-link");
let SubNavLinks = document.querySelectorAll(".navbar .sub-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClass(navLinks);
    this.classList.add("active");
  });
});

SubNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClass(SubNavLinks);
    this.classList.add("active");
  });
});

// --- Toggle dark light mood ---:
let themeIcon = document.querySelector("#theme-swicher .icon");
let input = document.querySelector("#checkbox");

themeIcon.addEventListener("click", function () {
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");

  if (input.checked === true) {
    console.log("checkbox unchecked");
    document.styleSheets[2].cssRules[0].style.setProperty("--white-clr", "#292b2e");
  } 
  if (input.checked === false) {
    console.log("checkbox checked");
    document.styleSheets[2].cssRules[0].style.setProperty("--white-clr", "#fff");
  }
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

// --- Add animation to the p element ---:
let video = document.querySelector(".video ");
let image = document.querySelector(".video img");

window.addEventListener("scroll", function () {
  if (window.innerWidth > 1199) {
    if (window.scrollY >= video.offsetTop - 100) {
      image.style.cssText = `animation: round 2s ease-in-out alternate;`;
    } else {
      image.style.cssText = `animation: unset;`;
    }
  }
});

// --- Add animation to the titles elements ---:
let contact = document.querySelector(".contact");
let h1 = document.querySelector(".contact h1");

let services = document.querySelector(".services");
let h2 = document.querySelector(".services h2");

window.addEventListener("scroll", function () {
  if (window.scrollY >= contact.offsetTop - 250) {
    h1.style.setProperty("--before-width", "100%");
  } else {
    h1.style.setProperty("--before-width", "50px");
  }
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= services.offsetTop - 250) {
      h2.style.setProperty("--before-width", "100%");
    } else {
      h2.style.setProperty("--before-width", "50px");
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
