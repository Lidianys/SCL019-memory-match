//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import RickyMorty from '../data/RickyMorty/RickyMorty.js';
 //console.log(RickyMorty);
let elementsItems= RickyMorty.items;
//let cards;
//let image = document.createElement('prueba');
//let frontFace = document.getElementById("front-face") ;
let image=0; 
const cardsContainer=document.getElementById('cardsContainer');

for(let i = 0; i < elementsItems.length; i ++){
 // console.log(elementsItems[i].image);
  image = elementsItems[i].image;
  const newDiv = document.createElement('div');
  const elemento = document.createElement('img');
  const contenido = document.createTextNode(elemento.src= image);
  elemento.appendChild(contenido);
  newDiv.appendChild(elemento);
  document.getElementById('cardsContainer').appendChild(newDiv);
  console.log(elemento);
}


const App = () => {
  //const el = document.createElement('div');
  //const elemento = document.createElement('img');
  //const contenido = document.createTextNode(elementsItems[i].image);
  //elemento.src= image;
  //document.getElementById().appendChild(elemento);
  
  
  //el.className = 'App';
  //el.textContent = 'Hola mundo!';

  //return elemento;
};
export default App;


 //esta funciona `<img src="${elementsItems[i].image}" alt="imagenes">`;
 
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
};

//export default App;*/
