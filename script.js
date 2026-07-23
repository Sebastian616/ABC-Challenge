const btnVocales = document.getElementById('btn-vocales');
btnVocales.addEventListener('click', () => {
    cards.forEach(card => {
        if (card.dataset.tipo === 'vocal') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
})
//creamos la constante y entramos al div por id
const card = document.getElementById("card");

//accedemos a card y decimos que cuando se de clic entra a card, luego a la propiedad classlist y por ultimo activa toggle que provoca el giro al entrar al css
card.addEventListener("click", () => {
    card.classList.toggle("girar");
})

<<<<<<< HEAD
=======
console.log("hola mundo")

>>>>>>> origin/main


const boton = document.getElementById("botonTodas");

boton.addEventListener("click", function () {
    alert("¡Hola! Presionaste el botón.");
});
let letrasVistas = 0;

function voltear(card) {
  card.classList.toggle('volteada');

  // Solo sumamos si la card se est volteando por primera vez
  if (card.classList.contains('volteada') && !card.dataset.vista) {
    letrasVistas++;
    card.dataset.vista = 'true'; // marcamos esta card como ya vista
    document.getElementById('contador-letras').textContent = letrasVistas;
  }
}
