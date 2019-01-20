document.getElementById("videoButton").onclick = function () {
	let video = `<iframe width="1019" height="573" src="https://www.youtube.com/embed/pfVODjDBFxU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="videoSlide3">
	</iframe>`;
	document.getElementById("slide3").style.background = "none";
	document.getElementById("slide3").innerHTML = video;
	document.getElementById("videoSlide3").autoplay = 1;
}