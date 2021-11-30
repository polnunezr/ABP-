const cartas = document.querySelectorAll('.cardMemory');
console.log('hola')

function flipCarta() {
    this.classlist.toggle('flip');
    console.log(this);
}

cartas.forEach(carta => carta.addEventListener("click", flipCarta));