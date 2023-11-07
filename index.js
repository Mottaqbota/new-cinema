const containerCards = document.querySelector('.container__cards');

var arrayCards = [
  {
    title: "Five Nights at Freddy's - O pesadelo sem fim", 
    imgURL: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/five-nights-at-freddys-o-pesadelo-sem-fim.jpg?1693574283",
    dateExib: "20-10 -> 01-11", 
    isReleased: false,
    qtd: 100,
    price: 32, 
  },
  {
    title: "Besouro Azul", 
    imgURL: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/besouro-azul.jpg?1691171104", 
    dateExib: "20-10 -> 01-11",
    isReleased: false,
    qtd: 100,
    price: 32, 
  },
  // {
  //   title: "Oi4", 
  //   imgURL: "", 
  // },

]

showCards()
function showCards() {
  containerCards.innerHTML = "";
  if (arrayCards.isReleased = true) {
    arrayCards.forEach(item =>{
      const card = document.createElement('div');
      const img = document.createElement('img');
      const title = document.createElement('h1');
      const btn = document.createElement('button');

      card.className = 'card';
      title.className = 'title';
      img.className = 'img-card';
      btn.className = 'btn-buy';

      title.innerText = item.title;
      img.src = item.imgURL;

      btn.innerText = 'Comprar ticket';
      card.append(img, title, btn)
      containerCards.appendChild(card)
    })
  } else {
    containerCards.innerHTML = `
    <h1>Nenhum Filme em exibição!</h1>
    `
  }
}
