
import App from './components/App.js';


const tablero = document.querySelector(".tablero");

//Se llama la función crea el tablero y las cartas
document.addEventListener("click",App());
 
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
//const cards= document.querySelectorAll(".memory-card");

function flipCard(){
    console.log("Entrando a flip");
}
cards.forEach(cards => cards.addEventListener("click",flipCard())); //flipCard es una función



//import flipCard from './components/App.js';
//elementsItems.addEventListener("click", function(){ alert("Hello World!"); });
