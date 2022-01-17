
import RickyMorty from '../data/RickyMorty/RickyMorty.js';
export default App;
let elementsItems= RickyMorty.items;
//*******desordenamos la data ************/
const board = document.querySelector(".board");
const puntuacion = document.querySelector(".puntuacion");
const movimientos = document.querySelector(".movimientos");
let points = 0;
let moves = 0;
//link text
const randomize = () =>{
  elementsItems.sort (()=> Math.random()-0.5);
  return elementsItems;
};

/**********FUNCION APP****************/
function App (){
  const dataCard = randomize();
  for(let i = 0; i < dataCard.length; i ++){
    const card = document.createElement("div"); //creamos la tarjeta
    const front = document.createElement("img");
    const back = document.createElement("div");
    card.className = "card";
    front.className = "front";
    back.className ="back";
    console.log("datacard id", dataCard.id);

    //adjuntamos un id a la 
    //front.id=dataCard[i].id;
    card.setAttribute("name", elementsItems[i].id)
    //adjuntamos la imagen a la tarjeta
    front.src=dataCard[i].image;
    //adjuntamos las cartas a la section 
    board.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

   card.addEventListener("click",(e)=>{
      
      card.classList.toggle("toggleCard"); 
      moves++;
      console.log("moves" + moves);
      movimientos.textContent = moves; 

      
      checkCards(e);
    });
  }
}

function checkCards (e){
  console.log(e);
  const clickCard= e.target;
};
  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  console.log("estoy dando click" + clickCard);
 
 //logic
 if(flippedCards.length === 2){
   console.log("flippedcard lenght ", flippedCards.length);
   if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
    flippedCards.forEach((card) => {
     card.classList.remove("flipped");
     card.style.pointerEvents= "none";
     points++;
     console.log("puntos +" + points/2);
     puntuacion.textContent = points/2;
     //aqui va el pop up de ganador
     
    });
   }
   else {
     console.log("wrong");
     flippedCards.forEach(card =>{
       card.classList.remove("flipped");
       setTimeout(() =>
         card.classList.remove("toggleCard"),1000);
         if(flippedCards.length === 0)  {
           alert("perdistes"); //aqui se llama a la funcion restaurar
         } 
     });
   }
   if(toggleCard.length === 12){
    alert("ganastes");
   }

 }
 
}
//restart
/*const restart = () =>{
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  Selection.style.pointerEvents= "none";
  cardData.forEach(item, index) => {
    cards[index].classList.remove("toggleCard");
    //randomize
    setTimeout(() => {
      
    });
  }
} */

