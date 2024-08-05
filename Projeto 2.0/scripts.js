
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

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
      document.getElementById('message').textContent = 'Login bem-sucedido!';
      document.getElementById('message').style.color = 'green';
  } else {
      document.getElementById('message').textContent = 'Usuário ou senha incorretos.';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let index = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function showNextItem() {
      items[index].classList.remove('active');
      index = (index + 1) % totalItems;
      items[index].classList.add('active');
  }

  function showPrevItem() {
      items[index].classList.remove('active');
      index = (index - 1 + totalItems) % totalItems;
      items[index].classList.add('active');
  }

const InputSearch = document.querySelector("#Search")
const navMenu = document.querySelector("[data-type= 'nav-menu']")