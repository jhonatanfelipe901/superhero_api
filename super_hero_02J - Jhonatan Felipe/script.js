
/*
const token = "10207244891555840";
const urlBase = "https://superheroapi.com/api.php/" + token;
var j1 = "";
var j2 = "";
var p1 = 0;
var p2 = 0;

window.onload = function(){
    console.log("card");
    function myTimer() {
        document.body.innerHTML = "";
        for (var i = 0; i < 1; i++){
            var number = getRandomInt(1, 200)
            getJSON(urlBase + "/" + number, showCard, i + 1);
        }
    }
    setInterval(myTimer, 7000);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function showCard(data, perso){
    var img = data.image.url;

    var card = "<article>";
    card += "<img src='" + img + "'/>";
    card += "<h1>" + data.name + "</h1>";
    
    
    card += "<div>Intelligence:<br>";
    card += "<div class='intelligence' style='width:"+data.powerstats.intelligence+"%'></div>";
    card += "</div>";
    
    card += "<div>Strength:<br>";
    card += "<div class='strength' style='width:"+data.powerstats.strength+"%'></div>";
    card += "</div>";
    
    card += "<div>Speed:<br>";
    card += "<div class='speed' style='width:"+data.powerstats.speed+"%'></div>";
    card += "</div>";
    
    card += "<div>Durability:<br>";
    card += "<div class='duralibity' style='width:"+data.powerstats.durability+"%'></div>";
    card += "</div>";
    
    card += "<div>Power:<br>";
    card += "<div class='power' style='width:"+data.powerstats.power+"%'></div>";
    card += "</div>";
    
    card += "<div>Combat:<br>";
    card += "<div class='combat' style='width:"+data.powerstats.combat+"%'></div>";
    card += "</div>";

    card += "</article>";
    card += "</div>";

    console.log(card);

    document.getElementById("leftbox").innerHTML += card;

    if(perso == 1){
        j1 = data.name;
        p1 = parseInt(data.powerstats.power + data.powerstats.power + data.powerstats.durability + data.powerstats.speed+ data.powerstats.strength + data.powerstats.intelligence);
    }
    else{
        j2 = data.name;
        p2 = parseInt(data.powerstats.power + data.powerstats.power + data.powerstats.durability + data.powerstats.speed+ data.powerstats.strength + data.powerstats.intelligence);
        ganhador = p1 > p2 ? j1 : j2;
        console.log(ganhador)
        //document.body.innerHTML += "<p>O ganhador é: " + ganhador + "</p>";
    }
}


function getJSON(url, callback, perso){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function(){
        if (xhr.status === 200){
            console.log("Dados recebidos com sucesso!");
            callback(xhr.response, perso);
        } else {
            console.warn("Problemas ao conectar com a API: " + xhr.status);
        }
    }
    xhr.send();
}

function eu(){
}
*/
