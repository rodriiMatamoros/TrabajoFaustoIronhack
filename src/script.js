let score = 0;
let timer;
let timeLeft = 0;
let isGameStarted = false;
let highScore = 0;

function startGame() {
    score = 0;
    timeLeft = 30;
    isGameStarted = true;
    document.getElementById("mainScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("highScoreContainer").style.display = "none";
    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("timer").innerText = "Time: 30s";
    updateHighScore();
    createTarget();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft + "s";
    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    isGameStarted = false;
    clearInterval(timer);
    document.getElementById("restartButton").style.display = "block";
    document.getElementById("highScoreContainer").style.display = "block";
    updateHighScore();
}

function restartGame() {
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("mainScreen").style.display = "block";
}

function createTarget() {
    const target = document.getElementById("target");
    target.style.display = "block";
    const radius = 25;
    target.style.left = Math.random() * (window.innerWidth - radius * 2) + "px";
    target.style.top = Math.random() * (window.innerHeight - radius * 2) + "px";
    target.onclick = () => {
        if (isGameStarted) {
            score++;
            document.getElementById("score").innerText = "Score: " + score;
            createTarget();
        }
    };
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        document.getElementById("highScore").innerText = highScore;
    }
}
