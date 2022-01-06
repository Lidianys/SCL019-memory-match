//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import RickyMorty from '../data/RickyMorty/RickyMorty.js';
 //console.log(RickyMorty);
let elements= RickyMorty.items;
//let cards;
//let image = document.createElement('prueba');
//let frontFace = document.getElementById("front-face") ;
let image;
//let frontFace = 
for(let i = 0; i < elements.length; i ++){
  image += 
  `<img src="${elements[i].image}" alt="imagenes">`;
 
 //cards = elements[i].image;
 //document.getElementById("prueba").innerHTML= cards;
}
document.getElementById("front-face").innerHTML= image;
//console.log(cards);




//let cards= RickyMorty.includes(RickyMorty.items);
 //console.log("hola" + cards);
//function showCard

//for (let i=0; i<cards.length;i++)
  
//document.getElementById("front-face").innerHTML = cards;

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

export default App;
