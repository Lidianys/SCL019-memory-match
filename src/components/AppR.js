
import Rick from '../data/Rick/Rick.js';
let points = 0;
let elementsItems= Rick.items;
const puntuacion = document.querySelector(".puntuacion");
const movimientos = document.querySelector(".movimientos");

let moves = 0;
 // Function to shuffle the array content
    function shuffle(elementsItems) {
      for (let i = elementsItems.length - 1; i > 0; i--) {
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
        const temp = elementsItems[i];
        elementsItems[i] = elementsItems[j];
        elementsItems[j] = temp;
          }

          return elementsItems;
      }

      
/**********FUNCION APP****************/  
   const AppR = () =>{
     shuffle(elementsItems);  
      const board = document.createElement("div");
      board.className = "board";
      
      for(let i=0;i< elementsItems.length ;i++){
        const card = document.createElement("div"); //creamos la tarjeta
        const front = document.createElement("img");
        const back = document.createElement("div");
         card.className = "card";
         front.className = "front";
         back.className ="back";
        card.appendChild(front);
        card.appendChild(back);
        card.setAttribute("id", elementsItems[i].id);
        //adjuntamos la imagen a la tarjeta
        front.src=elementsItems[i].image;
       
        card.addEventListener("click",(e)=>{
          card.classList.toggle("toggleCard"); 
           moves++;
           movimientos.textContent = moves; 
        checkCards(e);
         });
        board.appendChild(card); 
      }
      return board;
    }

const checkCards = (e)=>{ 
  const clickCard= e.target;
  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

 
 //logic
 if(flippedCards.length === 2){
   if(flippedCards[0].getAttribute("id") === flippedCards[1].getAttribute("id")){
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
   if(toggleCard.length === 12){
     popUp();
    }
 }
}

const popUp = () => {
  const button = document.querySelector("button"); 
  const popup = document.querySelector(".popup-wrapper");

  popup.style.display ="block";
  button.addEventListener("click",()=> {
   
    popup.style.display = "none";
    restart();
  });  
}


   /*Se reinicia todo!*/
  const restart = () =>{
    shuffle(elementsItems);  
    let front = document.querySelectorAll(".front");
    let card = document.querySelectorAll(".card");
    points=0;
    moves=0;
     puntuacion.textContent = points;
      movimientos.textContent = moves;
      elementsItems.forEach((item, index) => {
      card[index].classList.remove("toggleCard");
      card[index].style.pointerEvents= "all";
      front[index].src=item.image;
      card[index].setAttribute ("id",item.id);
    });
}
export default AppR;
