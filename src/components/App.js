
import RickyMorty from '../data/RickyMorty/RickyMorty.js';
export default App;

//*******desordenamos la data ************/
const board = document.querySelector(".board");
const randomize = () =>{
  let elementsItems= RickyMorty.items;
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
    //adjuntamos un id a la 
    front.id=dataCard[i].id;
    //adjuntamos la imagen a la tarjeta
    front.src=dataCard[i].image;
    //adjuntamos las cartas a la section 
    board.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click",(e)=>{
      //let contadorClick = 0; 
      card.classList.toggle("toggleCard"); 
      /*if (contadorClick <= 2){ *** prueba de contador de click
        contadorClick = contadorClick + 1; 
        console.log("Hola Dani contadorClick", contadorClick);
      }*/
      
      checkCards(e);
    });
  }; 
};

function checkCards (e){
  const clickCard= e.target;
  console.log(clickCard);
};