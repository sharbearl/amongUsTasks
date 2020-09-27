/* global var createCanvas, background, frameRate, rect, stroke, strokeWeight, fill, noStroke, textSize, text, mouseIsPressed, mouseX, mouseY, loadImage, image*/

var GameOn;
var img;

function preload() {
  img = loadImage('Logo.png');
}

function setup(){
	createCanvas(1260, 590);
	background(255, 255, 255);
	frameRate(100);
	GameOn = 1;
}

function draw(){
  image(img, 0, 0);
}
