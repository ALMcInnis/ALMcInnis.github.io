let palette = document.querySelectorAll(".palette");
let btnCreate = document.querySelector(".btn-create");
let snackbar = document.querySelector("#snackbar");
btnCreate.addEventListener("click",changePalette);
let btnCopy = document.querySelector(".btn-copy");


let hexArray = [];
	for (i = 0; i < 300; i++){
		let hex = Math.floor(Math.random()*16777215).toString(16);
	if (hex.length < 6){
		hex = "0" + hex;
		}
		hexArray.push(hex);
	}
	for (i = 0; i < palette.length; i++){
		let span = document.createElement("span");
		palette[i].appendChild(span);
		palette[i].addEventListener("click",function(){
								copyToClipboard(span.innerText);
								displaySnackbar(span.innerText);
							});
	}
	
let spanList = document.querySelectorAll("span");
btnCopy.addEventListener("click",function(){
	let spanArr = [];
	for (i = 0; i < spanList.length; i++){
		spanArr.push(spanList[i].innerText);
		copyToClipboard(spanArr);
		displayMsg(spanArr);
		}
	});


function changePalette(){
	for (i = 0; i < palette.length; i++){
		let cal = (Math.floor(Math.random()*300));	
		let hexVal = "#" + hexArray[cal];
		palette[i].style.background = hexVal;
		spanList[i].innerText = hexVal;
		spanList[i].style.color = getContrastYIQ(hexVal);
		toggleClass(spanList);
		toggleClass(palette);
	}
}
let toggleClass = function(elem){
			elem[i].classList.add("fade");
			setTimeout(toggle,300);
				function toggle(){
					for (i = 0; i < elem.length; i++){
						elem[i].classList.remove("fade");
					}
					
				}
		}
changePalette();

function copyToClipboard(text) {
   let elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}

function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    let r = parseInt(hexcolor.substr(0,2),16);
    let g = parseInt(hexcolor.substr(2,2),16);
    let b = parseInt(hexcolor.substr(4,2),16);
    let yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 150) ? '#333' : '#eee';
}

function displaySnackbar(span){
	snackbar.className ="show";
	snackbar.innerText = span + " " + "copied.";
	snackbar.style.background = span;
	snackbar.style.color = getContrastYIQ(span);
	snackbar.style.borderColor = getContrastYIQ(span);
	setTimeout(removeClass,3000);
	function removeClass(){
		snackbar.className = snackbar.className.replace("show","");
	}
}

function displayMsg(msg){
	snackbar.className ="show";
	snackbar.innerText = "Palette" + " " +  msg + " " + "copied.";
	snackbar.style.background = "#333";
	snackbar.style.borderColor = "#FFF";
	setTimeout(removeClass,3000);
	function removeClass(){
		snackbar.className = snackbar.className.replace("show","");
	}
}
