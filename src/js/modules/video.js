function openVideo(triggerVideoSelector, wrapperVideoSelector) {
  const video = document.querySelector(triggerVideoSelector);
  const videoWrapper = document.querySelector(wrapperVideoSelector);
  video.addEventListener("click", () => {
    videoWrapper.innerHTML = `<iframe
            src=${videoWrapper.getAttribute("data-src-video")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        </iframe>
        `;
  });
}

export default openVideo;
