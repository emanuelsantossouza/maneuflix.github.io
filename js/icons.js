const pegarCarrosselClassicos = document.getElementById('carrosselClassicos');
const pegarCarrosselIconsDragonball = document.getElementById('carrosselDragonBall');
const pegarCarrosselIconsOnePiece = document.getElementById('carrosselOnePiece');
const pegarCarrosselIconsLoki = document.getElementById('carrosselLoki');
const pegarCarrosselIconNaruto = document.getElementById('carrosselNaruto');
const pegarContainer = document.getElementById('container-img');
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
    { name: 'Rangnarok', foto: 'https://i.pinimg.com/736x/35/cd/f5/35cdf5754b9a3d9b1c331ff4647c181b.jpg' },
    { name: 'Loki', foto: 'https://i.pinimg.com/1200x/86/f9/16/86f916b2bbd6c44df9e79d6ef294c108.jpg' },
    { name: 'One Piece', foto: 'https://64.media.tumblr.com/5f2169431b229a9d0cb8b71230f0a8d8/9d9980853af900a6-82/s400x600/17f763adcc38ad38e963f13541a0b0b056d82558.jpg' },
    { name: 'Coach Cater', foto: 'https://i.pinimg.com/736x/6a/a0/3e/6aa03e4e2c0fe8aeace94448cdc7e70c.jpg' },
    { name: 'Sobrenatural', foto: 'https://i.pinimg.com/736x/14/3a/9b/143a9bdaf7154dc26c56eedbd7c5a711.jpg' },
    { name: 'Naturo', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapMpgAgBG-rZzskVBg4yoW49qQ4_Nsoo9KrG1VsA-UuwRa6o5qMgdaiczulZpbSWJh68&usqp=CAU' },
    { name: 'Black Cover', foto: 'https://i.pinimg.com/474x/fc/08/ee/fc08ee18907dfd45a3c02385c3f861da.jpg' },
    { name: 'Rangnarok', foto: 'https://i.pinimg.com/736x/b2/59/14/b2591432c925d6162a8c31d9029ac030.jpg' },
    { name: 'Loki', foto: 'https://pm1.aminoapps.com/6459/a89a35273f9314e9cfe5a42cb86aa9d1440082ea_00.jpg' },
]
carrosselIconsOnePiece = [
    { name: 'Rangnarok', foto: 'https://i.pinimg.com/1200x/f9/e6/67/f9e66749ca011a46542feaaccf9d764f.jpg' },
    { name: 'Loki', foto: 'https://64.media.tumblr.com/8608853521e0b73bd2f143b6fb5c09cc/77f62d756529cff0-e1/s400x600/8ae71bc7af279115ca5dd5e6ebe5f07e6bdecc75.jpg' },
    { name: 'One Piece', foto: 'https://i.pinimg.com/originals/0b/cb/d9/0bcbd98478d5e08e66aeb88c8a7ff1c4.jpg' },
    { name: 'Coach Cater', foto: 'https://uploads.spiritfanfiction.com/historias/capitulos/202105/meu-maior-tesouro--one-piece-22256666-080520212152.jpg' },
    { name: 'Sobrenatural', foto: 'https://i.pinimg.com/originals/d6/85/14/d685143643f3a37f5420b33c1c1c5aa8.jpg' },
    { name: 'Naturo', foto: 'https://i.pinimg.com/originals/a7/b6/57/a7b657c571ffff5c0659931abcd05e94.jpg' },
    { name: 'Black Cover', foto: 'https://i.pinimg.com/originals/74/a0/7b/74a07b13f8acb361ec0abfeacb7f1705.jpg' },
    { name: 'Rangnarok', foto: 'https://i.pinimg.com/564x/8b/0e/87/8b0e87075794013ce33fc1b5bfa85eea.jpg' },
    { name: 'Loki', foto: 'https://i.pinimg.com/736x/12/fa/33/12fa33e991fd5857b146c2c432c27b12.jpg' },
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
    usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    pegarContainer.innerHTML +=
    `
    <p>${usuarioLogado.nome}</p>
      <img src="${usuarioLogado.foto}" alt="${usuarioLogado.nome}">
    `

    for (let i = 0; i < carrosselIconsClassicos.length; i++) {
        pegarCarrosselClassicos.innerHTML += ` 
        <a href="index.html">
            <div class="swiper-slide">
                <div class="widthImg">
                <img src="${carrosselIconsClassicos[i].foto}" onclick="pegarcaminhoImg(event)" alt="${carrosselIconsClassicos[i].name}" />
                </div>
            
       </a>   
        `

        pegarCarrosselIconsOnePiece.innerHTML += `
            <a href="index.html">
                 <div class="swiper-slide">
                     <div class="widthImg">
                         <img src="${carrosselIconsOnePiece[i].foto}" onclick="pegarcaminhoImg(event)" alt="${carrosselIconsOnePiece[i].name}" />
                        </div>
            </a>        
        `

        pegarCarrosselIconsDragonball.innerHTML += `
        <a href="index.html">
         <div class="swiper-slide">
                      <div class="widthImg">
                          <img src="${carrosselIconsDragonball[i].foto}" onclick="pegarcaminhoImg(event)" alt="${carrosselIconsDragonball[i].name}" />
                      </div>
                      </a>
        `

        pegarCarrosselIconNaruto.innerHTML += `
        <a href="index.html">
              <div class="swiper-slide">
                  <div class="widthImg">
                          <img src="${carrosselIconsClassicos[i].foto}" onclick="pegarcaminhoImg(event)" alt="${carrosselIconsClassicos[i].name}" />
                  </div>
               
        </a>
        `
        pegarCarrosselIconsLoki.innerHTML += `
            <a href="index.html">
                <div class="swiper-slide">
                    <div class="widthImg">
                        <img src="${carrosselIconsClassicos[i].foto}" onclick="pegarcaminhoImg(event)" alt="${carrosselIconsClassicos[i].name}" />
                    </div>
               
            </a>
         `
    }
}

function pegarcaminhoImg(event){
    elememntoImg = event.target.attributes.src.nodeValue;

    usuarios = JSON.parse(localStorage.getItem('meneulflix'));

    usuarios.find(u => u.nome == usuarioLogado.nome).foto = String(elememntoImg);
    usuarioLogado.foto = String(elememntoImg);

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
    localStorage.setItem('meneulflix', JSON.stringify(usuarios));
}