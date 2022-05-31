import Swiper, { Mousewheel, Navigation } from "swiper";
import "swiper/css";

function swiperSliderCases() {
  new Swiper(".slider-swiper__swiper", {
    modules: [Mousewheel],
    speed: 700,
    slidesPerView: 1,
    mousewheel: {
      releaseOnEdges: true,
    },
  });
}

const swiperSliderPartner = () => {
  new Swiper(".partner__slide", {
    modules: [Navigation, Mousewheel],
    speed: 800,
    slidesPerView: 1,
    mousewheel: {
      releaseOnEdges: true,
    },
    navigation: {
      nextEl: ".partner__gives-client",
      prevEl: ".partner__gives-partner",
    },
  });
};

const swiperSliderVacancy = () => {
  new Swiper(".swiper", {
    modules: [Navigation],
    speed: 400,
    direction: "vertical",
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".about__btn",
      prevEl: ".vacancy__resume-img",
    },
  });
};

export { swiperSliderCases, swiperSliderPartner, swiperSliderVacancy };
