let lazyImages = [...document.querySelectorAll(".gallery")];

function lazyLoad() {
  lazyImages.forEach(image => {
    if(image.offsetTop < window.scrollY + 150) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.classList.add("loaded");
    }
  });
}

lazyLoad();

window.addEventListener("scroll", lazyLoad);