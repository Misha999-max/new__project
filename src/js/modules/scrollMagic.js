import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
ScrollMagicPluginIndicator(ScrollMagic);

const sliderScrollX = (slideContainerSelector, pinContainerSelector) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const wipeAnimation1 = new TimelineMax().to(slideContainer, 1, {
    x: "0",
  });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0.5,
  })
    .setTween(wipeAnimation1)
    // .addIndicators()
    .addTo(controller);
};

const sliderScrollXMedia = (slideContainerSelector, pinContainerSelector) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const wipeAnimation2 = new TimelineMax().to(slideContainer, 2, {
    x: "-85%",
  });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0.5,
  })
    .setTween(wipeAnimation2)
    // .addIndicators()
    .addTo(controller);
};

const slideScroOpacity = (
  slideContainerSelector,
  pinContainerSelector,
  textContainerOpacity
) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const textOpacity = document.querySelectorAll(textContainerOpacity);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const slideAnimationImg = new TimelineMax().to(slideContainer, 1, {
    x: "-200px",
  });
  const textAnimationOpacity = new TimelineMax().to(textOpacity, 1, {
    x: "200px",
  });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0,
  })
    .setTween(slideAnimationImg)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0,
  })
    .setTween(textAnimationOpacity)
    .addIndicators()
    .addTo(controller);
};

const sliderScrollScale = (slideContainerSelector, pinContainerSelector) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const wipeAnimation = new TimelineMax().to(slideContainer, 1.2, {
    scale: "1",
  });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0,
  })
    .setTween(wipeAnimation)
    // .addIndicators()
    .addTo(controller);
};

const sliderScrollResultVisian = (
  slideContainerSelector,
  pinContainerSelector
) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const wipeAnimation = new TimelineMax().to(slideContainer, 3, {
    opacity: "1",
    scale: "1",
  });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0.2,
  })
    .setTween(wipeAnimation)
    // .addIndicators()
    .addTo(controller);
};

const sliderScrollY = (slideContainerSelector, pinContainerSelector) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const wipeAnimation = new TimelineMax().to(slideContainer, 1, { y: "0%" });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 0,
  })
    .setTween(wipeAnimation)
    // .addIndicators()
    .addTo(controller);
};

const sliderScrollResultY = (slideContainerSelector, pinContainerSelector) => {
  const slideContainer = document.querySelectorAll(slideContainerSelector);
  const pinContainer = document.querySelectorAll(pinContainerSelector);

  const controller = new ScrollMagic.Controller();

  const wipeAnimation = new TimelineMax()
    .to(slideContainer, -10, { y: "-100%" })
    .to(slideContainer, -10, { y: "-50%" })
    .to(slideContainer, 1, { y: "0%" });

  new ScrollMagic.Scene({
    triggerElement: pinContainer,
    triggerHook: 1,
    duration: "100%",
  })
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);
};

export {
  sliderScrollX,
  sliderScrollY,
  sliderScrollResultY,
  sliderScrollXMedia,
  slideScroOpacity,
  sliderScrollScale,
  sliderScrollResultVisian,
};
