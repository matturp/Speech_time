

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(50);
  lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang,gotSpeech);
  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);

  function gotSpeech(){
    if(speechRec.resultValue){
      //for (var i = 0; i < height; i += 20){
      text(speechRec.resultString,random(width),random(height));
      //}
    }
  }
}



function draw() {
  background(255,2);
  textAlign(CENTER);
  push();
  textSize(100);
  text(hour() + ':' + minute() + ':' + second(),width/2,height/2)
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}