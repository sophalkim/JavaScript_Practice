function showClock() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	var x = $("clock");
	x.innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(function() {
		showClock()
	}, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function $(id) {
	return document.getElementById(id);
}

function displayText() {
	document.getElementById("demo").innerHTML = Date();
}

function changeText() {
	document.getElementById("ct").innerHTML = "Gone Fishing.";
}

function switchImage() {
	var image = document.getElementById('switchimage');
	if (image.src.match('images/cat.png')) {
		image.src = "images/beachball.png";
	} else {
		image.src = "images/cat.png"
	}
}