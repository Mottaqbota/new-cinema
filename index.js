const containerCards = document.querySelector('.container__cards');

var arrayCards = [
  {
    title: "Five Nights at Freddy's - O pesadelo sem fim", 
    imgURL: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/five-nights-at-freddys-o-pesadelo-sem-fim.jpg?1693574283",
    dateExib: "20-10 -> 01-11", 
    isReleased: true,
    qtd: 100,
    price: 32, 
  },
  {
    title: "Besouro Azul", 
    imgURL: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/besouro-azul.jpg?1691171104", 
    dateExib: "20-10 -> 01-11",
    isReleased: true,
    qtd: 100,
    price: 32, 
  }, 
  // {
  //   title: "a", 
  //   imgURL: "a", 
  //   dateExib: "00-00 -> 00-00",
  //   isReleased: true,
  //   qtd: 100,
  //   price: 32, 
  // },
  // {
  //   title: "Oi4", 
  //   imgURL: "", 
  // },

]
createCards();
function createCards() {
  containerCards.innerHTML = "";
  arrayCards.forEach(item =>{
    const card = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h1');
    const price = document.createElement('p');
    const qtd = document.createElement('p');
    const stats = document.createElement('p');
    const dateExib = document.createElement('p');
    const btn = document.createElement('button');

    card.className = 'card';
    title.className = 'title';
    img.className = 'img-card';
    btn.className = 'btn-buy';

    title.innerText = item.title;
    img.src = item.imgURL;
    qtd.innerText = `Disponíveis: ${item.qtd}`;
    price.innerText = `Valor do Ingresso: ${item.price}`;
    dateExib.innerText = `Tempo em Exibição: ${item.dateExib}`;
    stats.innerText = `Está lançado?: ${item.isReleased}`;


    btn.addEventListener('click', ()=> {
      buyTicket(item);
    })
    btn.innerText = 'Comprar ticket';
    card.append(img, title, qtd, price, stats, dateExib, btn);

    if (item.isReleased){
      containerCards.appendChild(card);
    } else {
      containerCards.innerHTML = `
        <h1>Nenhum Filme em exibição!</h1>
      `
    }
  });
}

function buyTicket(item) {
  console.log(item.qtd--);
  createCards();
}
