//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import RickyMorty from '../data/RickyMorty/RickyMorty.js';
 //console.log(RickyMorty);

 let elementsItems= RickyMorty.items;//definimos los elementos de la dat
 
 console.log("Hola elementsItems "+ elementsItems);
 let arrayCard = new Array();
 
 //-----Guardamos las img en un array---
for (let i=1;i<elementsItems.length;i++){
   arrayCard.push(elementsItems[i].image);
}
//console.log("holaaaa eres de tipo: "+typeof arrayCard);

//---funcion Fisher-Yates Shuffle ----
function shuffle(elementsItems) {
  let currentIndex = elementsItems.length; 
  let randomIndex =0;
  let tempValue=0;
  
  while(currentIndex !== 0){
    randomIndex=Math.floor(Math.random()*currentIndex);
    currentIndex-=1;
    tempValue= elementsItems[currentIndex];
    elementsItems[currentIndex]=elementsItems[randomIndex];
    elementsItems[randomIndex]=tempValue;
  }
  return elementsItems;
  }


function App (){
  let image=0; //definir imagen frontal de la carta
  let backImage=0; //definir imagen back de las cartas 
  shuffle(elementsItems); 
  for(let i = 1; i < elementsItems.length; i ++){
    image= elementsItems[i].image;//almacena la src de las imagenes front
    backImage = elementsItems[0].image;// almacena la src de las imagenes back
//---- crea una etiqueta div y se le asigna una class-------------------
    const newDiv = document.createElement("div");
    newDiv.className= "memory-game";
//---- crea etiquetas img para imagenes front y back / se le asinga una clase -- 
    const frontFace = document.createElement("img");
    //const backFace = document.createElement("img");
    frontFace.className = "cards";
    //backFace.className= "cards";
//---- Se le asigna src a cada img de front y back   
    const frontCard = document.createTextNode(frontFace.src= image);
    //const backCard = document.createTextNode(backFace.src= backImage);
//---- se inserta a cada nodo img su respectiva imagen -------  
    frontFace.appendChild(frontCard);
    //backFace.appendChild(backCard);
//---- se inserta a cada nodo div su respectiva img -------  
    newDiv.appendChild(frontFace);
    //newDiv.appendChild(backFace);
//---- se inserta al nodo Select los div -------  
    document.getElementById('cardsContainer').appendChild(newDiv);
    //console.log(frontFace);   
    //backCard.className = "frontFace";
  }
}

console.log(arrayCard);

/*const App = () => {
  //const el = document.createElement('div');
  
  //el.className = 'App';
  //el.textContent = 'Hola mundo!';

  return el;
};*/

export default App;
