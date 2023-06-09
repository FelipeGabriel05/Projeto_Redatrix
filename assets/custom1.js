const div = document.querySelector(".listar-videos");

const listarVideos = async (pagina) =>{
    const dados = await fetch("../../controller/visitante/video.php?pagina=" + pagina);
    const resposta = await dados.text();
    div.innerHTML = resposta;
}

listarVideos(1);

const repertorio = document.querySelector(".lista-r");

const listarRepertorio = async (paginaR) =>{
    const dados = await fetch("../../controller/visitante/repertorio.php?pagina=" + paginaR);
    const reposta = await dados.text();
    repertorio.innerHTML = reposta;
}

listarRepertorio(1);

const redacao = document.querySelector(".listar-redacao");

const listarRedacao = async (paginaRED) =>{
    const dados = await fetch("../../controller/visitante/redacao.php?pagina=" + paginaRED);
    const reposta = await dados.text();
    redacao.innerHTML = reposta;
}

listarRedacao(1);