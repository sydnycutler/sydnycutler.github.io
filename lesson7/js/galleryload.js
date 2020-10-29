let lazyImages = [...document.querySelectorAll(".img-lazy")];

function lazyLoad() {
  lazyImages.forEach(image => {
    if(image.offsetTop < window.scrollY + 150) {
      image.style.backgroundImage = `url(${image.getAttribute('data-src')})`
      image.classList.add("loaded");
    }
  });
}

lazyLoad();

window.addEventListener("scroll", lazyLoad);