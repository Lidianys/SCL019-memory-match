
import App from './components/App.js';
import RickyMorty from '../data/RickyMorty/RickyMorty.js';

//Se llama la función que crea los div
document.body.onload = App;


/*
let elementsItems= RickyMorty.items;//definimos los elementos de la data
let image=0; //definir imagen frontal de la carta
let arrayCards = new Array();
//let backImage; //definir imagen back de las cartas
//const cards = document.querySelectorAll(".cards");
console.log(elementsItems);
for(let j = 0; j < elementsItems.length; j ++){
  arrayCards[j]= arrayCards[j] + elementsItems[j].image;
  //console.log(arrayCards[j]);
}


for(let i = 1; i < elementsItems.length; i ++){
  image = elementsItems[i].image;//almacena la src de las imagenes front
 // arrayCards[i]= arrayCards[i] + image;
  
 // 
  //let arrayCardsB = arrayCards.concat(arrayCards);
 // backImage = elementsItems[0].image;// almacena la src de las imagenes back
  const newDiv = document.createElement('div');//crea una etiqueta div
  const imgFront = document.createElement('img');// crea etiqueta img para imagenes front
  //const imgBack = document.createElement("img");//crea etiqueta img para imagenes back
  const frontCard = document.createTextNode(imgFront.src= image);// contiene las imagenes de front
  //const backCard = document.createTextNode(imgBack.src= backImage);//contiene la imagen de back
  imgFront.appendChild(frontCard);//pone las imagenes dentro de la etiqueta img de front
 // backFace.appendChild(backCard);//pone la imagen dentro de la etiqueta img de back
  newDiv.appendChild(imgFront);//se pone la etiqueta img dentro del div
 // newDiv.appendChild(imgBack);//se pone la etiqueta img dentro del div
  imgFront.className = "cards";
 // imgBack.className= "cards";
  const dupCards = newDiv.cloneNode(true);
  //newDiv = newDiv.conc
  document.getElementById('cardsContainer').appendChild(newDiv);//se crea el div dentro del select
  document.getElementById('cardsContainer').appendChild(dupCards);//se crea el div dentro del select
  //console.log(frontFace);
  newDiv.className = "memory-game";
  dupCards.className= "memory-game";
  
}
//console.log("hola" + arrayCards);
//console.log("hola" + arrayCards);
/*function duplicateElements(array, times) {
    return array.reduce((res, current) => {
        return res.concat(Array(times).fill(current));
    }, []);
   
  }
  return this;
  console.log("suflle" + cardArray);
}*/

 /* function shuffleArray(image) {
  for (let i = image.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [image[i], image[j]] = [image[j], image[i]];
      console.log("invertido" + image);
  }
  console.log("invertido" + image);
}*/

/*function shuffle(image) {
  let currentIndex = image.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = image[currentIndex];
    image[currentIndex] = image[randomIndex];
    image[randomIndex] = temporaryValue;
  }
  
  return image;
  console.log("suflle" + image);
}*/


// arrangeCard function
  /*function arrangeCard( cardArray) { 
  cardArray.sort(() => 0.5 - Math.random())
  console.log("funcion flip" + cardArray );
}*/
 /* function flipCard() { 
  let selected = this.RickyMorty.id;
  cardsSelected.push(cardArray[selected].name); //duda si es name o id
  cardsId.push(selected); 
  this.classList.add("flip"); 
  this.setAttribute("src", cardArray[selected].image); 
  if (cardsId.length === 2) { 
  setTimeout(checkForMatch, 500);
  console.log("entrando a la funcion flipcard");
  } 
}*/
createBoard();

