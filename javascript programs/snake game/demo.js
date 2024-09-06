var board;
var context;
var boxsize = 40;
var rows = 25;
var cols = 15;
var headx = 5 * boxsize;
var heady = 5 * boxsize;
var speed = 15;
var score = 0;
var foodx;
var foody;
var snakebody = [];
var gameover = false;
var paused = false;  // New variable to track pause state
var xvel = 0;
var yvel = 0;
var headImage = new Image();  // Image for the snake's head

window.onload = function() {
    board = document.getElementById("board");
    board.width = boxsize * rows;
    board.height = boxsize * cols;
    context = board.getContext("2d");
    headImage.src = 'vishalanna.png';  // Set the source of the image
    placefood();
    document.addEventListener('keyup', changedirection);
    setInterval(snakeboard, 1000 / 10);
}

function snakeboard() {
    if (gameover || paused) {
        return;
    }

    context.fillStyle = 'orange';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'rgba(65, 65, 14, 0.952)';
    context.fillRect(foodx, foody, boxsize - 1, boxsize - 1);

    if (headx == foodx && heady == foody) {
        snakebody.push([foodx, foody]);
        placefood();
    }

    for (let i = snakebody.length - 1; i > 0; i--) {
        snakebody[i] = snakebody[i - 1];
    }

    if (snakebody.length) {
        snakebody[0] = [headx, heady];
    }

    headx = headx + xvel * boxsize;
    heady = heady + yvel * boxsize;

    // Draw the snake's head image
    context.drawImage(headImage, headx, heady, boxsize - 1, boxsize - 1);

    context.fillStyle = 'brown';
    for (let i = 0; i < snakebody.length; i++) {
        context.fillRect(snakebody[i][0], snakebody[i][1], boxsize - 1, boxsize - 1);
    }

    if (headx < 0 || heady < 0 || heady > rows * boxsize - 1 || headx > cols * boxsize - 1) {
        gameover = true;
        alert("Game over! You hit the wall.");
    }

    for (let i = 0; i < snakebody.length; i++) {
        if (headx == snakebody[i][0] && heady == snakebody[i][1]) {
            gameover = true;
            alert("Game over! You ran into yourself.");
        }
    }

    context.fillStyle = 'black';
    context.font = '20px consolas';
    context.fillText(score, 5, 15);
}

function placefood() {
    foodx = Math.floor(Math.random() * cols) * boxsize;
    foody = Math.floor(Math.random() * rows) * boxsize;
    score = score + 1;
}

function changedirection(event) {
    if (event.code == 'ArrowUp') {
        if (yvel == 1) return;
        yvel = -1;
        xvel = 0;
    } else if (event.code == 'ArrowDown') {
        if (yvel == -1) return;
        yvel = 1;
        xvel = 0;
    } else if (event.code == 'ArrowLeft') {
        if (xvel == 1) return;
        yvel = 0;
        xvel = -1;
    } else if (event.code == 'ArrowRight') {
        if (xvel == -1) return;
        yvel = 0;
        xvel = 1;
    } else if (event.code == 'Space') {
        paused = !paused;  // Toggle paused state
    }
}
