const swiper = new Swiper('.swiper', {
    speed: 100,
    spaceBetween: 1,
    slidesPerView: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },

    scrollbars: {
        el: '.swiper-scrollbar',
        draggable: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        480: {
            slidesPerView: 2,

        },
        640: {
            slidesPerView: 3,

        },
        768: {
            slidesPerView: 4,

        },
        992: {
            slidesPerView: 5,

        },
        1200: {
            slidesPerView: 6,

        },
        1440: {
            slidesPerView: 7,
            spaceBetween: 1
        }
    },
});

const pegarCarrossel = document.getElementById('carrossel');
carrossel = [
    {
        name: 'Rangnarok', foto: 'img/rgk.jpeg'
    },
    {
        name: 'Loki', foto: 'img/carrosselLoki.jpg'
    },
    {
        name: 'One Piece', foto: 'img/carroselOne.jpg'
    },
    {
        name: 'Coach Cater', foto: 'img/couchCater.jpg'
    },
    {
        name: 'Sobrenatural', foto: 'img/carroselNetflix.jpg'
    },
    {
        name: 'Naturo', foto: ''
    },
    {
        name: 'Black Cover', foto: ''
    }
]



onlaod = init();

function init() {

}