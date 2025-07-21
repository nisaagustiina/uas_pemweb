const testiSwiper = new Swiper(".testiSwiper", {
    direction: "horizontal",
    loop: true,

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },  
    
    // Navigasi
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});