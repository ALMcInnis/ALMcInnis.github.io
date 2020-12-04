function collectValue(){
var red = document.getElementById("redValue");
var green = document.getElementById("greenValue");
var blue = document.getElementById("blueValue");
var r = red.value;
var g = green.value;
var b = blue.value;
var rMax = red.max;
var gMax = green.max;
var bMax = blue.max;
var rMin = red.min;
var gMin = green.min;
var bMin = blue.min;

return{
	"r":r,
	"g":g,
	"b":b,
	"rMax":rMax,
	"gMax":gMax,
	"bMax":bMax,
	"rMin":rMin,
	"gMin":gMin,
	"bMin":bMin,
	};
}

function hexValue(){
var a = collectValue();
var redHex = rgbToHex(a.r);
var greenHex = rgbToHex(a.g);
var blueHex = rgbToHex(a.b);
var hex = "#" + redHex + greenHex + blueHex;
return hex;
}

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function displayValue(){
var redVal = document.querySelector(".red");
var greenVal = document.querySelector(".green");
var blueVal = document.querySelector(".blue");
var hexVal = document.querySelector(".hex-display");
var hex = hexValue();
var c = collectValue();

redVal.innerHTML = c.r;
greenVal.innerHTML = c.g;
blueVal.innerHTML = c.b;
hexVal.innerHTML = hex;
};
setInterval(displayValue,50);

function changeBackground(color){
var hex = hexValue();
var bg = document.body;
bg.style.backgroundColor = hex;
}
setInterval(changeBackground,50);

function bubbleSlide(){
var collect = collectValue();

var redVal = document.querySelector(".red");
var greenVal = document.querySelector(".green");
var blueVal = document.querySelector(".blue");

var redSpan =(collect.r * 100)/ 255;
var greenSpan = (collect.g * 100)/ 255;
var blueSpan = (collect.b * 100)/ 255;

redVal.style.left = `calc(${redSpan}% + (${8 - redSpan * .15}px))`;
greenVal.style.left = `calc(${greenSpan}% + (${8 - greenSpan * .15}px))`;
blueVal.style.left = `calc(${blueSpan}% + (${8 - blueSpan * .15}px))`;
};

setInterval(bubbleSlide,50);

function contrastText(){
var color = collectValue();
var yiq = ((color.r*299)+(color.g*587)+(color.b*114))/1000;
var contrast = (yiq >= 140) ? '#333' : 'white';
    return{
	"yiq":yiq,
	"contrast":contrast,
	}
};

function updateTextColor(){
var yiq = contrastText();
var textColor = document.querySelector(".slide-wrapper");
var slider = document.querySelectorAll(".slider");
var displayBorder = document.querySelector(".display");

textColor.style.color = yiq.contrast;
displayBorder.style.borderColor = yiq.contrast;
for ( i = 0; i < slider.length; i++){
	slider[i].style.backgroundColor = yiq.contrast;
	(yiq.yiq >=140) ? slider[i].classList.add("slider-black"):slider[i].classList.remove("slider-black")
	}
};
setInterval(updateTextColor,100);

function resetValue(){
var input = document.querySelectorAll(".slider");
for (i = 0; i < input.length; i++){
     input[i].value = 128;
	}
};
