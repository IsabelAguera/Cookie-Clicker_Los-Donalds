function draw() {
    var canvas = document.getElementById("donut");
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
    ctx.strokeStyle = "white"
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white"
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