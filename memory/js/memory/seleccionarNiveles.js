let ciclo;

function getId1() {
    ciclo = document.getElementById('mybutton').value;
    showCiclo(ciclo);
    localStorage.ciclo = ciclo;


}

function getId2() {
    ciclo = document.getElementById('mybutton2').value;
    showCiclo(ciclo);
    localStorage.ciclo = ciclo;


}

function getId3() {
    ciclo = document.getElementById('mybutton3').value;
    showCiclo(ciclo);
    localStorage.ciclo = ciclo;



}

function getId4() {
    ciclo = document.getElementById('mybutton4').value;
    showCiclo(ciclo);
    localStorage.ciclo = ciclo;



}

function showCiclo(ciclo) {
    switch (ciclo) {
        case 'comercio':
        case 'turismo':
        case 'comunicion':
        case 'gestion':
            document.getElementById('niveles').innerHTML =
            '<a href="./nivelFacil.php"><button type="button" class="btn btn-success">Modo Fácil</button></a>' + ' ' +
            '<a href="./nivelDificil.php"><button type="button" class="btn btn-danger">Modo Difícil</button></a>';
            break;
        default:     
            alert('Ningun ciclo seleccionado');

    }
}