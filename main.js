ToType = ''
x = 100
y = 100
lx = 0
rx = 0
difference = 0
family = ""

function preload(){

}

function setup(){
  canvas = createCanvas(500, 400);
  canvas.center()
  video = createCapture(VIDEO);
  //video.position()
  //this to to set position of video
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotResults)
}

function modelLoaded(){
  console.log('Model is Loaded')
}

function draw(){
  background('white');
  ToType = document.getElementById('toType').value
  console.log(ToType)
  family = document.getElementById('family').value
  textFont(family)
  textSize(difference)
  text(ToType, x, y);
  console.log(difference)
}

function gotResults(results){
  if(results.length > 0){
    console.log(results)
    rx = results[0].pose.rightWrist.x
    lx = results[0].pose.leftWrist.x
    length = lx-rx
    difference = floor(length/10)
  }
}