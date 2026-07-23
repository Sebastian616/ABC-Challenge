//Botones filtros
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

const btnTodas = document.getElementById('btn-todas');
btnTodas.addEventListener('click', () => {
    cards.forEach(card => {
        card.style.display = 'block'       
    })
})

//creamos la constante y entramos al div por id
const cards = document.querySelectorAll(".card");
// el foreach accede a todas las card y dice que cuando haya un click en card vaya a la lista y ejecute girar
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("girar");
    });
});
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
