const menuLateralHTML = document.getElementById('menuLateral');
const icons = document.getElementById('icons');
const containerFilmes = document.getElementById('containerFilmes');
const pegarCarrossel = document.getElementById('carrossel');
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



carrossel = [
    { name: 'Rangnarok', foto: 'img/rgk.jpeg' },
    { name: 'Loki', foto: 'img/carrosselLoki.jpg' },
    { name: 'One Piece', foto: 'img/carroselOne.jpg' },
    { name: 'Coach Cater', foto: 'img/couchCater.jpg' },
    { name: 'Sobrenatural', foto: 'img/carroselNetflix.jpg' },
    { name: 'Naturo', foto: 'img/carrosselNaruto.jpg' },
    { name: 'Black Cover', foto: 'img/carrosselBlackClover.jpg' },
    { name: 'Rangnarok', foto: 'img/rgk.jpeg' },
    { name: 'Loki', foto: 'img/carrosselLoki.jpg' },
    { name: 'One Piece', foto: 'img/carroselOne.jpg' },
    { name: 'Coach Cater', foto: 'img/couchCater.jpg' },
    { name: 'Sobrenatural', foto: 'img/carroselNetflix.jpg' },
    { name: 'Naturo', foto: 'img/carrosselNaruto.jpg' },
    { name: 'Black Cover', foto: 'img/carrosselBlackClover.jpg' },
    { name: 'Rangnarok', foto: 'img/rgk.jpeg' },
    { name: 'Loki', foto: 'img/carrosselLoki.jpg' },
    { name: 'One Piece', foto: 'img/carroselOne.jpg' },
    { name: 'Coach Cater', foto: 'img/couchCater.jpg' },
    { name: 'Sobrenatural', foto: 'img/carroselNetflix.jpg' },
    { name: 'Naturo', foto: 'img/carrosselNaruto.jpg' },
    { name: 'Black Cover', foto: 'img/carrosselBlackClover.jpg' }
];



onlaod = init();

function init() {
    for (let i = 0; i < carrossel.length; i++) {
        pegarCarrossel.innerHTML += ` 

        <div class="swiper-slide">
            <div class="widthImg">
                <img src="${carrossel[i].foto}" alt="${carrossel[i].name}" />
            </div>
       </div>
        `
    };
}


// menuLateralHTML.addEventListener('mouseover', function () {
//     icons.style.background = 'red'
//     icons.style.color = 'white'
// });

// menuLateralHTML.addEventListener('mouseout', function () {
//     icons.style.background = 'white'

// });