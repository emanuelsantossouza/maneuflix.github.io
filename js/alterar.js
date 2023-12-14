const pegarcontainerPai = document.getElementById('container');
const pegarUsuario = JSON.parse(localStorage.getItem('usuarioLogado'));

window.onload = init();

function init() {
    console.log(pegarUsuario);

    pegarcontainerPai.innerHTML +=
        `
       <h1>Editar perfil</h1>
            <hr>
            <form>
                <div class="form-container">

                    <div class="left">
                        <div class="imgBox">
                            <a href="addNovoIcon.html">
                                <img src="${pegarUsuario.foto}" alt="${pegarUsuario.nome}">
                                <i class='bx bxs-pencil'></i>
                            </a>
                        </div>
                    </div>


                    <div class="right">
                        <input type="text" id="nome" placeholder="${pegarUsuario.nome}" autocomplete="none">
                        <h3>Idioma:</h3>

                        <select name="Idioma" id="Idioma">
                            <option value="">Português</option>
                            <option value="">Inglês</option>
                            <option value="">Espanhol</option>
                        </select>

                        <h3>Game ID</h3>
                        <p>Seu ID é um nome exclusivo que será usado ao jogar com outros assinantes
                            na Netflix Games. Saiba mais</p>
                        <input type="text" id="GameID" placeholder="Criar Game ID" autocomplete="none">
                        <hr>

                        <h3>Configurações de classificação etária:</h3>
                        <label class="controler">Todas as classificações etárias</label>
                        <p>Mostrar títulos de todas as classificações etárias para este perfil.</p>

                        <button class="btn editar">Editar</button>
                        <hr>

                        <h3>Controles de início automático</h3>
                        <div class="checkbox">
                            <input type="checkbox" id="botao1">
                            <label for="1botao">Iniciar automaticamente o próximo episódio de uma série em todos os <br>
                                aparelhos.</label>
                        </div>

                        <div class="checkbox">
                            <input type="checkbox" id="2botao">
                            <label for="2botao">Reproduzir automaticamente as prévias ao navegar em todos os <br>
                                aparelhos.</label>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="buttons">
                    <button class="btn" id="btnSalvar" type="button" onclick="editarUsuario()">Salvar</button>
                    <a class="btn" href="index.html">Cancelar</a>
                    <button class="btn" id="btnExcluir"><a href="delete.html">Excluir perfil</a></button>
                </div>
            </form>
        `
}

function editarUsuario(){
    const pegarNome = document.getElementById('nome').value;
    const usuarios = JSON.parse(localStorage.getItem('meneulflix'));

    console.log(pegarNome);

    usuarios.find(u => u.nome == pegarUsuario.nome).nome = pegarNome

    console.log(usuarios);
    localStorage.setItem('meneulflix', JSON.stringify(usuarios));

    window.location.href = 'index.html'
}