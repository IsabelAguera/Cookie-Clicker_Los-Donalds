var score = 0; // score
var n = 1;// valeur d'un clique
var btn = document.getElementById("clic");
var aff = document.getElementById("affichage");
//mehmet
var multiplicateur = 1 //compteur de l'achat
var prix1 = 50 //prix de mehmet
var fois //compteur du prochain prix
///hamza
var multiplicateur2 = 1 //compteur de l'achat
var prix2 = 250 //prix de Hamza
var fois2 //compteur du prochain prix
var n2 = 1 //valeur de l'autoclique
//achraf
var multiplicateur3 = 1 //compteur de l'achat
var prix3 = 500 // compteur de prix
var fois3
let timeElm = document.getElementById('time');

//function de clique
function counter() {
score += n
document.getElementById("affichage").innerHTML = score;
document.getElementById('clic').style.animation = 'click 0.1s linear'
setTimeout(() => {
document.getElementById('clic').style.animation = ''
}, 100)
}
//Fin clique

//function Bonus:
if (score >= prix1){document.getElementById('multiplier').style.transition = "all 0.5s ease";}
if (score > prix2){document.getElementById('tete').classList.add('tete2'); console.log(5)}
if (score > prix3){document.getElementById('tete').disabled}
//nombre de clique (mehmet)
function augmenterMultiplicateur() {
if (score >= prix1) { //si le score est superieur au pri
score = score - prix1 //soustraire le prix au score
document.getElementById("affichage").innerHTML = score //affiche nv score
multiplicateur++ //nbre d'achat deja fait du bonus
document.getElementById("counter1").innerHTML = "x" + multiplicateur; //afficher multiplicateur
prix1 = parseInt(prix1 * 1.5) // calculer le nvx prix
fois = multiplicateur + 1// calcul du prochain prix
document.getElementById("prix1").innerHTML = "x" + fois + " = " + prix1; //affichage prochain prix
n = multiplicateur; //modification du clique
} else {

}
}
//fin mehmet
//autoclick Hamza

function count2() {

if (score >= prix2) { //si le score est superieur au prix
    score = score - prix2  //soustraire le prix au score  
    document.getElementById("affichage").innerHTML = score //affiche nv score
    multiplicateur2++ //nbre d'achat deja fait du bonus
    document.getElementById("counter2").innerHTML = multiplicateur2;//afficher multiplicateur
    prix2 = parseInt(prix2 * 1.75) // calculer le nvx prix
    fois2 = multiplicateur2 + 1 //  calcul du prochain prix
    document.getElementById("prix2").innerHTML = "x" + fois2 + " = " + prix2; //affichage prochain prix
    multiplicateur2 * autoclick() //appelle la fonction autoclick

} else { //sinon rien 

}
}

function counterHamza() { //fonction de compteur pour l'autoclick
score += n2 //le clique de l'autoclick
document.getElementById("affichage").innerHTML = score; //afficher score + autoclick
}

function autoclick() { //fonctions de l'autoclick
setInterval(function () {
counterHamza(); // appelle la fonctions counter Hamza
}, 1000); //intervalle 1seconde

}
//fin Hamza
// malus Achraf

function count3() {
if (score >= prix3) { //si le score est superieur au prix
score = score - prix3 //soustraire le prix au score
document.getElementById("affichage").innerHTML = score //affiche nv score
multiplicateur3++ //nbre d'achat deja fait du bonus
document.getElementById("counter3").innerHTML = multiplicateur3;//afficher multiplicateur
prix3 = parseInt(prix3 * 2) // calculer le nvx prix
fois3 = multiplicateur3 + 1 // calcul du prochain prix
document.getElementById("malus").innerHTML = "x" + fois3 + " = " + prix3; //affichage prochain prix
pourcent() //appelle la fonction autoclick

} else { //sinon rien 

}
}

function pourcent() {
var t = setTimeout(function () {
n = n * 2;
}, 500);
setTimeout(function () {
clearTimeout(t), n=n/2
}, 30000)

}

function timer(){
    document.getElementById("bigTime").style.visibility="visible";
var chrono = 30;
var downloadTimer = setInterval(function(){
chrono--;
document.getElementById("time").textContent= chrono;
if(chrono<=0){
clearInterval(downloadTimer);
document.getElementById("bigTime").style.visibility="hidden";
}
}, 1000)
}
//Fin Achraf

//Fin compteur de clique
//tamer

// grey bouton

//canvas

function draw() {
var canvas = document.getElementById("clic");
var ctx = canvas.getContext("2d");

// GRAND CERCLE
ctx.strokeStyle = "orange"
ctx.beginPath();
ctx.arc(150, 150, 150, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "orange"
ctx.fill()

//CREME SUR DOUGHNUT
ctx.strokeStyle = "pink"
ctx.beginPath();
ctx.arc(150, 150, 140, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "pink"
ctx.fill()

//MIDLE CERCLE
ctx.strokeStyle = "orange"
ctx.beginPath();
ctx.arc(150, 150, 55, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "orange"
ctx.fill()

//PETIT CERCLE
ctx.strokeStyle = "#89cad2"
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#89cad2"
ctx.fill()

//Sucres
//1
ctx.strokeStyle = "white"
ctx.beginPath();
ctx.arc(150, 75, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "white"
ctx.fill()
//2
ctx.strokeStyle = "orange"
ctx.beginPath();
ctx.arc(150, 35, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "orange"
ctx.fill()
//3
ctx.strokeStyle = "blue"
ctx.beginPath();
ctx.arc(225, 150, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue"
ctx.fill()
//4
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(265, 150, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red"
ctx.fill()
//5
ctx.strokeStyle = "gold"
ctx.beginPath();
ctx.arc(75, 150, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "gold"
ctx.fill()
//6
ctx.strokeStyle = "orange"
ctx.beginPath();
ctx.arc(35, 150, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "orange"
ctx.fill()
//7
ctx.strokeStyle = "lightblue"
ctx.beginPath();
ctx.arc(150, 225, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "lightblue"
ctx.fill()
//8
ctx.strokeStyle = "violet"
ctx.beginPath();
ctx.arc(150, 265, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "violet"
ctx.fill()
//9
ctx.strokeStyle = "violet"
ctx.beginPath();
ctx.arc(225, 60, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "violet"
ctx.fill()
//10
ctx.strokeStyle = "green"
ctx.beginPath();
ctx.arc(195, 95, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "green"
ctx.fill()
//11
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(75, 65, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red"
ctx.fill()
//12
ctx.strokeStyle = "green"
ctx.beginPath();
ctx.arc(105, 95, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "green"
ctx.fill()
//13
ctx.strokeStyle = "purple"
ctx.beginPath();
ctx.arc(105, 205, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "purple"
ctx.fill()
//14
ctx.strokeStyle = "yellow"
ctx.beginPath();
ctx.arc(75, 240, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow"
ctx.fill()
//15
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(185, 205, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red"
ctx.fill()
//16
ctx.strokeStyle = "blue"
ctx.beginPath();
ctx.arc(225, 240, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue"
ctx.fill()

}