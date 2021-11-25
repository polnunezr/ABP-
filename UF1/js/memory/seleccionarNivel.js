let ciclo = localStorage.ciclo;

switch (ciclo) {
    case 'comercio':
        document.getElementById('niveles').innerHTML =
            '<a href="./nivelFacilComercio.html"><button type="button" class="btn btn-primary btn-sm">Modo Fácil comercio</button></a>' +
            '<button type="button" class="btn btn-primary btn-sm">Modo Difícil comercio</button>';
        break;
    case 'turismo':
        document.getElementById('niveles').innerHTML =
            '<a href="./nivelFacil.html"><button type="button" class="btn btn-primary btn-sm">Modo Fácil turismo</button></a>' +
            '<button type="button" class="btn btn-primary btn-sm">Modo Difícil turismo</button>';
        break;
    case 'comunicion':
        document.getElementById('niveles').innerHTML =
            '<a href="./nivelFacil.html"><button type="button" class="btn btn-primary btn-sm">Modo Fácil comunicacion</button></a>' +
            '<button type="button" class="btn btn-primary btn-sm">Modo Difícil comunicacion</button>';
        break;
    case 'gestion':
        document.getElementById('niveles').innerHTML =
            '<a href="./nivelFacil.html"><button type="button" class="btn btn-primary btn-sm">Modo Fácil gestion</button></a>' +
            '<button type="button" class="btn btn-primary btn-sm">Modo Difícil gestion</button>';
        break;
    default:
        alert('Ningun ciclo seleccionado');

}