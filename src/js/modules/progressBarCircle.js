const ProgressBar = require("progressbar.js");

const animationSemiCircleTop = () => {
  const semiBarTop = new ProgressBar.SemiCircle(".semiBarTop", {
    color: "rgba(0, 183, 226, 1)",
    strokeWidth: 20,
    trailWidth: 0,
    easing: "easeInOut",
    alignToBottom: true,
    text: {
      value: "Клиенты",
    },
  });

  semiBarTop.animate(1, {
    duration: 3000,
  });
};

const animationSemiCircleBottom = () => {
  const semiBarBottom = new ProgressBar.SemiCircle("#semiBarBottom", {
    color: "rgba(0, 158, 215, 1)",
    strokeWidth: 15,
    trailWidth: 0,
    easing: "easeInOut",
  });

  semiBarBottom.animate(1, {
    duration: 3000,
  });
};

const animationLines = () => {
  const getRegisteredNode = document.querySelectorAll(".registered");
  getRegisteredNode.forEach((item) => {
    const registered = new ProgressBar.Path(item, {
      duration: 4000,
      from: {
        color: "#FFFFFF",
      },
      to: {
        color: "#FFFFFF",
      },
      easing: "easeInOut",
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
      },
    });

    registered.animate(1);
  });
};

const animationText = () => {
  const getTextNode = document.querySelectorAll(".text");
  getTextNode.forEach((item) => {
    const getTextNode = new ProgressBar.Path(item, {
      duration: 7000,
      from: {
        color: "#FFFFFF",
      },
      to: {
        color: "#FFFFFF",
      },
      easing: "easeInOut",
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
      },
    });

    getTextNode.animate(1);
  });
};

const ProgressBarCircleAnimation = () => {
  animationSemiCircleTop();
  animationSemiCircleBottom();
  animationText();
  animationLines();
};

export default ProgressBarCircleAnimation;
