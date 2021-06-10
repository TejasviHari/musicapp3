song1="";
song2="";
song1stat="";
song2stat="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotPoses);
}

function modeloaded(){
    console.log("Posenet initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist X:"+leftWristX+", Left wrist Y:"+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist X:"+rightWristX+", Right wrist Y:"+rightWristY)
    }
}