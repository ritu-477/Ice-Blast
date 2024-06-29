var carousel = new Swiper(".swiper-carousel", {
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 2.5,
        },
    },
});