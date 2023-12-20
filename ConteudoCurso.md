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
--watch: Este é um dos argumentos que você pode fornecer opcionalmente ao comando JSON Server. A opção --watch é usada para especificar que o servidor deve ficar "observando" um arquivo JSON específico para quaisquer mudanças. Isso significa que se você modificar o arquivo videos.json, o JSON Server automaticamente recarregará os dados para refletir as alterações.

### Aula 02 - Instalando o JSON Server - Video 1

Nesta aula, o instrutor ensina como obter os dados de vídeos para a aplicação VidFlow utilizando uma API fake chamada JSON Server. Ele explica como instalar o JSON Server, acessar a documentação e copiar o comando de instalação. Em seguida, ele mostra como simular a API colocando um objeto JavaScript no arquivo "videos.json" e executando o comando para iniciar o JSON Server. Assim, é possível visualizar os vídeos no endpoint "/videos" do JSON Server. Agora, é possível consumir esses dados como uma API e trazê-los para a aplicação.

### Aula 02 - Buscando dados na API - Video 2

Nesta aula, aprendemos como buscar dados de uma API utilizando JavaScript. Primeiro, adicionamos a tag <script></script> no HTML para trabalhar com JavaScript. Em seguida, utilizamos o método fetch() para buscar os dados da API. O retorno do fetch() é uma Promise, que é uma função assíncrona que promete buscar os dados e fazer algo com eles quando estiverem disponíveis. Verificamos o status da Promise e, quando estiver cumprida, utilizamos a função .then() para realizar uma ação com os dados. No exemplo, utilizamos console.log(res) para exibir a resposta da API no console do navegador. Também utilizamos res.json() para transformar a resposta em um JSON. Por fim, mostramos no console do navegador o retorno da Promise, que são os dados da API.

### Aula 02 - Exibindo os vídeos na aplicação - Video 3

Nesta aula, aprendemos como consumir dados de uma API e exibi-los em uma aplicação. Utilizamos a função fetch para fazer a requisição à API e a função then para tratar a resposta. Em seguida, utilizamos o método json() para transformar a resposta em um objeto JSON. Com um loop forEach, percorremos cada vídeo retornado pela API e adicionamos as informações na lista de vídeos no HTML. Criamos elementos HTML dinamicamente, como <li>, <iframe>, <div>, <img>, <h3> e <p>, para exibir os vídeos com suas respectivas informações. Ao final, os vídeos da API são exibidos no navegador.

### Aula 02 - Capturando erros com .catch - Video 4

Nesta aula, o instrutor discute sobre como capturar erros ao consumir dados de uma API no JavaScript. Ele mostra como utilizar o método .catch() para tratar erros ao carregar vídeos de uma API. Dentro do bloco .catch(), é possível exibir uma mensagem de erro para o usuário. O instrutor também demonstra como provocar um erro intencionalmente no código e mostra como a mensagem de erro é exibida no navegador. O objetivo é garantir que a aplicação não quebre e que os vídeos estejam sempre disponíveis.

### Aula 02 - Para saber mais: Promises em JavaScript

Para entender melhor as Promises, precisamos primeiro conhecer o conceito de programação assíncrona:

Na programação síncrona, o código é executado linha por linha, ou seja, uma linha de código não começará a ser executada até que a linha anterior tenha sido totalmente concluída. No entanto, na programação assíncrona, o código não espera que uma linha seja concluída antes de passar para a próxima. Isso é muito útil quando estamos realizando tarefas que podem demorar algum tempo, como carregar uma imagem ou buscar dados de um servidor.

As Promises em JavaScript são objetos que representam o estado de uma operação assíncrona. Uma Promise pode estar em um de três estados:  

- pendente(estado inicial, nem cumprido nem rejeitado)
- resolvida/fulfilled (a operação assíncrona foi concluída com sucesso)
- rejeitada/rejected (a operação assíncrona falhou). Podemos criar uma Promise da seguinte forma:

Depois que a Promise é retornada, podemos lidar com seu resultado utilizando o método then para o caso de sucesso (resolvida) e o método catch para o caso de erro (rejeitada):

É importante lembrar que a promise só pode ser resolvida ou rejeitada uma vez. Se nós resolvermos e depois rejeitarmos uma mesma promise, a rejeição será ignorada.

