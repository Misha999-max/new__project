const ProgressBar = require("progressbar.js");

const animationLineBefore = () => {
  const lineBefore = new ProgressBar.Line(".port-results__animation-line1", {
    color: "rgba(0, 183, 226, 1)",
    easing: "easeInOut",
    strokeWidth: 3,
  });

  lineBefore.animate(1, {
    duration: 3000,
  });
};

const animationLineAfter = () => {
  const lineAfter = new ProgressBar.Line(".port-results__animation-line2", {
    color: "rgba(0, 183, 226, 1)",
    easing: "easeInOut",
    strokeWidth: 1,
  });

  lineAfter.animate(1, {
    duration: 3000,
  });
};

export { animationLineBefore, animationLineAfter };
