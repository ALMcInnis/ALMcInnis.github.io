let deadline ='January 1 2030 00:00:00 GMT-05:00';
	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.now();
		var hundreth = Math.floor((t % 1000)/ 10);
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
			
		return{
		'total':t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
		};
	}
		
	function initializeClock(id, endtime){
		var clock = document.getElementById(id);
		var timerDisplay = document.querySelector(".timer");
			function updateClock(){
				var t	= getTimeRemaining(endtime);
				timerDisplay.innerText = t.days + ":" + ('0' + t.hours).slice(-2) + ":" + ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2) ;
							
				if(t.total <= 0){
					clearInterval(timeInterval);
				}
			}
updateClock();
let timeInterval = setInterval(updateClock,1000);
}
initializeClock("timer", deadline);