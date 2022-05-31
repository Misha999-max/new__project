import ProgressBarCircleAnimation from "./progressBarCircle";
import { animationLineBefore, animationLineAfter } from "./progressBarLine";

function showProgressBarCircleByScroll() {
  const sectionPositionHeight =
    document.querySelector(".slider-swiper").getBoundingClientRect().height / 2;
  const sectionPositionBottom = document
    .querySelector(".slider-swiper")
    .getBoundingClientRect().bottom;

  if (sectionPositionBottom <= sectionPositionHeight) {
    ProgressBarCircleAnimation();
    window.removeEventListener("scroll", showProgressBarCircleByScroll);
  }
}

function showProgressBarLineByScroll() {
  const sectionPositionHeight =
    document.querySelector(".prouduct-team").getBoundingClientRect().height / 2;
  const sectionPositionBottom = document
    .querySelector(".prouduct-team")
    .getBoundingClientRect().bottom;

  if (sectionPositionBottom <= sectionPositionHeight) {
    animationLineBefore();
    setTimeout(animationLineAfter, 2500);
    window.removeEventListener("scroll", showProgressBarCircleByScroll);
  }
}

export { showProgressBarCircleByScroll, showProgressBarLineByScroll };
