# Curso Alura JavaScript: consumindo e tratando dados de uma API

## Aula 01 - Apresentação e layout do projeto

### Aula 01 - Apresentação - Video 1

Nesta aula, o instrutor Rafaela Petelin Silvério apresenta o projeto "VidFlow", uma plataforma de compartilhamento de vídeos, e explica que o objetivo dos desenvolvedores é transformar o design em uma aplicação funcional. A aplicação consome vídeos através de uma API e permite a aplicação de filtros na barra de pesquisa e nas categorias de vídeo. É necessário ter conhecimentos básicos de HTML, CSS e JavaScript como pré-requisitos para acompanhar o curso. O instrutor convida os interessados a embarcarem nessa jornada de aprendizado e construção do "VidFlow".

### Aula 01 - Conhecendo o projeto - Video 2

Nesta aula, o instrutor apresentou o projeto "VidFlow", um aplicativo de compartilhamento de vídeos. Ele explicou a importância de ter um projeto bem organizado e mencionou as pastas e arquivos que compõem a estrutura do projeto. Foram mencionadas as pastas "backend", "css" e "img", além dos arquivos "script.js" e "index.html". O instrutor também destacou a configuração do HTML, os metadados e a adição do favicon. No próximo trecho, ele mostrará o layout do aplicativo no Figma.

### Aula 01 - Construindo o cabeçalho - Video 3

Nesta aula, o instrutor ensina como construir o cabeçalho de uma aplicação web a partir de um layout do Figma. O foco está na criação da barra de navegação superior, que possui a logo do VidFlow à esquerda, a barra de pesquisa no centro e os ícones à direita. O instrutor mostra passo a passo como adicionar as tags HTML necessárias e as classes correspondentes para estilizar cada elemento da barra de navegação. Ao final do trecho, a barra de pesquisa já está pronta, com a logo, o campo de pesquisa, o ícone de teclado e os botões de busca e pesquisa por voz.

### Aula 01 - Ícones do cabeçalho - Video 4

Nesta aula, o instrutor continua a construção da barra superior de um projeto em JavaScript, focando na criação dos ícones do canto superior direito. Ele explica passo a passo como adicionar as tags necessárias no código HTML para criar os ícones. Além disso, ele adiciona um botão de alternância. O instrutor mostra o código HTML completo para a barra superior e propõe um desafio para construir a barra lateral do projeto.

### Aula 01 - Criando seção de categoria - Video 5

Nesta aula, o instrutor continua a transformação do layout em código, focando na criação da barra de categorias do VidFlow. Ele explica passo a passo como criar essa barra, utilizando tags HTML e classes CSS. A barra de categorias consiste em uma div que contém uma série de links representando cada categoria. O instrutor demonstra como adicionar os links e preencher os nomes das categorias. Além disso, ele mostra como adicionar uma seta apontada para a direita no canto superior direito da barra. Ao final, ele ressalta que os vídeos serão buscados de uma API externa e que isso será abordado na próxima aula.

### Aula 01 Conclusão - Nessa aula, você aprendeu como:

Organizar os arquivos e pastas do projeto;
Transformar o layout do Figma em código;
Construir o cabeçalho, barra lateral e seção de categorias do VidFlow.

## Aula 02 - Consumindo API

### Aula 02 - Preparando o ambiente: instalação do JSON

Passo 1: Preparação - Instale o Node.js
Antes de começar, é importante ter o Node.js instalado em seu sistema.  

Passo 2: Instalação do JSON Server
Agora que você possui o Node.js, podemos prosseguir com a instalação do JSON Server. Vamos lá!

- Abra seu terminal ou prompt de comando;

- Para instalar o JSON Server globalmente, você só precisa digitar o seguinte comando e pressionar "Enter":

> npm install -g json-server

Passo 3: Preparando o arquivo JSON
Agora, o arquivo JSON videos.json, que está dentro da pasta backend do nosso projeto, servirá como a fonte de dados para o JSON Server. Para isso, copie o JSON a seguir e cole em videos.json:

Passo 4: Inicialização do JSON Server
Agora que você tem o JSON Server e o arquivo JSON preparados, é hora de colocá-los em funcionamento:

- Abra um novo terminal ou prompt de comando;

- Execute o seguinte comando para iniciar o JSON Server e usá-lo com o arquivo videos.json:

>json-server --watch backend/videos.json

### Aula 02 -  - Video 1

