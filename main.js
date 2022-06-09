function preload(){

}
function setup() {
    canvas= createCanvas(600,480);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();

    tint_color=" ";
}
function draw() {
    image(video,0,0,600,480);
    tint(tint_color);

}
function take_snapshot() {
    save('myFilter.png');
}
function createCanvas(){
    createCanvas(500,500)
    circle(30, 30, 20);
describe('white circle with black outline in mid of gray canvas');
ellipse(56, 46, 55, 55);
describe('white ellipse with black outline in middle of a gray canvas');
rect(30, 20, 55, 55);
describe('white rect with black outline in mid-right of canvas');
}