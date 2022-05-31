import axios from "axios";
import { triggerCloseModal } from "./modal";
import { closeModal } from "./modal";
import { openModal } from "./modal";

function forms(formSelector) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "images/preloader.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                position: absolute;
                left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
            `;

      const formData = new FormData(form);

      const valueRangeSlider = document
        .getElementById("range")
        .noUiSlider.get();

      formData.append("price", Math.round(valueRangeSlider));

      const json = Object.fromEntries(formData.entries());

      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";

      const input = document.querySelectorAll(".input");

      input.forEach((input) => {
        if (input.value.trim() !== "") {
          form.insertAdjacentElement("afterend", statusMessage);

          axios
            .post("/api/feedback/", json)
            .then((res) => {
              showThanksModal(message.success);
              statusMessage.remove();
            })
            .catch(() => {
              showThanksModal(message.failure);
              statusMessage.remove();
            })
            .finally(() => {
              form.reset();
            });
        }
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__content");

    prevModalDialog.style.display = "none";
    openModal(".modal");

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__content");
    thanksModal.innerHTML = `
	        <div class="modal__dialog modal__dialog--thanks">
	            <div class="modal__close"></div>
	            <div class="modal__title modal__title--thanks">${message}</div>
	        </div>
	    `;
    document.querySelector(".modal").append(thanksModal);
    triggerCloseModal(".modal", ".modal__close");

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.style.display = "block";
      closeModal(".modal");
    }, 2000);
  }
}

export default forms;
