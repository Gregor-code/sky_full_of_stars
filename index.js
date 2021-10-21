const sky = document.querySelector('#sky');
sky.width = window.innerWidth;
sky.height = window.innerHeight;

//radius of stars should variate

let canvas = sky.getContext('2d');

//define random coordinates for star

let starCoords = [];
let stars = 100;

for(let i = 0; i < stars; i++){
    starCoords.push({
        x : Math.random() * innerWidth,
        y : Math.random() * innerHeight
    })
}

function drawStars(){
    for(let i = 0; i < starCoords.length; i++){
        let currentStar = starCoords[i];
        canvas.fillStyle='white';
        canvas.fillRect(0,0,canvas.width,canvas.height);
        canvas.beginPath();
        canvas.arc(currentStar.x, currentStar.y, Math.random() * 5, 0, 2 * Math.PI);
        canvas.stroke();
        canvas.fill();
    }
}

drawStars();
