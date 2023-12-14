let pegandoBodyIndex = document.getElementById('indexBody');
let dadosLocal = JSON.parse(localStorage.getItem('meneulflix'));
let ul = document.querySelector('ul');
let usuario = [];
let pegarProfile = document.getElementsByClassName('icons');
let idUsuarioEscolhido = 0;
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
            <li onclick="mostrarVideo()">
                
                    <div onclick="usuarioLogado(event, '${usuario[i].nome}')" class="profile icons">
                        <img src="${usuario[i].foto}" alt="${usuario[i].nome}">
                        <span>${usuario[i].nome}</span>
                    </div>
               
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


function usuarioLogado(event, name) {
    localStorage.removeItem('usuarioLogado');
    console.log(name); // Isso imprime o nome do span clicado

    // Agora, para obter o objeto do usuário com base no nome, você pode usar a função find
    let selectedUser = usuario.find(user => user.nome === name);

    localStorage.setItem('usuarioLogado', JSON.stringify(selectedUser));
    if (selectedUser) {
        console.log(selectedUser);
    } else {
        console.log("Usuário não encontrado");
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

function excluirPerfil() {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    console.log(usuarioLogado.nome);

    console.log(usuario);

    let novoArrayUsuario = usuario.filter(user => user.nome !== usuarioLogado.nome);

    console.log(novoArrayUsuario);

    // Atualiza o array usuario com o novo array filtrado
    usuario = novoArrayUsuario;

    // Atualiza o localStorage com o array atualizado
    localStorage.setItem('meneulflix', JSON.stringify(usuario));
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
    pegarContainer.innerHTML += `<button type="button" id="buttonContinuar" onclick='salvarEdicao()' class="concluido" >Concluido</button> `;
    verifiquePerfils();
}

function verifiquePerfils() {
    const primeiroLink = document.querySelectorAll('li a');

    console.log(primeiroLink);

    for (let i = 0; i < primeiroLink.length; i++) {
        primeiroLink[i].setAttribute('href', 'editar.html');
    }
}

function mostrarVideo() {
    const buttonEditar = document.getElementById('buttonEditar').style.display;
    console.log(buttonEditar)
    if (buttonEditar != 'none') {

        const pegaDivMain = document.getElementById('mainContainer').style.display = 'none';
        pegandoBodyIndex.innerHTML +=
            `
        <video width="100%" poster="media/img/capa-video.png" controls autoplay>
            <source src="video/yt5s.com-Netflix logo intro (2021).mp4" type="video/mp4">
        </video>
    `
        setInterval(() => {
            window.location.href = 'filmesBoostrap.html'
        }, 4000);
    } else{
        window.location.href = 'editar.html'
    }

}