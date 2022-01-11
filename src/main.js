import RickyMorty from '../data/RickyMorty/RickyMorty.js';
 let cardArray= RickyMorty.items;//definimos los elementos de la dat
  console.log("hola");
  let image = []; //definir imagen frontal de la carta
  let backImage; //definir imagen back de las cartas
  //let cardsId = []; 
  //let cardsSelected = []; 
 console.log("analizar el array" + RickyMorty.items[3]);
  //se crea funcion para imprimir la data, se crea etiqueta img y div. Y se guarda las imgenes en image
  function createBoard(){  
  for(let i = 1; i < cardArray.length; i ++){
    image = cardArray[i].image;//almacena la src de las imagenes front
    backImage = cardArray[0].image;// almacena la src de las imagenes back
    const newDiv = document.createElement('div');//crea una etiqueta div
    newDiv.className = "memory-card";
    const frontFace = document.createElement('img');// crea etiqueta img para imagenes front
    const backFace = document.createElement("img");//crea etiqueta img para imagenes back
    const frontCard = document.createTextNode(frontFace.src= image);// contiene las imagenes de front
    const backCard = document.createTextNode(backFace.src= backImage);//contiene la imagen de back
    //frontFace.setAttribute("data-id", index); //prueba
    frontFace.appendChild(frontCard);//pone las imagenes dentro de la etiqueta img de front
    frontFace.className = "front-face";
    backFace.appendChild(backCard);//pone la imagen dentro de la etiqueta img de back
    backFace.className= "back-face";
    newDiv.appendChild(frontFace);//se pone la etiqueta img dentro del div
    newDiv.appendChild(backFace);//se pone la etiqueta img dentro del div
    document.getElementById('memory-game').appendChild(newDiv);//se crea el div dentro del select
    console.log(frontFace);
     
  }
}
console.log("array" + cardArray.image);
/*cardArray.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
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

