const containerCards = document.querySelector('.container__cards');

const inputFilm = document.getElementById('input-film');
const boxSearch = document.querySelector('.box__search');
inputFilm.addEventListener('input', () => {
  let valueInput = inputFilm.value.toLowerCase();
  const searchFilm = arrayCards.filter((item) =>
    item.title.toLowerCase().includes(valueInput)
  );

  boxSearch.innerHTML = "";
  boxSearch.style.display = 'flex';

  searchFilm.forEach((item) => {
    createSearch(item);
  });

  if (searchFilm.length === 0) {
    boxSearch.innerHTML = `<p>Nenhum filme encontrado!</p>`;
  }
});
inputFilm.addEventListener('blur', () => {
  boxSearch.style.display = 'none';
});

var arrayCards = [
  {
    title: "Five Nights at Freddy's - O pesadelo sem fim", 
    imgURL: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/five-nights-at-freddys-o-pesadelo-sem-fim.jpg?1693574283",
    dateExib: "20-10 -> 01-11", 
    isReleased: true,
    qtd: 0,
    price: 32, 
  },
  {
    title: "Besouro Azul", 
    imgURL: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/besouro-azul.jpg?1691171104", 
    dateExib: "20-10 -> 01-11",
    isReleased: true,
    qtd: 1,
    price: 32, 
  }, 
  {
    title: "Gente Grande 2", 
    imgURL: "https://br.web.img3.acsta.net/pictures/210/049/21004903_20130510170049514.jpg", 
    dateExib: "12-08 -> 24-10",
    isReleased: true,
    qtd: 1,
    price: 32, 
  },
  {
    title: "Cruella", 
    imgURL: "https://lumiere-a.akamaihd.net/v1/images/image_46443ba4.jpeg?region=0,0,540,810", 
    dateExib: "12-08 -> 24-10",
    isReleased: true,
    qtd: 1,
    price: 32, 
  },

  {
    title: "a", 
    imgURL: "a", 
    dateExib: "00-00 -> 00-00",
    isReleased: true,
    qtd: 100,
    price: 32, 
  },
  {
    title: "a", 
    imgURL: "a", 
    dateExib: "00-00 -> 00-00",
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



function createSearch(item) {
  const box = document.createElement('div');
  const boxInfo = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('h1');
  const dateExib = document.createElement('p');
  // const title = document.createElement('h1');

  box.className = 'box-item';
  img.className = 'img-item';
  boxInfo.className = 'box-infos';

  img.src = item.imgURL;
  title.innerText = item.title;
  dateExib.innerText = item.dateExib;
  boxInfo.append(title, dateExib);

  box.append(img, boxInfo);

  box.addEventListener('click', (e)=> {
    notify('sucess', 'Filme clicado!');
    console.log(e)
  })
  boxSearch.appendChild(box);
}

notify('sucess', 'Sucesso');
notify('error', 'Erro');
notify('alert', 'Alerta');
// notify('error', 'teste');
function notify(type, msg) {
  const container__notify = document.querySelector('.notify-container');

  const notify = document.createElement('div');
  const stats = document.createElement('h1');
  const info = document.createElement('p');
  const boxInfos = document.createElement('div');
  const icon = document.createElement('ion-icon');
  
  notify.className = 'notify';
  boxInfos.className = 'box-stats';
  icon.className = 'icon-notify';
  
  info.innerText = msg;
  
  boxInfos.append(stats, info);
  notify.append(icon, boxInfos);

  switch (type) {
    case 'success':
      icon.setAttribute('name', 'checkmark-outline');
      stats.innerHTML = 'Sucesso';
      break;
    case 'error':
      icon.setAttribute('name', 'close-outline');
      stats.innerHTML = 'Erro';
      break;
    case 'alert':
      icon.setAttribute('name', 'warning-outline');
      stats.innerHTML = 'Alerta';
      break;
    default:
      icon.setAttribute('name', 'checkmark-outline');
      stats.innerText = 'Sucesso';
      break;
  }
  
  notify.classList.add('--show-notify');

  container__notify.appendChild(notify);

  setTimeout(() => {
    notify.classList.remove('--show-notify');
    notify.classList.add('--rem-notify');
    setTimeout(() => {
      container__notify.removeChild(notify);
    }, 400);
  }, 4000);
}

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
    price.innerText = `Valor do Ingresso: R$${item.price}`;
    dateExib.innerText = `Tempo em Exibição: ${item.dateExib}`;
    stats.innerText = `Está lançado?: ${item.isReleased}`;

    btn.addEventListener('click', ()=> {
      buyTicket(item);
    })
    btn.innerText = 'Comprar ticket';
    card.append(img, title, qtd, price, stats, dateExib, btn);
    
    if (item.qtd <= 0) {
      card.classList.add('outStock');
      btn.innerText = "Esgotado!"
    }
    containerCards.appendChild(card);
    // if (item.isReleased){
    //   containerCards.appendChild(card);
    // } else {
    //   containerCards.innerHTML = `
    //     <h1>Nenhum Filme em exibição!</h1>
    //   `
    // }
  });
}

function buyTicket(item) {
  if (item.qtd > 0){
    notify('sucess', `Ticket comprado para o Filme: ${item.title}`)
    item.qtd--;
  } else {
    // console.log(card);
    notify('error', `Vendas esgotadas para esse filme!`);
    return;
  } 
  createCards();
}