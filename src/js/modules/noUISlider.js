import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const priceRange = () => {
  const rangeSlider = document.getElementById("range");

  noUiSlider.create(rangeSlider, {
    start: [0],
    range: {
      min: [1000000],
      max: [10000000],
    },
    step: 100000,
  });

  const rangeSliderValueElement = document.getElementById("range-value");

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    rangeSliderValueElement.innerHTML = Number(values[handle]).toLocaleString(
      "ru-RU"
    );
  });
};

export default priceRange;
