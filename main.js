
noseX=0
noseY=0
difference=0
leftwristX=0
rightwristX=0

function setup() {
    video= createCapture(VIDEO); 
    video.size(550,500);

    canvas=createCanvas(440,440);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    background('#42f5ad')
    fill("#cbe7f2")
    stroke("#0e0f0f")
    text("Riddhi",noseX,noseY)
    textSize(difference)
}

function modalLoaded() {
    console.log('PoseNet Is Initialized!');

}

function gotposes(results) {
 if(results.length > 0){
 console.log(results);
 noseX= results[0].pose.nose.x;
 noseY= results[0].pose.nose.y;
 console.log("noseX =" + noseX +"noseY" + noseY);

 leftwristX= results[0].pose.leftWrist.x;
 rightwristX=results[0].pose.rightWrist.x;
 difference = leftwristX - rightwristX;
 }
}




