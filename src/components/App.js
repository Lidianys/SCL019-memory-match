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
    idCard = elementsItems[i].id;
   //---- crea una etiqueta div y se le asigna una class-------------------
   console.log("imagenes" + image);
   console.log("id" + idCard);

    const newDiv = document.createElement("div");
    newDiv.className= "memory-card";
    //newDiv.id= "memory-card";
   //---- crea etiquetas img para imagenes front y back / se le asinga una clase -- 
    const frontFace = document.createElement("img");
    const backFace = document.createElement("img");
    frontFace.className = "front-face";
    backFace.className= "back-face";
    //backFace.setAttribute= "buttom";
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
    document.getElementById("memory-game").appendChild(newDiv);
    //console.log(frontFace);   
    //backCard.className = "front-face";
    //elementsItems.forEach(card => card,addEventListener("click",flipCard())); //flipCard es una función
    //elementsItems.addEventListener("click", function(){ alert("Hello World!"); });
    console.log("elementrs items" + elementsItems);
    /*document.getElementsByClassName("memory-card").onclick = function(){
      alert("hola");
      console.log("hola");*/
    }
     //intendto de pasar el eventlistener
    /*elementsItems.addEventListener("click", (e) => {
      console.log("hola, estoy comprobando addevent" + e);
        //Run our flip animation
      elementsItems.classList.toggle("toggleCard");
      checkCards(e);
      /*image.classList.toggle("toggleCard");
      
    } );*/

} 
  console.log("estoy dando clcik");
/*function clickear(){
  var el = document.getElementById("memory-card");
  el.addEventListener("click", function(){alert("estas dando click");});
  checkCards();
}
//para checkear las cartas que seleccionan<<<<<<<<<<<<<<<<<<
const checkCards = (e) => { 
  const clickedCard = e.target;
  console.log(clickedCard); }*/
/*let cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
/*function flipCard(){
  console.log("Entrando a flip" + cards);
  //document.getElementsByClassName("memory-game").onclick= alert("hola");
  alert("hola");
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  console.log("estoy dando clcik" + cards);
  if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
     console.log("Estoy entrando a flip parte 1")
      return;//cards.addEventListener('click', flipCard);
  }
  console.log("Funcion de flip");
  secondCard = this;
  console.log("Estoy entrando a flip parte 2")

 //cards.addEventListener('click', flipCard);
  //checkForMatch(); 
}
//backCard.addEventListener("click",flipCard);
/*window.onload=function prueba(){
  let cards = document.querySelectorAll('.memory-card');
  console.log("estoy entrando a prueba");
  cards.addEventListener("click",function(cards){
   cards.target.classlist.toggle("front-card");
  })
  //document.getElementById("memory-card").addEventListener(click, alert("click"));
 //cards.addEventListener("click", flipCard());
}*/
