function changeBackground(color){
	var t = new Date;
	var h = t.getHours();
	var m = t.getMinutes();
	var s = t.getSeconds();
	
	if (h < 10){
		h = "0" + h;
	}
	if (m < 10){
		m = "0" + m;
	}
	if (s < 10){
		s = "0" + s;
	}
	
	return{
	"h": h,
	"m": m,
	"s": s,
	}
};

function activateClock(color){
	var bg = document.body;
	var clock = changeBackground(color);
	var id = document.getElementById("clock");
	var hex = "#" + clock.h + clock.m + clock.s;
	bg.style.backgroundColor = hex;
	id.innerHTML = hex;
};

activateClock();
setInterval(activateClock,1000);