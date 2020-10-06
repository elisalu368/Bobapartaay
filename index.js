// const backgroundColor = [230,220,190];
const myCanvas = { width: 666, height: 1000};
const backgroundColor = [230,220,190];
const lineColor = [212, 109, 102];
const activeLineColor = [212, 127, 102];
const lineWidth = 4;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });

//came out akward but then I thougth it looked cool//
const ball1 = {
    x: 300,
    y: 300,
    size: 100,
    speed: 1,
    fillColor: [64, 56, 48],
    strokeColor: [0, 0, 0],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 
//ak but cool end//

const ball2 = {
    x: 300,
    y: 600,
    size: 50,
    speed: 1.1,
    fillColor: [64, 56, 48],
    strokeColor: [0, 0, 0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 
const ball3 = {
    x: 300,
    y: 500,
    size: 80,
    speed: .8,
    fillColor: [64, 56, 48],
    strokeColor: [0, 0, 0],
    ballStrokeWeight: 2,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
} 
const ball4 = {
    x: 300,
    y: 400,
    size: 60,
    speed: 1.3,
    fillColor: [64, 56, 48],
    strokeColor: [0, 0, 0],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 
const ball5 = {
    x: 300,
    y: 400,
    size: 50,
    speed: .5,
    fillColor: [64, 56, 48],
    strokeColor: [0, 0, 0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
}
const ball6 = {
    x: 300,
    y: 500,
    size: 50,
    speed: 1.3,
    fillColor: [64, 56, 48],
    strokeColor: [0, 0, 0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 
const leftEdge = {
    x1: 110,
    y1: 0,
    x2: 110,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}
const rightEdge = {
    x1: 470,
    y1: 0,
    x2: 470,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}
const balls = [ball1, ball2, ball3, ball4, ball5, ball6];
function preload(){
    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];
    ball4.rightSound = sounds[0];
    ball4.leftSound = sounds[0];
    ball5.rightSound = sounds[0];
    ball5.leftSound = sounds[0];
    ball6.rightSound = sounds[0];
    ball6.leftSound = sounds[0];


}
function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}
function draw(){
    
    background(backgroundColor);
    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
}
function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        ball.leftSound.play();
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}
const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}
function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}
function activateLine(line){
    line.color = activeLineColor;
    line.width = activelineWidth;
    setTimeout(() => resetLines(line), 500);
}
function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}
object.addEventListener("click", ball3);

object.onclick = function(){SVGPathSegLinetoVerticalRel};