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
            alert("Marketing y Comercio");
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
            alert("Hotelería y Turismo");
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
        case 'comunicacion':
            alert("Informática y Comunicación");
            break;
        case 'gestion':
            alert("Administración y Gestión");
        default:
            alert("Ningun ciclo seleccionado");
            break;
    }
}
let element;
let element2;
function canviar_imatge(adre) {
    if ((adre_anterior = "" || adre_actual.id != adre.id) && ultim_click != 2) {
        // solo vay cambiar imagenes si estan todavia sin parells  ( sin borda )
        if (adre.style.border == "") {
            adre_anterior = adre_actual;
            adre_actual = adre;
            if (adre.style.backgroundImage == backcard) {           
                adre.style.backgroundImage = imatge_element(adre);
            } else {
                adre.style.backgroundImage = backcard;
            }
            ultim_click++;
    
            element.style.add("flip-card-back");
            element2.style.add("flip-card-back");
            if (ultim_click == "2") {
        
                if (adre_actual.style.backgroundImage == adre_anterior.style.backgroundImage &&
                    adre_actual.style.backgroundImage != backcard &&
                    adre_actual.id != adre_anterior.id && score != 500
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
                    }, 400);
                    element.style.add("card");
                    element2.style.add("card");

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
    if (ciclo === 'comercio') {
        let r3 = document.getElementById("r3");
        for (var j = columR3; j <= maxColR3; j++) {
            r3.innerHTML += '<div class="col"> <div class="card" id="d' + j + '"' +
                'onclick="canviar_imatge(this)" ' +
                'ondblclick="canviar_1s(this)">' +
                '</div> </div>';
        }
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
    countdown(2, 00);
}


var timeoutHandle;

function countdown(minutes, seconds) {
    function tick() {
        var counter = document.getElementById("compteEnrere");
        counter.innerHTML = 'Temps: ' +
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function() {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
    }
    tick();
}