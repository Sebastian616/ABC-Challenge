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