const swiper = new Swiper(".image-slider", {
    // Optional parameters
    // direction: "vertical",
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    // observer: true,
    // observeParents: true,
    // zoom: {
    //     maxRatio: 2,
    // },
    navigation: true,
    pagination: { clickable: true },
    // scrollbar: { draggable: true },
    keyboard: true,

    speed: 1000,
    preloadImages: false,
    // lazy: true,
    autoplay: {
        delay: 3000,
    },

    // // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});
