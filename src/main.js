
import App from './components/App.js';

//Se llama la función crea el tablero y las cartas
document.addEventListener("click",App());

const cards= document.querySelectorAll("memory-card");


cards.forEach(cards => cards,addEventListener("click",flipCard())); //flipCard es una función