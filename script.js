function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".nav-pt2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-pt2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    tl.to(".nav-pt2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-pt2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

navAnimation();

// page2 animation

function page2Animation() {
  let rightElems = document.querySelectorAll(".right-elm");

  rightElems.forEach((elm) => {
    elm.addEventListener("mouseenter", () => {
      gsap.to(elm.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elm.addEventListener("mouseleave", () => {
      gsap.to(elm.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elm.addEventListener("mousemove", (dets) => {
      gsap.to(elm.childNodes[3], {
        x: dets.x - elm.getBoundingClientRect().x - 90,
        y: dets.y - elm.getBoundingClientRect().y - 120,
      });
    });
  });
}

page2Animation();

// page3 animation
function page3VideoAnimation() {
  var page3Center = document.querySelector(".p3-center");
  var video = document.querySelector("#p3 video");

  page3Center.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });

  let sections = document.querySelectorAll("#sec-right");
  sections.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.childNodes[7].style.opacity = 1;
      elem.childNodes[7].play();
    });

    elem.addEventListener("mouseleave", () => {
      elem.childNodes[7].style.opacity = 0;
      elem.childNodes[7].load();
    });
  });
}

page3VideoAnimation();
