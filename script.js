'use strict';

const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos() {
    try{
        const busca = await fetch('http://localhost:3000/videos');
        const videos = await busca.json();
        videos.forEach((video) => { 
            //Apenas um ex. para tratamento de erros específicos
            if(video.categoria == ""){
                throw new Error('Algum video não possui categoria');
            }
            containerVideos.innerHTML += `<li class='videos__item'><iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
            <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
            <h3 class="titulo-video">${video.titulo}</h3>
            <p class="titulo-canal">${video.descricao}</p>
            <p class="categoria" hidden>${video.categoria}</p>
            </div></li>`;
        });
    } catch(erro) {
        containerVideos.innerHTML = `<p>Houve um erro: '${erro}' - ao tentar carregar os Videos</p>`;
    } 
    // finally {
    //     alert('Finally: é usado para sempre executar algo após os blocos try/catch');
    // }
};
buscarEMostrarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");
    const valorFiltro = barraDePesquisa.value.toLowerCase();
    if(barraDePesquisa.value != ""){
        // for(let video of videos){
        //     let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
        //     let valorFiltro = barraDePesquisa.value.toLowerCase();
        //     if(!titulo.includes(valorFiltro)){
        //         video.style.display = "none";
        //     }else{ video.style.display = "block"; }
        // }
        // Refatorando o código acima
        videos.forEach(video => {
            const titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
        });
    }else{
        video.style.display = "block";
    };  
};

const btnCategorias = document.querySelectorAll('.superior__item');

btnCategorias.forEach((btn) => {
    let nomeCategoria = btn.getAttribute('name');
    btn.addEventListener('click', () => buscarPorCategoria(nomeCategoria));
});

function buscarPorCategoria(filtroNomeCategoria){
    const videos = document.querySelectorAll(".videos__item");
    videos.forEach((video) => {
        let categoria =  video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtroNomeCategoria.toLowerCase();
        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = 'none';
        }else{
            video.style.display = 'block';
        }
    })
}