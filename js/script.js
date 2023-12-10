let pegandoBodyIndex = document.getElementById('indexBody');
let dadosLocal = JSON.parse(localStorage.getItem('meneulflix'));
let ul = document.querySelector('ul');
let usuario = [];
let pegarProfile = document.getElementsByClassName('icons');
let buttonEditar = true;
let caminho = '';


console.log(dadosLocal);

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
                <a href="filmesBoostrap.html">
                    <div class="profile icons">
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
                <i class='bx add bxs-plus-circle'></i>
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

function editarPerfilIcon() {
    for (let i = 0; i < pegarProfile.length; i++) {
        // Cria um elemento <i> com a classe desejada
        const iconElement = document.createElement('i');
        iconElement.className = 'bi editarPerfil bi-pencil';

        // Insere o novo elemento como o primeiro filho da div
        pegarProfile[i].insertBefore(iconElement, pegarProfile[i].firstChild);
    }

    let pegarContainer = document.getElementById('containerQuemEstaAssistindo');
    let pegarbuttonEditar = document.getElementById('buttonEditar');
    // console.log(pegarbuttonEditar);

    pegarbuttonEditar.style.display = 'none';
    buttonEditar = false;
    caminhoInicial = 'editar.html';
    caminho = document.getElementById('caminho');
    pegarContainer.innerHTML += `<button type="button" id="buttonContinuar" class="concluido" onclick="editarPerfilIcon()">Concluido</button> `;
    verifiquePerfils();
}

function verifiquePerfils() {
    const primeiroLink = ul.querySelector('li:first-child a');
    primeiroLink.setAttribute('href', 'editar.html');
    console.log(primeiroLink);

    primeiroLink.innerHTML = 'editar.html';
}