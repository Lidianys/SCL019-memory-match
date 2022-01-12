import RickyMorty from '../data/RickyMorty/RickyMorty.js';

 let elementsItems= RickyMorty.items;//definimos los elementos de la data
 
//---funcion Fisher-Yates Shuffle ----
function shuffle() {
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
 // let backImage=0; //definir imagen back de las cartas 
  shuffle(elementsItems);
  
  for(let i = 0; i < elementsItems.length; i ++){
    image= elementsItems[i].image;//almacena la src de las imagenes front
     //-----NO UTILIZAR --backImage = elementsItems[0].image;// almacena la src de las imagenes back
    //console.log("Hola BackImage "+backImage);
//---- crea una etiqueta div y se le asigna una class-------------------
    const newDiv = document.createElement("div");
    newDiv.className= "memory-card";
//---- crea etiquetas img para imagenes front y back / se le asinga una clase -- 
    const frontFace = document.createElement("img");
    //const backFace = document.createElement("img");
    frontFace.className = "front-face";
    //backFace.className= "back-face";
//---- Se le asigna src a cada img de front y back   
    const frontCard = document.createTextNode(frontFace.src= image);
    //const backCard = document.createTextNode(backFace.src="data/RickyMorty/fondocards.png");
//---- se inserta a cada nodo img su respectiva imagen -------  
    frontFace.appendChild(frontCard);
    //backFace.appendChild(backCard);
//---- se inserta a cada nodo div su respectiva img -------  
    newDiv.appendChild(frontFace);
    //newDiv.appendChild(backFace);
//---- se inserta al nodo Select los div -------  
    document.getElementById("memory-game").appendChild(newDiv);
    //console.log(frontFace);   
    //backCard.className = "front-face";
    //elementsItems.forEach(card => card,addEventListener("click",flipCard())); //flipCard es una función
    //elementsItems.addEventListener("click", function(){ alert("Hello World!"); });

  }
  //flipCard();
  
}
/*let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  console.log("estoy dando click");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
   console.log("estoy dando click");
    return;
  }

  secondCard = this;
 // checkForMatch();
 //elementsItems.forEach(card => card,addEventListener("click",flipCard())); //flipCard es una función

}
 // console.log("I was cliked");

  // flip Card function
  /*function flipCard() { 
  let selected = this.dataset.id;
  cardsSelected.push(cardArray[selected].name); //puede que sea el id
  cardsId.push(selected); 
  this.classList.add("flip"); 
  this.setAttribute("src", cardArray[selected].img); 
  if (cardsId.length === 2) { 
  setTimeout(checkForMatch, 500);
  } 
  }
 function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
}*/


export default App;
//export default flipCard;
