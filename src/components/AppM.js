import Morty from '../data/Morty/Morty.js';
let elementsItems= Morty.items;
const board = document.querySelector(".board");
const puntuacion = document.querySelector(".puntuacion");
const movimientos = document.querySelector(".movimientos");
let points = 0;
let moves = 0;
// Función shuffle
const randomize = () =>{
  elementsItems.sort (()=> Math.random()-0.5);
  return elementsItems;
};
/**********FUNCION APPM****************/
function App (){
  const dataCard = randomize();
  for(let i = 0; i < dataCard.length; i ++){
    const card = document.createElement("div"); //creamos la tarjeta
    const front = document.createElement("img");
    const back = document.createElement("div");
    card.className = "card";
    front.className = "front";
    back.className ="back";
    //adjuntamos un id a la 
    card.setAttribute("name", elementsItems[i].id)
    //adjuntamos la imagen a la tarjeta
    front.src=dataCard[i].image;
    //adjuntamos las cartas al board 
    board.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
       //Se le asigna el evento a Card
   card.addEventListener("click",(e)=>{
      card.classList.toggle("toggleCard"); 
      moves++;
      movimientos.textContent = moves; 
      checkCards(e);
    });
  }
}
//Función de validación de tarjetas
function checkCards (e){
  const clickCard= e.target;
  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
 //Verifica que 2 cartas esten volteadas
 if(flippedCards.length === 2){
   if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
    flippedCards.forEach((card) => {
     card.classList.remove("flipped");
     card.style.pointerEvents= "none";
     points++;
     puntuacion.textContent = points/2;
    });
   }
   else {
     flippedCards.forEach(card =>{
       card.classList.remove("flipped");
       setTimeout(() =>
         card.classList.remove("toggleCard"),1000);
     });
   }
      //Verifica si todas las cartas fueros volteadas
      //Ventana Modal que indica que eres ganador
   if(toggleCard.length === 12){
     const button = document.querySelector("button"); 
      const popup = document.querySelector(".popup-wrapper");
      popup.style.display ="block";
      button.addEventListener("click",()=> {
        popup.style.display = "none";
        restart();
      });
    }
 }
   // Esta función es la responsable de reiniciar
   const restart = () =>{
    let cardData = randomize();
    let front = document.querySelectorAll(".front");
    let card = document.querySelectorAll(".card");
    points=0;
    moves=0;
     puntuacion.textContent = points;
      movimientos.textContent = moves;
    cardData.forEach((item, index) => {
      card[index].classList.remove("toggleCard");
      card[index].style.pointerEvents= "all";
      front[index].src=item.image;
      card[index].setAttribute ("name",item.id);
      
    });
  }
}
export default App;
