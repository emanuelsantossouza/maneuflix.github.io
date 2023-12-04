function mensagem() {
    Swal.fire("Seja bem vindo!!");
}

let usuario = [
    { nome: 'Gallo', foto: 'img/avatar1.png' },
    { nome: 'Emanuel', foto: 'img/avatar4.png' },
    { nome: 'Vítoria', foto: 'img/avatar5.jpg' },
];

let ul = document.querySelector('ul');

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