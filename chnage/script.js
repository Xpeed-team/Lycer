const navBtn = document.querySelector("#navbarNavBtn");
const navNav = document.querySelector("#navbarNav");
const navLinks = document.getElementsByClassName("nav-link");
const opacity = document.getElementsByClassName("opacity");
const tops = document.getElementsByClassName("tops");
const bottoms = document.getElementsByClassName("bottoms");
const person = document.getElementsByClassName("person");
const itemZ = document.getElementsByClassName("itemZ");
const water = document.getElementsByClassName("water");
const end = document.getElementById("end");
const end2 = document.getElementById("end2");

//navbar show and hide functionality on mobile
navBtn.addEventListener("click", () => {
  navNav.classList.toggle("open");
});

//scroll
//adding the scrolled class when scrolled
const feature = document.getElementById("feature");
const afterFeatures = document.getElementById("afterFeatures");
const testimonial = document.getElementById("testimonial");
const price = document.getElementById("price");
const info = document.getElementById("info");

window.onscroll = () => {
  let current = document.getElementsByClassName("active");

  if (window.scrollY < feature.offsetTop) {
    current[0].className = current[0].className.replace(" active", "");
    navLinks[0].className += " active";
    opacity[0].classList.remove("OpacityN");
    opacity[0].classList.add("Opacity");
  } else {
    opacity[0].classList.remove("Opacity");
    opacity[0].classList.add("OpacityN");
  }

  if (window.scrollY >= end.offsetTop) {
    current[0].className = current[0].className.replace(" active", "");
    navLinks[1].className += " active";
    for (let i = 0; i <= 3; i++) {
      if (i >= 1) {
        opacity[i].classList.remove("OpacityN");
        opacity[i].classList.add("Opacity");
      }
      if (i <= 1) {
        tops[i].classList.remove("topItemN");
        bottoms[i].classList.remove("bottomItemN");
        tops[i].classList.add("topItem");
        bottoms[i].classList.add("bottomItem");
      }
    }
  } else {
    for (let i = 0; i <= 3; i++) {
      if (i >= 1) {
        opacity[i].classList.remove("Opacity");
        opacity[i].classList.add("OpacityN");
      }
      if (i <= 1) {
        tops[i].classList.remove("topItem");
        bottoms[i].classList.remove("bottomItem");
        tops[i].classList.add("topItemN");
        bottoms[i].classList.add("bottomItemN");
      }
    }
  }
  if (window.scrollY >= afterFeatures.offsetTop) {
    for (let i = 0; i <= 3; i++) {
      if (i >= 1) {
        opacity[i].classList.remove("Opacity");
        opacity[i].classList.add("OpacityN");
      }
      if (i <= 1) {
        tops[i].classList.remove("topItem");
        bottoms[i].classList.remove("bottomItem");
        tops[i].classList.add("topItemN");
        bottoms[i].classList.add("bottomItemN");
      }
    }
  } //one is what
  //2 is from 0 to 3
  //3 is form 1 to 4
  //4 is from 2 to 5
  for (let i = 0; i < 3; i++) {
    if (i == 1) {
      if (
        window.scrollY >= water[0].offsetTop &&
        window.scrollY < water[2].offsetTop
      ) {
        water[i].classList.remove("rightItemN");
        water[i].classList.add("rightItem");
      } else {
        water[i].classList.remove("rightItem");
        water[i].classList.add("rightItemN");
      }
    }
    if (
      window.scrollY >= water[i].offsetTop &&
      window.scrollY < water[i + 3].offsetTop
    ) {
      water[i + 2].classList.remove("rightItemN");
      water[i + 2].classList.add("rightItem");
    } else {
      water[i + 2].classList.remove("rightItem");
      water[i + 2].classList.add("rightItemN");
    }
  }
  if (
    window.scrollY >= testimonial.offsetTop &&
    window.scrollY < price.offsetTop
  ) {
    current[0].className = current[0].className.replace(" active", "");
    navLinks[2].className += " active";
    for (let i = 0; i < 4; i++) {
      if (i % 2 != 0) {
        person[i].classList.remove("leftItemsN");//left
        person[i].classList.add("leftItems");
      } else {
        person[i].classList.remove("rightItemN");
        person[i].classList.add("rightItem");//right
      }
    }
  } else {
    for (let i = 0; i < 4; i++) {
        if (i % 2 != 0) {
      person[i].classList.remove("leftItems");
      person[i].classList.add("leftItemsN");
    } else {
      person[i].classList.remove("rightItem");
      person[i].classList.add("rightItemN");
    }
    }
  }

  if (window.scrollY >= price.offsetTop && window.scrollY < info.offsetTop) {
    current[0].className = current[0].className.replace(" active", "");
    navLinks[3].className += " active";
    for (let i = 0; i < 3; i++) {
      itemZ[i].classList.remove("leftItemN");
      itemZ[i].classList.add("leftItem");
    }
  } else {
    for (let i = 0; i < 3; i++) {
      itemZ[i].classList.remove("leftItem");
      itemZ[i].classList.add("leftItemN");
    }
  }
  if (window.scrollY >= info.offsetTop) {
    current[0].className = current[0].className.replace(" active", "");
    navLinks[4].className += " active";
  }
  if (window.scrollY >= end2.offsetTop) {
    opacity[4].classList.remove("OpacityN");
    opacity[4].classList.add("Opacity");
  } else {
    [4];
    opacity[4].classList.remove("Opacity");
    opacity[4].classList.add("OpacityN");
  }
};
$(document).ready(function () {
  $(".projects-tab-btn").click(function () {
    const value = $(this).attr("data-filter");

    if (value === "all") {
      $(".projects-tab-item").show();
    } else {
      $(".projects-tab-item")
        .not("." + value)
        .hide();
      $(".projects-tab-item")
        .filter("." + value)
        .show();
    }
  });

  $(".projects-tab-btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
