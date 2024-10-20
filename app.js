const balls = [
    { id: 'ball1', color: 'red' },
    { id: 'ball2', color: 'green' },
    { id: 'ball3', color: 'blue' },
    { id: 'ball4', color: 'yellow' },
    { id: 'ball5', color: 'purple' }
];

let currentBall = 0;

function lightUpBall() {
    if (currentBall > 0) {
        document.getElementById(balls[currentBall - 1].id).style.backgroundColor = 'gray'; 
    }

    if (currentBall < balls.length) {
        const ball = balls[currentBall];
        document.getElementById(ball.id).style.backgroundColor = ball.color; 
        currentBall++;
        setTimeout(lightUpBall, 1000); 
    }
}

setTimeout(lightUpBall, 1000); 
