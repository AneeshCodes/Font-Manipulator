ToType = ''
x = 100
y = 100

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
  text(ToType, x, y);
}

function gotResults(results){
  if(results.length > 0){
    console.log(results)

  }
}