import burger from "./modules/burger.js";
import responsiveMedia from "./modules/responsive_media.js";
import rotateComponent from "./modules/rotative_cards.js";
import formValidation from "./modules/form_validation.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    burger(".burger", "times", ".nav-mobile", ".nav-mobile__link");
    responsiveMedia("hero__quote", "(min-width:768px)");
    rotateComponent(".cards__card");
    formValidation("#orderForm", ".form *[required]", ".form__loader", ".form__response");
});

// pagination

const swiperModels = new Swiper('.swiper-models', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 1,

    centeredSlides: true,

    breakpoints: {
        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    },

    
})