const backcard = 'url("./img/background.png")';
//Variables que utiliza
var imgs = [];
let rows;
let columR0;
let ciclo = localStorage.ciclo;
let maxColR0;
let columR1;
let maxColR1;
let columR2;
let maxColR2;
let columR3;
let maxColR3;
let showScore;
var adre_anterior = "";
var adre_actual = "";
var ultim_click = "0";
var function_permission = true;
let maxScore;
var score = 0;
var levelnum;

function alertCiclos(ciclo) {

    switch (ciclo) {
        case 'comercio':
            imgs = ['url("./img/Comercio/img1.jpeg")',
                'url("./img/Comercio/img10.jpg")',
                'url("./img/Comercio/img2.jpg")',
                'url("./img/Comercio/img3.jpg")',
                'url("./img/Comercio/img4.png")',
                'url("./img/Comercio/img5.jpeg")',
                'url("./img/Comercio/img6.jpg")',
                'url("./img/Comercio/img7.jpg")',
                'url("./img/Comercio/img8.jpg")',
                'url("./img/Comercio/img9.png")',
                'url("./img/Comercio/img1.jpeg")',
                'url("./img/Comercio/img10.jpg")',
                'url("./img/Comercio/img2.jpg")',
                'url("./img/Comercio/img3.jpg")',
                'url("./img/Comercio/img4.png")',
                'url("./img/Comercio/img5.jpeg")',
                'url("./img/Comercio/img6.jpg")',
                'url("./img/Comercio/img7.jpg")',
                'url("./img/Comercio/img8.jpg")',
                'url("./img/Comercio/img9.png")'
            ];
            maxScore = 500 / 10;
            levelnum = 20;
            rows = 5;
            columR0 = 1;
            maxColR0 = 5;
            columR1 = 6;
            maxColR1 = 10;
            columR2 = 11;
            maxColR2 = 15;
            columR3 = 16;
            maxColR3 = 20;
            break;
        case 'turismo':
            imgs = ['url("./img/Hoteleria/img1.png")',
                'url("./img/Hoteleria/img2.png")',
                'url("./img/Hoteleria/img3.png")',
                'url("./img/Hoteleria/img1.png")',
                'url("./img/Hoteleria/img2.png")',
                'url("./img/Hoteleria/img3.png")',
            ];
            maxScore = 500 / 3;

            levelnum = 9;
            rows = 2;
            columR0 = 1;
            maxColR0 = 3;
            columR1 = 4;
            maxColR1 = 6;

            break;
        case 'comunicion':
            imgs = ['url("./img/Informatica/img1.png")',
                'url("./img/Informatica/img2.png")',
                'url("./img/Informatica/img3.png")',
                'url("./img/Informatica/img4.png")',
                'url("./img/Informatica/img5.png")',
                'url("./img/Informatica/img6.png")',
                'url("./img/Informatica/img7.png")',
                'url("./img/Informatica/img8.png")',
                'url("./img/Informatica/img1.png")',
                'url("./img/Informatica/img2.png")',
                'url("./img/Informatica/img3.png")',
                'url("./img/Informatica/img4.png")',
                'url("./img/Informatica/img5.png")',
                'url("./img/Informatica/img6.png")',
                'url("./img/Informatica/img7.png")',
                'url("./img/Informatica/img8.png")',

            ];
            maxScore = 500 / 8;

            levelnum = 16;
            rows = 4;
            columR0 = 1;
            maxColR0 = 4;
            columR1 = 5;
            maxColR1 = 8;
            columR2 = 9;
            maxColR2 = 12;
            columR3 = 13;
            maxColR3 = 16;
            break;
        case 'gestion':
            imgs = ['url("./img/Administracion/img1.png")',
                'url("./img/Administracion/img2.jpg")',
                'url("./img/Administracion/img3.jpg")',
                'url("./img/Administracion/img4.jpg")',
                'url("./img/Administracion/img5.jpg")',
                'url("./img/Administracion/img6.jpg")',
                'url("./img/Administracion/img7.png")',
                'url("./img/Administracion/img8.jpg")',
                'url("./img/Administracion/img9.jpg")',
                'url("./img/Administracion/img1.png")',
                'url("./img/Administracion/img2.jpg")',
                'url("./img/Administracion/img3.jpg")',
                'url("./img/Administracion/img4.jpg")',
                'url("./img/Administracion/img5.jpg")',
                'url("./img/Administracion/img6.jpg")',
                'url("./img/Administracion/img7.png")',
                'url("./img/Administracion/img8.jpg")',
                'url("./img/Administracion/img9.jpg")',

            ];
            maxScore = 500 / 9;

            levelnum = 18;
            rows = 4;
            columR0 = 1;
            maxColR0 = 5;
            columR1 = 6;
            maxColR1 = 10;
            columR2 = 11;
            maxColR2 = 15;
            columR3 = 16;
            maxColR3 = 18;
            break;
        default:
            alert("Ningun ciclo seleccionado");
            break;
    }
}

const second = document.querySelector('.card');

function canviar_imatge(adre) {
    if ((adre_anterior = "" || adre_actual.id != adre.id) && ultim_click != 2) {
        // solo vay cambiar imagenes si estan todavia sin borde 
        if (adre.style.border == "") {

            adre_anterior = adre_actual;
            adre_actual = adre;

            if (adre.style.backgroundImage == backcard) {

                adre.style.backgroundImage = imatge_element(adre);
            } else {
                adre.style.backgroundImage = backcard;
            }
            ultim_click++;
            if (ultim_click == "2") {

                if (adre_actual.style.backgroundImage == adre_anterior.style.backgroundImage &&
                    adre_actual.style.backgroundImage != backcard &&
                    adre_actual.id != adre_anterior.id
                ) {
                    adre_actual.style.border = "thick solid #00FF00	";
                    adre_anterior.style.border = "thick solid #00FF00	";
                    score += maxScore;
                    showScore = score.toFixed();
                    document.getElementById('score').innerHTML = "Score: " + showScore;

                } else {

                    setTimeout(function() {

                        adre_anterior.style.backgroundImage = backcard;
                        adre_actual.style.backgroundImage = backcard;
                    }, 1000);


                }
                ultim_click = "0";

            }
        }
    }
}