Além disso, pode ser um desafio lidar com várias Promises. Para isso, temos disponíveis as funções Promise.all e Promise.race:

Promise.all: recebe um array de Promises e retorna uma nova promiseque resolve quando todas as Promises do array foram resolvidas ou uma delas foi rejeitada.

Promise.race: retorna uma promiseque se resolve ou rejeita com a resolução ou rejeição da primeira promiseno array a se resolver.

As Promises são uma parte importante do JavaScript moderno e são usadas em muitas bibliotecas e frameworks populares, como React e Angular. Ao entender como as Promises funcionam, você terá mais facilidade para lidar com código assíncrono efetivamente.

Para se aprofundar mais, acesse a documentação de [Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Aula 02 Conclusão - Nessa aula, você aprendeu:

O que é e como instalar a API Fake JSON Server;
Como fazer a busca dos dados na API com o Fetch;
Como lidar com .then e com Promises;
Como manipular o DOM para exibir os dados da API;
Como usar o .catch para capturar erros.

## Aula 03 - Aprimorando o código

### Aula 03 - Async/Await - Video 1

Nesta aula, o instrutor aborda o uso de código assíncrono em JavaScript para melhorar o desempenho de uma aplicação. Ele introduz o conceito de callback e apresenta o recurso async/await como uma forma mais organizada de lidar com código assíncrono. O instrutor mostra um exemplo de código utilizando os métodos .then() para obter a resposta de uma requisição fetch e transformá-la em um objeto JSON. Em seguida, ele substitui os métodos .then() por await, que faz com que o código aguarde a conclusão da operação anterior antes de continuar a execução. O instrutor também faz melhorias no código, como renomear variáveis e remover métodos desnecessários. No final, ele chama a função buscarEMostrarVideos para testar o código assíncrono. O uso do async/await torna o código mais linear e evita o callback hell.

### Aula 03 -  Tratando erros com try…catch - Video 2

Nesta aula, o instrutor aborda a necessidade de tratar erros em um código assíncrono. Ele apresenta o recurso Try/Catch, que consiste em dois blocos de código: o bloco try, responsável por executar o código que pode gerar erros, e o bloco catch, acionado caso algum erro seja capturado. O instrutor mostra como implementar o Try/Catch no código e como fazer o tratamento de erro, exibindo uma mensagem personalizada. Além disso, é apresentado o bloco finally, que é executado independentemente de haver um erro ou não. O instrutor também demonstra como criar erros personalizados usando o throw new Error(). Por fim, destaca a importância de tratar erros em um código assíncrono e como esses recursos podem ser utilizados para garantir um código mais robusto.

### Aula 03 -  Para saber mais: Callback Hell

Callbacks em JavaScript:  
Em JavaScript, um callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona ou evento específico. Os callbacks são amplamente utilizados para lidar com tarefas assíncronas, como chamadas de API, leitura de arquivos, eventos de usuário e muito mais.

O Problema do "Callback Hell":  
O "Callback Hell" é um termo usado para descrever a situação em que múltiplas chamadas de função com callbacks são aninhadas profundamente dentro de outras chamadas de função. Isso cria um código que se assemelha a uma pirâmide, tornando-o difícil de ler, manter e depurar. À medida que mais operações assíncronas são adicionadas, a complexidade do código aumenta rapidamente.

Conclusão:  
Embora os callbacks sejam úteis para controlar fluxos de execução assíncronos, é importante evitar o "Callback Hell" sempre que possível. Alternativas, como o uso de Async-Await, tornam o código mais legível e manutenível, especialmente em projetos maiores. Entender como lidar com callbacks de forma eficaz é fundamental para desenvolver aplicativos JavaScript robustos e de fácil manutenção. Para se aprofundar mais no assunto, recomendamos que acesse a [Introdução ao JavaScript Assíncrono](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing#manipuladores_de_eventos_2) e também acesse a documentação das [Funções Callback](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function).

### Aula 03 Conclusão - Nessa aula, você aprendeu como:

Evitar o “Callback Hell”;
Refatorar o código assíncrono com Async/await;
Realizar tratamento de erros com os blocos Try-Catch-Finally;
Tratar erros personalizados com o throw new Error.

## Aula 04 - 

### Aula 04 -  - Video 1