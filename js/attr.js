window.addEventListener("load", function(){
	attribute();
});

function attribute(){
	let link = document.querySelectorAll("a[href*='http']");
	for (i=0; i < link.length; i++){
		link[i].setAttribute("target","_blank")
	}
}