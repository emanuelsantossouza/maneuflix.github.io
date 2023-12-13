const pegarCarrosselClassicos = document.getElementById('carrosselClassicos');
const pegarCarrosselIconsDragonball = document.getElementById('carrosselDragonBall');
const pegarCarrosselIconsOnePiece = document.getElementById('carrosselOnePiece');
const pegarCarrosselIconsLoki = document.getElementById('carrosselLoki');
const pegarCarrosselIconNaruto = document.getElementById('carrosselNaruto');
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

const swiperOnePiece = new Swiper('.swiperOnePiece', {
    speed: 100,
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

const swiperDragonBall = new Swiper('.swiperDragonBall', {
    speed: 100,
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

const swiperNaruto = new Swiper('.swiperNaruto', {
    speed: 100,
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

const swiperLoki = new Swiper('.swiperLoki', {
    speed: 100,
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

carrosselIconsClassicos = [
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar2.png' },
    { name: 'One Piece', foto: 'img/avatar3.png' },
    { name: 'Coach Cater', foto: 'img/avatar4.png' },
    { name: 'Sobrenatural', foto: 'img/avatar5.jpg' },
    { name: 'Naturo', foto: 'img/avatar4.png' },
    { name: 'Black Cover', foto: 'img/avatar2.png' },
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar5.jpg' },
];

carrosselIconsDragonball = [
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar2.png' },
    { name: 'One Piece', foto: 'img/avatar3.png' },
    { name: 'Coach Cater', foto: 'img/avatar4.png' },
    { name: 'Sobrenatural', foto: 'img/avatar5.jpg' },
    { name: 'Naturo', foto: 'img/avatar4.png' },
    { name: 'Black Cover', foto: 'img/avatar2.png' },
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar5.jpg' },
]
carrosselIconsOnePiece = [
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar2.png' },
    { name: 'One Piece', foto: 'img/avatar3.png' },
    { name: 'Coach Cater', foto: 'img/avatar4.png' },
    { name: 'Sobrenatural', foto: 'img/avatar5.jpg' },
    { name: 'Naturo', foto: 'img/avatar4.png' },
    { name: 'Black Cover', foto: 'img/avatar2.png' },
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar5.jpg' },
]
carrosselIconsLoki = [
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar2.png' },
    { name: 'One Piece', foto: 'img/avatar3.png' },
    { name: 'Coach Cater', foto: 'img/avatar4.png' },
    { name: 'Sobrenatural', foto: 'img/avatar5.jpg' },
    { name: 'Naturo', foto: 'img/avatar4.png' },
    { name: 'Black Cover', foto: 'img/avatar2.png' },
    { name: 'Rangnarok', foto: 'img/avatar1.png' },
    { name: 'Loki', foto: 'img/avatar5.jpg' },
]

onload = init();

function init() {
    for (let i = 0; i < carrosselIconsClassicos.length; i++) {
        pegarCarrosselClassicos.innerHTML += ` 
        <div class="swiper-slide">
            <div class="widthImg">
                <img src="${carrosselIconsClassicos[i].foto}" alt="${carrosselIconsClassicos[i].name}" />
            </div>
       </div>
        `

        pegarCarrosselIconsOnePiece.innerHTML += `
                 <div class="swiper-slide">
                     <div class="widthImg">
                         <img src="${carrosselIconsClassicos[i].foto}" alt="${carrosselIconsClassicos[i].name}" />
                     </div>
        `

        pegarCarrosselIconsDragonball.innerHTML += `
         <div class="swiper-slide">
                      <div class="widthImg">
                          <img src="${carrosselIconsClassicos[i].foto}" alt="${carrosselIconsClassicos[i].name}" />
                      </div>
        `

        pegarCarrosselIconNaruto.innerHTML += `
              <div class="swiper-slide">
                  <div class="widthImg">
                          <img src="${carrosselIconsClassicos[i].foto}" alt="${carrosselIconsClassicos[i].name}" />
                  </div>
               </div>
        `
        pegarCarrosselIconsLoki.innerHTML += `
                  <div class="swiper-slide">
                     <div class="widthImg">
                          <img src="${carrosselIconsClassicos[i].foto}" alt="${carrosselIconsClassicos[i].name}" />
                      </div>
                  </div>
         `
    }
}