const btnVocales = document.getElementById('btn-vocales');
btnVocales.addEventListener('click', () => {
  cards.forEach(card => {
    if (card.dataset.tipo === 'vocal') {
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none';
    }
  });
});