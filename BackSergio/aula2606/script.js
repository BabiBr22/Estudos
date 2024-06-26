function criarCardArtigo(titulo, imagem, data, descricao, link) {
    var card = document.createElement('div');
    card.classList.add('card'); // Adiciona a classe 'card' ao elemento div

    // Cria o elemento da imagem
    var imagemElemento = document.createElement('img');
    imagemElemento.src = imagem;
    imagemElemento.alt = titulo; // Define o texto alternativo da imagem
    card.appendChild(imagemElemento); // Adiciona a imagem ao card

    // Cria o conteúdo do card
    var conteudo = document.createElement('div');
    conteudo.classList.add('card-content');

    // Cria o título do artigo
    var tituloElemento = document.createElement('h2');
    tituloElemento.textContent = titulo;
    conteudo.appendChild(tituloElemento); // Adiciona o título ao conteúdo do card

    // Cria a data do artigo
    var dataElemento = document.createElement('p');
    dataElemento.textContent = data;
    conteudo.appendChild(dataElemento); // Adiciona a data ao conteúdo do card

    // Cria a descrição do artigo
    var descricaoElemento = document.createElement('p');
    descricaoElemento.textContent = descricao;
    conteudo.appendChild(descricaoElemento); // Adiciona a descrição ao conteúdo do card

    // Cria o link para o artigo completo
    var linkElemento = document.createElement('a');
    linkElemento.href = link;
    linkElemento.textContent = "Leia mais";
    conteudo.appendChild(linkElemento); // Adiciona o link ao conteúdo do card

    card.appendChild(conteudo); // Adiciona o conteúdo completo ao card

    return card; // Retorna o elemento do card completamente montado
}
