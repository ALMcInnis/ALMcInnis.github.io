window.addEventListener("load", function(){
	attribute();
});

function attribute(){
	let link = document.querySelectorAll("a:not(.nav-link)");
	for (i=0; i < link.length; i++){
		link[i].setAttribute("target","_blank")
	}
}