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

    var score = 0;
    var btn = document.getElementById("clic");
    var aff = document.getElementById("affichage");
    var x = 0 //mehmet
    var prix1 = 70
    var y = 0 //hamza
    var prix2 = 250
    var z = 0 //ashraf
    var prix3 = 500
    
    function counter() {
    score += 1
    document.getElementById("affichage").innerHTML = score;
    }
    
    function changePrix2() {
    }
    
    //function compteur de clique
    function count1() {
    x++
    document.getElementById("counter1").innerHTML = x;
    prix1 = parseInt(prix1 * 1.25)
    document.getElementById("prix1").innerHTML = prix1;
    }
    
    function count2() {
    
    y++
    document.getElementById("counter2").innerHTML = y;
    prix2 = parseInt(prix2 * 1.52)
    document.getElementById("prix2").innerHTML = prix2;
    }
    
    function count3() {
    z++
    document.getElementById("counter3").innerHTML = z;
    prix3 = parseInt(prix3 * 1.25)
    document.getElementById("malus").innerHTML = prix3;
    
    }
    
    //Fin compteur de clique
    //tamer