
import RickyMorty from '../data/RickyMorty/RickyMorty.js';
export default App;



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
    console.log("retern de shuffle" + elementsItems);
  }
  return elementsItems;
  
}
console.log("retern de shuffle" + elementsItems);
function App (){
  let image = new Array(); //definir imagen frontal de la carta
  let idCard = new Array();
 // let backImage=0; //definir imagen back de las cartas 
  shuffle(elementsItems);
  
  for(let i = 0; i < elementsItems.length; i ++){
    image= elementsItems[i].image;//almacena la src de las imagenes front
    //elementsItems[i].addEventListener("click", displayCard);
    idCard = elementsItems[i].id;
   //---- crea una etiqueta div y se le asigna una class-------------------
   console.log("imagenes" + image);
   console.log("id" + idCard);

    const newDiv = document.createElement("div");
    newDiv.className= "memory-card";
    newDiv.onclick =  flipCard; //-----------------funciono------------

   //---- crea etiquetas img para imagenes front y back / se le asinga una clase -- 
    const frontFace = document.createElement("img");
    const backFace = document.createElement("img");
    frontFace.className = "front-face";
    backFace.className= "back-face";
   //---- Se le asigna src a cada img de front y back   
    const frontCard = document.createTextNode(frontFace.src= image);
    const backCard = document.createTextNode(backFace.src="data/RickyMorty/fondocards.png");
   //---- se inserta a cada nodo img su respectiva imagen -------  
    frontFace.appendChild(frontCard);
    backFace.appendChild(backCard);
   //---- se inserta a cada nodo div su respectiva img -------  
    newDiv.appendChild(frontFace);
    newDiv.appendChild(backFace);
   //---- se inserta al nodo Select los div ------- 
   let prueba = document.getElementById("memory-game");
   console.log("eprueba" , prueba);
    document.getElementById("memory-game").appendChild(newDiv);
    //console.log(frontFace);   
    //backCard.className = "front-face";
    
    console.log("elementrs items" + elementsItems);
    //para dar el click
  }
} 
  console.log("estoy dando clcik");

function flipCard(e){
  let cards= document.getElementsByClassName("memory-card");
  //cards.classList.remove("toggleCard");
  //cards.target.style = "flip";
  //e.target.style.background="red"; //------------funciona--------
  e.target.className= "memory-card";
  //e.target.className("memory-card.flip").style = "180deg";
  //e.target.style.flip="180deg";
  console.log(e.target.style);
  console.log(e.target);

  //return cards;
}
  /*let flipCard = function (e){
    console.log("evento" , e.target.style);
    let cards = document.getElementsByClassName("memory-card");
    //console.log("hola", cards.target.style);
    cards.classList.add("toggleCard");
    //e.target.style.classList.toggle('toggleCard');
   // e.target.style =  cards.className.add("toggleCard");
    //this.classList.toggle("open");
    //this.classList.toggle("show");
    //this.classList.toggle("disabled");
    //this.classList.add('flip');
    console.log("click");
    alert("hola");
  }

//para checkear las cartas que seleccionan<<<<<<<<<<<<<<<<<<
/*const checkCards = (e) => { 
  const clickedCard = e.target;
  console.log(clickedCard); }*/