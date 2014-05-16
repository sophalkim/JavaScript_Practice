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
			image.src = "images/cat.png";
		}
	}

	function changeToRedText() {
		var x = document.getElementById('headertext');
		if (x.style.color.match("black")) {
			x.style.color = "red";
		} else {
			x.style.color = "black";
		}
	}

	function isNumber() {
		var x = document.getElementById('inputbox').value;
		var y = document.getElementById('result');
		if (x.trim() == "" || isNaN(x)) {
			y.innerHTML = "Not a number";
		} else {
			y.innerHTML = "OK";
		}
	}

	function docWrite() {
		document.write("Cool");
	}

	function doConsole() {
		console.log("You are cool Sophal");
	}

	function doMultiply() {
		var x = document.getElementById('one').value;
		var y = document.getElementById('two').value;
		var z = document.getElementById('product');
		console.log("Variable is" + typeof(x));
		z.innerHTML = multiply(x, y);
	}

	function showJavaScriptObject() {
		var person = {
			firstName : "John",
			lastName : "Wells",
			age: 50,
			eyeColor : "blue"
		};
		document.getElementById("jobjects").innerHTML = person.firstName + " is " + person.age;
	}

	function multiply(a, b) {
		return a * b;
	}