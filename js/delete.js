const pegarDivPai = document.getElementById('container');


window.onload = init();

function init() {
    pegarUsuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    pegarDivPai.innerHTML +=
    `
            <h1>Deseja exluir este prefil?</h1>
            <hr>
            <div class="container-img-text">
                <div class="container-img">
                    <img src="${pegarUsuarioLogado.foto}" alt="${pegarUsuarioLogado.nome}">
                    <p>${pegarUsuarioLogado.nome}</p>
                </div>

                <p class="informacao">Todo o histórico deste perfil, inclusive a Minha
                    lista, avaliações e atividades recentes, serão
                    apagadas para sempre e você não terá mais
                    acesso a elas.
                </p>
            </div>
            <hr>
            <div>
                <button><a class="btnManter" href="index.html">Manter perfil</a></button>
                <button onclick="excluirPerfil()"><a class="btnExcluir" href="index.html">Excluir perfil</a></button>

            </div>
    `
}