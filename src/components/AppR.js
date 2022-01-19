
import Rick from '../data/Rick/Rick.js';
export default AppR;
let elementsItems= Rick.items;
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
function AppR (){
  const dataCard = randomize();
  for(let i = 0; i < dataCard.length; i ++){
    const card = document.createElement("div"); //creamos la tarjeta
    const front = document.createElement("img");
    const back = document.createElement("div");
    card.className = "card";
    front.className = "front";
    back.className ="back";
    

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
<<<<<<< HEAD:src/components/AppR.js
      
      movimientos.textContent = moves; 

      
=======
      console.log("moves" + moves);
      movimientos.textContent = moves;       
>>>>>>> 78ca172f2dbb3b47ae48cdf9d911c6e5ccb3de4b:src/components/App.js
      checkCards(e);
    });
  }
}

function checkCards (e){
  
  const clickCard= e.target;

  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

 
 //logic
 if(flippedCards.length === 2){
  
   if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
    flippedCards.forEach((card) => {
     card.classList.remove("flipped");
     card.style.pointerEvents= "none";
     points++;
     
     puntuacion.textContent = points/2;
     //aqui va el pop up de ganador
     
    });
   }
   else {
     
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
    //alert("ganastes");
      const popup = document.querySelector(".popup-wrapper");
      const close = document.querySelector(".popup-close");
      const reset = document.querySelector(".reset");
      //const section = document.querySelector(".board");
       popup.style.display ="block";
       close.addEventListener("click",()=>{
         popup.style.display = "none";
       } );
       reset.addEventListener("click", ()=>{
        
         
       });
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
}*/