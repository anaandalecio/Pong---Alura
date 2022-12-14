// Ball - Variables
let xBall = 300;
let yBall = 200;
let dBall = 22;
let rBall = dBall / 2;

// Ball speed - Variables
let velXBall = 6;
let velYBall = 6;


// My racket - Variables
let xRec = 10;
let yRec = 150;
let wRec = 10;
let hRec = 90;

// Opponents racket - Variables
let xoRec = 580;
let yoRec = 150;
let yvel;

// Points - Variables
let myPoints = 0;
let opPoints = 0;

//Souds -  Variables
let racket_Sound;
let scoring_Sound;
let sound_Track;

// - Variables
let errorOpChance = 0;

function preload(){
  sound_Track = loadSound("trilha.mp3");
  racket_Sound = loadSound("raquetada.mp3");
  scoring_Sound = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  sound_Track.loop();
}


function draw() {
  background(0);
  Ball();
  xValidation();
  yValidation();
  motion();
  recmotionup();
  recmotiondown();
  recColision();
  rackets(xRec,yRec);
  rackets(xoRec,yoRec);
  speedRacket();
  motionop();
  recOpColision();
  score();
  Scoring ();
  error();
  caloulationOfError()
  //stuckB()
  
}
  

  
function Ball() {
  circle(xBall, yBall, dBall);
  
}

function rackets (x,y){
  rect(x, y, wRec, hRec);
}


function motion(){
   yBall += velYBall;
   xBall += velXBall;
}


function xValidation(){
   if ( xBall > (width - rBall) || xBall < rBall ){
    velXBall *= -1
  }
}
  
function yValidation() {
    if ( yBall < rBall || yBall > (height - rBall) ) {
    velYBall *= -1
}  
}

function recmotionup (){
   if (keyIsDown (UP_ARROW)){
   yRec -= 10
     }
}

function recmotiondown (){
   if (keyIsDown (DOWN_ARROW)){
   yRec += 10
     }
}

function recColision() {
    if (xBall - rBall < xRec + wRec && yBall - rBall < yRec + hRec && yBall + rBall > yRec) {
    velXBall *= -1
    racket_Sound.play();
   }
  
}

function recOpColision() {
    if (xBall + rBall > xoRec - wRec && yBall + rBall < yoRec + hRec + wRec && yBall - rBall > yoRec + wRec) {
    velXBall *= -1
    racket_Sound.play();
    
   }
} 


function speedRacket(){
  yvel = yBall - yoRec - (hRec/2) - 33
}

function motionop(){
  yoRec += yvel;
  caloulationOfError();
}

function score(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130, 10, 40, 20);
  fill(255);
  text(myPoints, 150, 26);
  fill(color(255,140,0));
  rect(430, 10, 40, 20);
  fill(255);
  text(opPoints, 450, 26);
  
}

function Scoring (){
  if (xBall > 590) {
  myPoints += 1
  scoring_Sound.play();
    }
  
  if (xBall < 11){
  opPoints += 1
  scoring_Sound.play();
    }
  
}

function error(){
  if (xBall < 0){
  xBall = 300
  opPoints += 1
  }
}

function caloulationOfError() {
  if (opPoints >= myPoints) {
    errorOpChance += 1
    if (errorOpChance >= 39){
    errorOpChance = 40
    }
  } else {
    errorOpChance -= 1
    if (errorOpChance <= 35){
    errorOpChance = 35
    }
  }
}
