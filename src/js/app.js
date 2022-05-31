import "../scss/app.scss";

import priceRange from "./modules/noUISlider";

import { changeColorBtnPartner } from "./modules/changeColor";

import { closeMenu, AnimationGamburger, openMenu } from "./modules/menu";

import { triggerCloseModal, triggerOpenModal } from "./modules/modal";

import forms from "./modules/form";

import openVideo from "./modules/video";

import {
  showProgressBarCircleByScroll,
  showProgressBarLineByScroll,
} from "./modules/showAnimationScroll";

import {
  swiperSliderCases,
  swiperSliderPartner,
  swiperSliderVacancy,
} from "./modules/swiper";

import {
  sliderScrollX,
  sliderScrollY,
  sliderScrollResultY,
  sliderScrollXMedia,
  slideScroOpacity,
  sliderScrollScale,
  sliderScrollResultVisian,
} from "./modules/scrollMagic";

import {
  animationParallaxVideoHomePage,
  animationParallaxVideoCareer,
} from "./modules/parallax";

import { FormValidator } from "./modules/validate";

window.addEventListener("DOMContentLoaded", () => {
  /* SLIDE CASE */

  if (
    document.querySelector(".diletant__completed-top") &&
    document.querySelector(".diletant__completed-img") &&
    document.querySelector(".diletant__completed-wrraper-desc")
  ) {
    slideScroOpacity(
      ".diletant__completed-top",
      ".diletant__completed-img",
      ".diletant__completed-wrraper-desc"
    );
  }

  /* SLIDE SCALE SCROLL */
  if (
    document.querySelector(".case__peculiarities-banner") &&
    document.querySelector(".case__peculiarities-wrapper")
  ) {
    sliderScrollScale(
      ".case__peculiarities-banner",
      ".case__peculiarities-wrapper"
    );
  }

  /* SLIDE RESULT SEWING  OPACITY */
  if (
    document.querySelector(".sewing__result-img-treug") &&
    document.querySelector(".result")
  ) {
    sliderScrollResultVisian(".sewing__result-img-treug", ".result");
  }
  /*PRICE RANGE IN MODUL*/
  if (
    document.getElementById("range") &&
    document.getElementById("range-value")
  ) {
    priceRange();
  }

  /*CHANGE COLOR BTN PARTNER IN SLIDER*/
  if (
    document.querySelector(".partner__gives-partner") &&
    document.querySelector(".partner__gives-client")
  ) {
    changeColorBtnPartner(".partner__gives-client", ".partner__gives-partner");
  }

  /*
	OPEN MENU
	CLOSE MENU
	ANIMATION GAMBURGER
	*/
  if (
    document.querySelector(".menu") &&
    document.querySelector(".menu__gamburger") &&
    document.querySelector(".header-menu")
  ) {
    openMenu(".header-menu", ".menu");
    closeMenu(".menu__gamburger", ".menu");
    AnimationGamburger();
  }

  /*
	OPEN MODAL 
	CLOSE MODAL
	*/
  if (
    document.querySelector(".modal") &&
    document.querySelectorAll(".header-menu") &&
    document.querySelectorAll(".trigger")
  ) {
    triggerCloseModal(".modal", ".header-menu");
    triggerOpenModal(".trigger", ".modal");
  }

  /*FORM*/
  if (document.querySelectorAll("form")) {
    forms("form");
  }

  /*OPEN VIDEO*/
  if (document.querySelector(".video__button")) {
    openVideo(".video__button", ".video__wrap");
  }

  /*PROGRESSBAR ANIMATION CIRCLE*/
  if (
    document.querySelector(".semiBarTop") &&
    document.querySelector(".slider-swiper")
  ) {
    window.addEventListener("scroll", showProgressBarCircleByScroll);
  }

  /*SWIPER SLIDER IN PARTNER PAGE*/
  if (document.querySelector(".partner__slide")) {
    swiperSliderPartner();
  }

  /*SWIPER SLIDER IN VACANCY PAGE*/
  if (
    document.querySelector(".about__btn") &&
    document.querySelector(".vacancy__wrraper") &&
    document.querySelector(".vacancy__resume-hidden") &&
    document.querySelector(".vacancy__resume-img")
  ) {
    swiperSliderVacancy(
      ".about__btn",
      ".vacancy__wrraper",
      ".vacancy__resume-hidden"
    );
  }

  /*SWIPER SLIDER IN CASES PAGES*/
  if (document.querySelector(".slider-swiper__swiper")) {
    swiperSliderCases();
  }

  /*PARALLAX VIDEO IN HOMEPAGE*/
  if (document.querySelector(".rellax1")) {
    animationParallaxVideoHomePage();
  }

  /*PARALLAX VIDEO IN CAREER*/
  if (document.querySelector(".rellax2")) {
    animationParallaxVideoCareer();
  }

  /*PROGRESSBAR ANIMATION LINE*/
  if (
    document.querySelector(".port-results__animation-line2") &&
    document.querySelector(".prouduct-team") &&
    document.querySelector(".port-results__animation-line1")
  ) {
    window.addEventListener("scroll", showProgressBarLineByScroll);
  }

  /*SLIDER MAGIC SCROLL RIGHT*/
  if (
    document.querySelector(".slider-right__list") &&
    document.querySelector(".slider-right")
  ) {
    sliderScrollX(".slider-right__list", ".slider-right");
  }

  /*SLIDER MAGIC SCROLL LEFT*/
  if (
    document.querySelector(".slider-left__list") &&
    document.querySelector(".slider-left")
  ) {
    sliderScrollX(".slider-left__list", ".slider-left");
  }

  const mediaQuery = window.matchMedia("(max-width: 568px)");

  /*SLIDER MAGIC SCROLL MEDIA MAX-WIDTH 568PX LEFT*/
  if (
    document.querySelector(".slider-right__list") &&
    document.querySelector(".slider-right") &&
    mediaQuery.matches
  ) {
    sliderScrollXMedia(".slider-right__list", ".slider-right");
  }

  /*SLIDER MAGIC SCROLL MEDIA MAX-WIDTH 568PX LEFT*/
  if (
    document.querySelector(".slider-left__list") &&
    document.querySelector(".slider-left") &&
    mediaQuery.matches
  ) {
    sliderScrollXMedia(".slider-left__list", ".slider-left");
  }

  /*SLIDER MAGIC SCROLL Y BANNER CASES*/
  if (
    document.querySelector(".case-banner__slider") &&
    document.querySelector(".case-banner")
  ) {
    sliderScrollY(".case-banner__slider", ".case-banner");
  }

  if (
    document.querySelector("#slideContainer5") &&
    document.querySelector("#pinContainer5")
  ) {
    sliderScrollResultY("#slideContainer5", "#pinContainer5");
  }

  /*VALIDATOR*/
  const fields = ["username", "email", "phone"];

  const validator = new FormValidator(
    document.querySelectorAll("form"),
    fields
  );

  validator.initialize();
});