function canviar_1s(adre) {
    if (adre.style.border == "") {
        if (adre.style.backgroundImage == backcard) {
            adre.style.backgroundImage = imatge_element(adre);
        }
        setTimeout(function() {
            adre.style.backgroundImage = backcard;
        }, 200);
    }
}


function imatge_element(adre) {
    adre_actual.style.backgroundImage = imgs[adre.id.substring(1, 3) - 1];
}

// Fisher-Yates Shuffle
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//Funcio que crea les rows i les divs
function carregaDivs(dif) {
    let wrapper = document.getElementById("wrapper");
    //Creem les 4 rows
    for (var i = 0; i < rows; i++) {
        wrapper.innerHTML += '<div class=row row-cols-2 row-cols-md-5 justify-content-center align-items-center id=r' + i + '>' + '</div>'

    }
    //Creem de la div 1 fins la 5 en la row amb l'r0
    let r0 = document.getElementById("r0");
    for (var j = columR0; j <= maxColR0; j++) {
        r0.innerHTML += '<div class="col"> <div class="card" id="d' + j + '"' +
            'onclick="canviar_imatge(this)" ' +
            'ondblclick="canviar_1s(this)">' +
            '</div> </div>';
    }
    //Creem de la div 6 fins la 10 en la row amb l'r1

    let r1 = document.getElementById("r1");
    for (var k = columR1; k <= maxColR1; k++) {
        r1.innerHTML += '<div class="col"> <div class="card" id="d' + k + '"' +
            'onclick="canviar_imatge(this)" ' +
            'ondblclick="canviar_1s(this)">' +
            '</div> </div>';
    }
    //Creem de la div 11 fins la 15 en la row amb l'r2

    let r2 = document.getElementById("r2");
    for (var j = columR2; j <= maxColR2; j++) {
        r2.innerHTML += '<div class="col"> <div class="card" id="d' + j + '"' +
            'onclick="canviar_imatge(this)" ' +
            'ondblclick="canviar_1s(this)">' +
            '</div> </div>';
    }
    //Creem de la div 16 fins la 20 en la row amb l'r3

    let r3 = document.getElementById("r3");
    for (var j = columR3; j <= maxColR3; j++) {
        r3.innerHTML += '<div class="col"> <div class="card" id="d' + j + '"' +
            'onclick="canviar_imatge(this)" ' +
            'ondblclick="canviar_1s(this)">' +
            '</div> </div>';
    }
}


function Ini() {
    alertCiclos(ciclo);
    imgs = shuffle(imgs);
    var i = 1;
    carregaDivs();
    //Posem la backard a totes les divs
    while (i < levelnum + 1) {
        nom = 'd' + i;
        document.getElementById(nom).style.backgroundImage = backcard;
        i++;
        //document.getElementById('d'+j);
    }
    startTimer(60 * 2);
    setInterval(showModal, 1000);
    moveElement();

}



var timeoutHandle;
let timeInSeconds = 0;

function startTimer(duration) {
    var timer = duration,
        minutes, seconds;
    var gameTimer = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        //Si minutes es menor a 10, llavors minutes es 0 minutes, en cas contrari es minutes
        minutes = minutes < 10 ? "0" + minutes : minutes;
        //Si seconds es menor a 10, llavors seconds es 0 seconds, en cas contrari es seconds

        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('compteEnrere').innerHTML = minutes + ":" + seconds;
        // Si el timer es menor a 0, l'igualem a 0
        if (--timer < 0) {
            timer = 0;
            //En cas de que score sigui 500 o timeInSeconds sigui 120(2 minuts)
        } else if (score == 500 || timeInSeconds == 120) {
            //Mostrem el modal
            showModal();
            //Parem el timer
            clearInterval(gameTimer);
        }
        timeInSeconds++;
    }, 1000);


}


function showModal() {
    if (score == 500 || timeInSeconds == 120) {
        $('#staticBackdrop').modal('show');
        document.getElementById("mostrarResultados").innerHTML = "Puntuacio : " + score + " punts " + '<br>' + "Temps : " + timeInSeconds + " segons";
        if (score == 500) {
            staticBackdropLabel.innerHTML = 'HAS GUANYAT!'
        } else {
            staticBackdropLabel.innerHTML = 'HAS PERDUT!'
        }
    }
}


async function moveElement() {


    let div;
    let final = false;
    let x;
    let y;
    let puntoXbck;
    let puntoYbck;
    let i = 1;


    do {
        div = document.getElementById('d' + i);

        div.style.top = `${Math.random()  * (75 - 20)+20}%`;
        div.style.left = `${Math.random() * (90 - 20)+20}%`;
        x = parseFloat(div.style.top);
        y = parseFloat(div.style.left);
        if (x >= puntoYbck || y >= puntoXbck) {
            x += 1;
            div.style.top = x + "%";
            div.style.left = y + "%";

        } else {
            x += 1;
            div.style.top -= x + "%";
            div.style.left -= y + "%";

        }
        puntoYbck = x + "%";
        puntoXbck = y + "%";
        await sleep(400);
        if (i == imgs.length) {
            i = 1;
        } else {
            i++;
        }

    } while (!final);



}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}