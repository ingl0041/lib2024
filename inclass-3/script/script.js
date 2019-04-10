		document.getElementById("show").addEventListener("click", showText);

function showText() {
	 var x = document.getElementById("content");
	  x.style.display = "block";
}

document.getElementById("hide").addEventListener("click", hideText);

function hideText() {
	 var x = document.getElementById("content");
	  x.style.display = "none";
}

document.getElementById("small").addEventListener("click", smallFont);

function smallFont() {
	var x = document.getElementById("content");
	x.style.fontSize = "12px";
}

document.getElementById("big").addEventListener("click", bigFont);

function bigFont() {
	var x = document.getElementById("content");
	x.style.fontSize = "48px";
}
document.getElementById("blue").addEventListener("click", blueBack);

function blueBack() {
	var x = document.getElementById("content");
	x.style.backgroundColor = "#C5CAE9";
}

document.getElementById("red").addEventListener("click", redBack);

function redBack() {
	var x = document.getElementById("content");
	x.style.backgroundColor = "#ffa291";
}