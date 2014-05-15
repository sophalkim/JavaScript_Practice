	function displayText() {
		document.getElementById("demo").innerHTML = Date();
	}

	function changeText() {
		document.getElementById("ct").innerHTML = "Gone Fishing.";
	}

	function switchImage() {
		var image = document.getElementById('switchImage');
		if (image.src.match('images/cat.png')) {
			image.src = "images/beachball.png";
		} else {
			image.src = "images/cat.png";
		}
	}