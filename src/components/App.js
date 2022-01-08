//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import RickyMorty from '../data/RickyMorty/RickyMorty.js';
 //console.log(RickyMorty);
 
let elementsItems= RickyMorty.items;//definimos los elementos de la dat
let image=0; //definir imagen frontal de la carta
let backImage; //definir imagen back de las cartas
const allCards = document.querySelectorAll(".memory-game");

for(let i = 1; i < elementsItems.length; i ++){
  image = elementsItems[i].image;//almacena la src de las imagenes front
  backImage = elementsItems[0].image;// almacena la src de las imagenes back
  const newDiv = document.createElement('div');//crea una etiqueta div
  const frontFace = document.createElement('img');// crea etiqueta img para imagenes front
  const backFace = document.createElement("img");//crea etiqueta img para imagenes back
  const frontCard = document.createTextNode(frontFace.src= image);// contiene las imagenes de front
  const backCard = document.createTextNode(backFace.src= backImage);//contiene la imagen de back
  frontFace.appendChild(frontCard);//pone las imagenes dentro de la etiqueta img de front
  backFace.appendChild(backCard);//pone la imagen dentro de la etiqueta img de back
  newDiv.appendChild(frontFace);//se pone la etiqueta img dentro del div
  newDiv.appendChild(backFace);//se pone la etiqueta img dentro del div
  document.getElementById('cardsContainer').appendChild(newDiv);//se crea el div dentro del select
  console.log(frontFace);
  newDiv.id = "memory-game";
  frontFace.className = "cards";
  backFace.className= "cards";
  //backCard.className = "frontFace";

}
function flipCard() {
  console.log("estoy clickeando");
} 



allCards.forEach(card => card.addEventListener ("click", flipCard ));

/*const App = (RickyMorty) => {
  let elementsItems= RickyMorty.items;//definimos los elementos de la dat
  let image=0; //definir imagen frontal de la carta
  let backImage; //definir imagen back de las cartas
  
  for(let i = 1; i < elementsItems.length; i ++){
    image = elementsItems[i].image;//almacena la src de las imagenes front
    backImage = elementsItems[0].image;// almacena la src de las imagenes back
    const newDiv = document.createElement('div');//crea una etiqueta div
    const frontFace = document.createElement('img');// crea etiqueta img para imagenes front
    const backFace = document.createElement("img");//crea etiqueta img para imagenes back
    const frontCard = document.createTextNode(frontFace.src= image);// contiene las imagenes de front
    const backCard = document.createTextNode(backFace.src= backImage);//contiene la imagen de back
    frontFace.appendChild(frontCard);//pone las imagenes dentro de la etiqueta img de front
    backFace.appendChild(backCard);//pone la imagen dentro de la etiqueta img de back
    newDiv.appendChild(frontFace);//se pone la etiqueta img dentro del div
    newDiv.appendChild(backFace);//se pone la etiqueta img dentro del div
    document.getElementById('cardsContainer').appendChild(newDiv);//se crea el div dentro del select
    console.log(frontFace);





  //const el = document.createElement('div');
  //const elemento = document.createElement('img');
  //const contenido = document.createTextNode(elementsItems[i].image);
  //elemento.src= image;
  //document.getElementById().appendChild(elemento);
  
  
  //el.className = 'App';
  //el.textContent = 'Hola mundo!';

  return newDiv;
};
}*/

//export default App;


 /*esta funciona `<img src="${elementsItems[i].image}" alt="imagenes">`;
 
 //cards = elements[i].image;
 //document.getElementById("prueba").innerHTML= cards;
//document.querySelector('subtitulo').appendChild(elemento);
//document.getElementById('subtitulo').appendChild(elemento);
/*
const App = () => {
  //const el = document.createElement('div');
  
  //el.className = 'App';
  //el.textContent = 'Hola mundo!';

  return elemento;
};*/

export default App;
