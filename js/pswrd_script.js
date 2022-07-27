let display = document.querySelector(".display");
	let input = document.querySelector(".num");
	let btn = document.querySelector("button");
	let copy = document.getElementById("copy");
	let len = document.querySelector(".numRange");
	let toggleClass = function(elem){
			elem.classList.toggle("fade-in");
			setTimeout(toggle,300);
				function toggle(){
					elem.classList.toggle("fade-in");
				}
		}
	
	btn.addEventListener("click",function(){
		generatePassword(),
		pswrdMeter(display.innerText)
		});
	copy.addEventListener("click",function(){copyPassword(display.innerText);displaySnackbar(display.innerText)});
	len.addEventListener("change",displayLen);

	
	function displayLen(){
		let val = len.value;
		input.innerText = "PASSWORD LENGTH:" + " " + val;
	}
	setInterval(displayLen,25);
	
	function generatePassword(){
		let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			lowerCase = "abcdefghijklmnopqrstuvwxyz",
			nums = "0123456789",
			specs = "!@#$%^&*_+*/-={}()[]",
			password = "";
		let charName = function(arr){
			return arr.charAt(Math.floor(Math.random()*arr.length));
		}
			
		let length = len.value;
		for (i = 0; i < length; i++){
			password +=charName(upperCase);
			password +=charName(lowerCase);
			password +=charName(nums);
			password +=charName(specs);
		}
		
		password = password.split("").sort(arrangeElem).join("");
		function arrangeElem(){
			return .25-Math.random();
		}
		
		let pswrd = [];
		for (i = 0; i < length; i++){
			if (password.length > length){
				pswrd.push(password[i]);
			}
		}
		genPswrd = pswrd.join("")
		display.innerText = genPswrd;
		toggleClass(display)
	}

	
	
generatePassword();
displayLen();

function copyPassword(text){
   let elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}

let securePswrd = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{15,})');
let strongPswrd = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})');
let avgPswrd = new RegExp('((?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
let pswrdBar = document.querySelector("#bar");
let rating = document.getElementById("rating");

let classNameSwitch = function(name){
	pswrdBar.className = name;
	rating.innerText = name;
	toggleClass(rating);
}

function pswrdMeter(elem){
	if (securePswrd.test(elem)){
		classNameSwitch("secure");
	} else if (strongPswrd.test(elem)){
		classNameSwitch("strong");
	} else if (avgPswrd.test(elem)){
		classNameSwitch("good");
	} else {
		classNameSwitch("weak");
	} 
}

function displaySnackbar(span){
	snackbar.className ="show";
	snackbar.innerText = span + " " + "copied.";
	snackbar.style.background = "#333";
	snackbar.style.borderColor = "#FFF";
	setTimeout(removeClass,3000);
	function removeClass(){
		snackbar.className = snackbar.className.replace("show","");
	}
}

pswrdMeter();
