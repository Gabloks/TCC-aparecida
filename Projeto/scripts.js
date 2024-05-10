
const produtos = [
    {
      id: 1,
      nome: 'Focus 2007',
      preco: 32000,
      imagem: 'Focus.jpg'
    },
    {
      id: 2,
      nome: 'FordKa 2004',
      preco: 23000,
      imagem: 'FordKa.jpg'
    },

  ];
  

  let carrinho = [];
  

  function mostrarProdutos() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
  
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const imagem = document.createElement('img');
      imagem.src = produto.imagem;
      imagem.alt = produto.nome;
  
      const nome = document.createElement('h3');
      nome.textContent = produto.nome;
  
      const preco = document.createElement('p');
      preco.textContent = `Preço: R$ ${produto.preco}`;
  
      const btnComprar = document.createElement('button');
      btnComprar.classList.add('btn-comprar');
      btnComprar.textContent = 'Comprar';
      btnComprar.addEventListener('click', () => adicionarAoCarrinho(produto));
  
      card.appendChild(imagem);
      card.appendChild(nome);
      card.appendChild(preco);
      card.appendChild(btnComprar);
  
      gridContainer.appendChild(card);
    });
  }
  

  function adicionarAoCarrinho(produto) {
    carrinho.push({ ...produto });
    atualizarCarrinho();
  }
  
 
  function atualizarCarrinho() {
    const carrinhoContainer = document.querySelector('.carrinho-container');
    carrinhoContainer.innerHTML = '';
  
    if (carrinho.length === 0) {
      carrinhoContainer.textContent = 'Seu carrinho está vazio.';
    } else {
      let total = 0;
      carrinho.forEach(item => {
        const carrinhoItem = document.createElement('div');
        carrinhoItem.classList.add('carrinho-item');
  
        const imagem = document.createElement('img');
        imagem.src = item.imagem;
        imagem.alt = item.nome;
  
        const nome = document.createElement('h3');
        nome.textContent = item.nome;
  
        const precoUnitario = document.createElement('p');
        precoUnitario.textContent = `Preço unitário: R$ ${item.preco}`;
  
        const btnRemover = document.createElement('button');
        btnRemover.classList.add('btn-remover');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', () => removerDoCarrinho(item.id));
  
        carrinhoItem.appendChild(imagem);
        carrinhoItem.appendChild(nome);
        carrinhoItem.appendChild(precoUnitario);
        carrinhoItem.appendChild(btnRemover);
  
        carrinhoContainer.appendChild(carrinhoItem);
  
        total += item.preco;
      });
  
      const totalCarrinho = document.createElement('p');
      totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
  
      const btnFinalizarCompra = document.createElement('button');
      btnFinalizarCompra.textContent = 'Finalizar Compra';
      btnFinalizarCompra.addEventListener('click', finalizarCompra);
  
      carrinhoContainer.appendChild(totalCarrinho);
      carrinhoContainer.appendChild(btnFinalizarCompra);
    }
  }
  
 
  function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
  }
  

  function finalizarCompra() {

    alert('Compra finalizada!');
    carrinho = []; 
    atualizarCarrinho();
  }
  

  mostrarProdutos();
  
const items = [
  { id: 1, nome: 'Focus' },
  { id: 2, nome: 'FordKa' },
];


function realizarPesquisa(event) {
  event.preventDefault(); 

  const termoPesquisa = document.getElementById('searchInput').value.toLowerCase();
  const resultadosPesquisa = items.filter(item => item.nome.toLowerCase().includes(termoPesquisa));

  exibirResultados(resultadosPesquisa);
}


function exibirResultados(resultados) {
  const resultadosPesquisaDiv = document.getElementById('resultadosPesquisa');
  resultadosPesquisaDiv.innerHTML = '';

  if (resultados.length === 0) {
    resultadosPesquisaDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
  } else {
    resultados.forEach(item => {
      const resultadoItem = document.createElement('p');
      resultadoItem.textContent = item.nome;
      resultadosPesquisaDiv.appendChild(resultadoItem);
    });
  }
}

document.getElementById('searchForm').addEventListener('submit', realizarPesquisa);

  