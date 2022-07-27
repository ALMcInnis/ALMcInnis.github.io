let input = document.querySelectorAll("input");
	for(i = 0; i < input.length; i++){
		Object.assign(input[i], {
			min:0,
			max:100,
			value: input[i].value.length == 0 ? value = 90 : value = 100,
		})
		input[i].pattern = "^(0|[1-9][0-9]?100)$";
	};
function calculateGrade(){
	let grade = document.querySelector("#final-grade");
	let test = document.querySelectorAll(".test");
	let quiz = document.querySelectorAll(".quiz");
	let proj = document.querySelectorAll(".project-grade");
	let hw = document.querySelectorAll(".hw");
	let calcSum = function(elem){
		let elemArray = [];
		for (i = 0; i < elem.length; i++){
			elemArray.push(+elem[i].value);
		}
		let elemSum = elemArray.reduce(getSum)/elem.length;
		return elemSum;
	}
	let getSum = function (total, amount){
			return total + amount;
		}
	let finalGrade = (calcSum(test)* .4) + (calcSum(proj) * .3) + (calcSum(quiz) * .2) + (calcSum(hw) * .1);
	
	grade.innerText = Math.round(finalGrade);
	let bgList = ["excellent","good-two","average","warning","failing"];
	if (Math.round(finalGrade) > 89){
		grade.className = bgList[0];
	}else if (Math.round(finalGrade) > 79){
		grade.className = bgList[1];
	}else if (Math.round(finalGrade) > 69){
		grade.className = bgList[2];
	}else if (Math.round(finalGrade) > 59){
		grade.className = bgList[3];
	}else{
		grade.className = bgList[4];
	}
	let rubric = document.querySelectorAll(".rubric-grid > .grades > div");
	for (i = 0; i < rubric.length; i++){
	 rubric[i].setAttribute("class",bgList[i]);
	}
}
calculateGrade();
setInterval(calculateGrade,1000);