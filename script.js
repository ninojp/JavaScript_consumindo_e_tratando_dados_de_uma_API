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