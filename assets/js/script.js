function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".iconbox").classList.toggle("cross")
}


$('.hero-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
});

//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     arrows: true,
//     speed: 300,
//     centerPadding: '100px',
//     infinite: true,
//     autoplaySpeed: 5000,
//     // autoplay: true,
//     prevArrow: ".prev",
//     nextArrow: ".next",
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,

//             }
//         }
//     ]
// });

// vedio
var carousel = new Swiper(".swiper-carousel", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#nextBtn',
        prevEl: '#prevBtn',
    },
    effect: "coverflow",
    loop: true,
    autoplay: true,
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
            autoplay: true,
            slidesPerView: 2.5,
        },
    },

});

const accordionbtn2 = document.querySelectorAll(".accordionbtn2")
accordionbtn2.forEach((e) => {
    e.addEventListener("click", () => {
        const activeaccodion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeaccodion && activeaccodion.classList.remove("active")

    })

});
// scroll-to -top-button////
const mybutton = document.querySelector(".topBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});

AOS.init({
    duration: 1200,
    once: true
})

