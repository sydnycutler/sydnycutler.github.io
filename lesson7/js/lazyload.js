const images = document.querySelectorAll("img[data-src]");

function preloadImage(img){
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
        const src = img.getAttribute("data-src");
    };
    };


const imgOptions = {
    threshold = 0,
    rootMargin = "0px 0px 50px 0px"
};
const imgObserver = new IntersectionObserver((items, imgObserver) => {
items.forEach(item => {
    if (!item.isIntersecting) {
        return;
    }
    else {
        preloadImage(item.target);
        imgObserver.unobserve(item.target);
    }
});
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});