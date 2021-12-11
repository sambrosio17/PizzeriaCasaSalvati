window.onload = async (event) => {

  

  $(document).scroll(() => {

    var y = $(this).scrollTop();
    if (y > 100) {
        $("#top").fadeIn();
    } else {
        $("#top").fadeOut();
    }


});

$("#top").click(() => {


    scroll({
        top: 0,
        behavior: "smooth"
    });

});

  let data=new Date();
  if(data.getMonth()==11){

    
      document.querySelectorAll('head link[rel="stylesheet"]')[0].setAttribute("href","./public/style/winter-style.css");
    
  }
  if(data.getMonth()==11 && data.getDate()>=8){
    console.log("eccomi qua");
    
    await showFeste();
  }
  
    
 
  await loadSfizi();
  await loadSaporiAntichi();
  await loadSaporiNuovi();
  await loadSaporiSpeciali();
  await loadDolci();
  await loadBibite();
  await loadBirre();
};

async function loadSfizi() {
  const sfizi = await (await fetch("/public/json/sfizi.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "sfizi";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "I nostri sfizi";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  sfizi.map((item) => createPortata(item, container));
}

async function loadSaporiAntichi() {
  const items = await (await fetch("/public/json/saporiantichi.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "sapori__antichi";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "I Sapori Antichi";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  items.map((item) => createPortata(item, container));
}

async function loadSaporiNuovi() {
  const items = await (await fetch("/public/json/nuovisapori.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "sapori__nuovi";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "Nuovi Sapori";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  items.map((item) => createPortata(item, container));
}

async function loadSaporiSpeciali() {
  const items = await (await fetch("/public/json/specialisapori.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "sapori__speciali";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "Speciali Sapori";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  items.map((item) => createPortata(item, container));
}

async function loadDolci() {
  const items = await (await fetch("/public/json/dolci.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "dolci";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "Dolci";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  items.map((item) => createPortata(item, container));
}

async function loadBibite() {
  const items = await (await fetch("/public/json/bibite.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "bibite";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "Bibite";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  items.map((item) => createPortata(item, container));
}

async function loadBirre() {

  const items = await (await fetch("/public/json/birre.json")).json();
  const container = document.createElement("div");
  container.className = "container";
  container.id = "birre";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "Birre";
  container.appendChild(title);
  document.getElementById("main__container").appendChild(container);
  items.map((item) => createPortata(item, container));
}

function createPortata(item, container) {
  let portata = document.createElement("div");
  portata.className = "portata";
  let portataSx = document.createElement("div");
  portataSx.className = "portata__sx";
  let portataDx = document.createElement("div");
  portataDx.className = "portata__dx";
  portata.appendChild(portataSx);
  portata.appendChild(portataDx);
  let line = document.createElement("div");
  line.className = "line";
  let titleWrapper = document.createElement("div");
  titleWrapper.className = "titleWrapper";
  let portataTitle = document.createElement("h1");
  portataTitle.className = "portataTitle";
  portataTitle.innerText = item.titolo;
  titleWrapper.appendChild(portataTitle);
  if (item.new) {
    let news = document.createElement("h2");
    news.className = "news";
    news.innerText = "new";
    titleWrapper.appendChild(news);
  }
  portataSx.appendChild(titleWrapper);
  portataSx.appendChild(line);
  if (item.ingredienti) {
    let info = document.createElement("p");
    info.className = "info";
    info.innerText = item.ingredienti;
    portataSx.appendChild(info);
  }

  let prezzo = document.createElement("h1");
  if (item.prezzo && item.prezzo.length > 0) {
    prezzo.className = "prezzo";
    prezzo.innerText = item.prezzo + " €";
    portataDx.appendChild(prezzo);
  }
  if (item.extra && item.extra.length > 0) {
    let extra = document.createElement("h5");
    extra.className = "extra";
    extra.innerText = item.extra;
    portataDx.appendChild(extra);
  }
  container.appendChild(portata);
}

function showFeste()
{
  
  let container=document.createElement("div");
  container.classList.add("festivita");
  container.id="feste";
  let title= document.createElement("h1");
  title.classList.add("title");
  let data=new Date();
  let textTitle="Buone Feste"+data.getFullYear()+"!";
  let textFrase="Pizzeria Casa Salvati augura a tutta la numerosa clientela buone feste.</br> Grazie per essere sempre con noi.";
  if(data.getDate()==24){
    textTitle="Buona Vigilia di Natale!"
    textFrase="Oggi 24 Dicembre siamo aperti dalle 11.00 alle 18.00."

  }
  if(data.getDate()==25){
    textTitle="Buon Natale "+data.getFullYear()+"!";
    textFrase="Pizzeria Casa Salvati augura alla propria clientela un felice Natale!";

  }
  if(data.getDate()==26){
    textTitle="Buon Santo Stefano!";
    textFrase="Auguri a tutti coloro che si chiamano Stefano/Stefania.</br>Felice Onomastico e Buone Feste";

  }
  if(data.getDate()==31){
    textTitle="Buona Vigilia di Capodanno!";
    textFrase="È arrivato l'ultimo giorno dell'anno!</br>Nella speranza che il prossimo possa essere migliore del 2020, auguriamo a tutta la clientela 'Buona Vigilia di Capodanno'";

  }
    
  title.innerText=textTitle;
  container.appendChild(title);
  let frase=document.createElement("h5");
  frase.classList.add("frase");
  frase.innerHTML=textFrase;
  container.appendChild(frase);
  
  let line=document.createElement("div");
  line.classList.add("line");
  container.appendChild(line);

  document.getElementById("main__container").appendChild(container);
  


}