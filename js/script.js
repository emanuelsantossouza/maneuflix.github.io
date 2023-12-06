let pegandoBodyIndex = document.getElementById('indexBody');
let dadosLocal = JSON.parse(localStorage.getItem('meneulflix'));
let ul = document.querySelector('ul');
let usuario = [];

console.log(dadosLocal)

// Validação e criação dos dados do il pagina index
if (dadosLocal == null) {
    usuario = [
        { nome: 'Gallo', foto: 'img/avatar1.png' },
        { nome: 'Emanuel', foto: 'img/avatar4.png' },
        { nome: 'Vítoria', foto: 'img/avatar5.jpg' },
    ];

    localStorage.setItem('meneulflix', JSON.stringify(usuario));
} else {
    usuario = dadosLocal;
}

onload = init();

function init() {

    if (pegandoBodyIndex != null || undefined || '') {

        for (let i = 0; i < usuario.length; i++) {
            ul.innerHTML +=

                `
            <li>
                <a href="#">
                <div class="profile">
                <img src="${usuario[i].foto}" alt="${usuario[i].nome}">
                    <span>${usuario[i].nome}</span>
                    </div>
                    </a>
                    </li>  
                    `
        }

        ul.innerHTML +=
            `
                <li>
                <a href="adicionar.html">
                <div class="profile">
                <i class='bx bxs-plus-circle'></i>
                <span>Adicionar perfil</span>
                </div>
                </a>
                </li>
                `
    }
}



function salvarUsuario() {
    const pegarNomeInput = document.getElementById('nome').value;
    console.log(pegarNomeInput)

    
    usuario.push(
        { nome: `${pegarNomeInput}`, foto: 'img/avatar2.png' }
    );
    return localStorage.setItem('meneulflix', JSON.stringify(usuario));
}

function mensagem() {
    Swal.fire("Seja bem vindo!!");
}