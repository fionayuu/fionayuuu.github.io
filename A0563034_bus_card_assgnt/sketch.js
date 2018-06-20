// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("blue");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("blue");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(204, 229, 255, 225);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(204,0,102);
	textSize(fontSizeA);
	text("Yes, I do", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(0,102,204);
	textSize(fontSizeNorm);
	text("Fiona Yu", padXmin+bleedPadW, padYmax*0.55);
	fill(0, 51, 102); // note color values - try to improve with cymk-style colors
	text("Manager of the Ring's co.", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(0, 51, 102); // note 4th value is alpha (transparency)
	text("Phone: 0933-227-772", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(0, 51, 102);
	text("Email: yesidoo520@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(255);
	text("Web: www.yesidoo.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));


	


  // Set colors
  fill(255, 255, 153, 170);
  stroke(127, 63, 120);

  

  // A design for a simple flower
  translate(600, 300);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 20, 10, 80);
    rotate(PI/5);
  }
}

function draw() {


}