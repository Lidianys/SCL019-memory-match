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
 /* duplicateElements([arrayCards], 5);
  for(let i = 1; i < arrayCards.length; i ++){
   
  }*/
 
/*function flipCard() {
  console.log("estoy clickeando");
} 

cards.forEach(card => card.addEventListener ("click", flipCard ));*/


//console.log("hpla" + cards);






//document.getElementById('root').appendChild(App());
