//creamos la constante y entramos al div por id
const card = document.getElementById("card");

//accedemos a card y decimos que cuando se de clic entra a card, luego a la propiedad classlist y por ultimo activa toggle que provoca el giro al entrar al css
card.addEventListener("click", () => {
    card.classList.toggle("girar");
});