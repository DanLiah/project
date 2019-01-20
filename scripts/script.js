document.getElementById("hiden-menu").onclick = function() {
	document.getElementById("hiddenMenu").style.display = "flex";
	document.getElementById("deleteImg").style.display = "block";
}
document.getElementById("deleteImg").onclick = function() {
	document.getElementById("hiddenMenu").style.display = "none";
	document.getElementById("deleteImg").style.display = "none";
}


let firstPortret = document.getElementById("firstPortret");
let secondPortret = document.getElementById("secondPortret");
let thirdPortret = document.getElementById("thirdPortret");

let active = secondPortret;

firstPortret.onclick = function() {
	active.style.border = "0.35rem solid black";
	active = firstPortret;
	active.style.border = "0.35rem solid #1abc9c";
	document.getElementById("lineSliderSlide10").style.left = "2.05rem";
}

secondPortret.onclick = function() {
	active.style.border = "0.35rem solid black";
	active = secondPortret;
	active.style.border = "0.35rem solid #1abc9c";
	document.getElementById("lineSliderSlide10").style.left = "-23.81rem";
}

thirdPortret.onclick = function() {
	active.style.border = "0.35rem solid black";
	active = thirdPortret;
	active.style.border = "0.35rem solid #1abc9c";
	document.getElementById("lineSliderSlide10").style.left = "-49.67rem";
}






var n = document.getElementsByClassName("contentSlider").length;
var size = document.getElementById('line').clientWidth;
size = size / n;

var clone1 = document.getElementsByClassName('contentSlider')[0].cloneNode();
var clone2 = document.getElementsByClassName('contentSlider')[n - 1].cloneNode();

clone1.classList.add('clone');
clone2.classList.add('clone');
document.getElementById('line').appendChild(clone1);
document.getElementById('line').appendChild(clone2);


var leftButton = document.getElementById("right");

var left = 0;
leftButton.onclick = function leftSwipe() {
	var line = document.getElementById("line");
	line.style.transition = "0.5s ease"
	left = left - size;
	if (left <= -((n + 1) * size)) {
		line.style.transition = "0s"
		left = 0;
		line.style.left = left + "px";
		setTimeout(function (){
			line.style.transition = "0.5s ease"; 
			left = -size
			line.style.left = left + "px";}, 10)
		return 1
	}
	line.style.left = left + "px";

}

var rightButton = document.getElementById("left");

rightButton.onclick = function rightSwipe() {
	var line = document.getElementById("line");
	line.style.transition = "0.5s ease"
	left = left + size;
	if (left > 0) {
		line.style.transition = "0s"
		left = -(n * size);
		line.style.left = left + "px";
		setTimeout(function (){
			line.style.transition = "0.5s ease"; 
			left = -((n - 1) * size)
			line.style.left = left + "px";}, 10)
		return 1
	}
	line.style.left = left + "px";
}