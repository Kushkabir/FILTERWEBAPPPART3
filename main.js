noseX=0;
noseY=0;
function preload(){
moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,300,300);
    image(moustache,noseX,noseY,30,30);
}
function takesnapshot(){
    save("selfi.png");
 }
 function modelloaded(){
    console.log("posenet is loaded");
 }
 function gotposes(results){
    if(results.length>0)
    {
     console.log(results);
    noseX=results[0].pose.nose.x-12;
    noseY=results[0].pose.nose.y+5;
    console.log("noseX="+noseX);
    console.log("noseY="+noseY);
    }
 }