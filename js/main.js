// Open Close sidebar
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

// open close mega-menu:
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

// play video:
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


//# sourceMappingURL=main.js.map
