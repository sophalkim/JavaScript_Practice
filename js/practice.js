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

	function showDate() {
		var x = document.getElementById('datebutton');
		x.innerHTML = Date();
	}

	function doAdd() {
		var x = document.getElementById('addition_input_one').value;
		var y = document.getElementById('addition_input_two').value;
		var z = document.getElementById('sum');
		z.innerHTML = parseInt(x) + parseInt(y);
	}

	function doAddInternal() {
		var x = document.getElementById('addition_input_three').value;
		var y = document.getElementById('addition_input_four').value;
		var z = document.getElementById('sum2');
		z.innerHTML = add(x, y);
	}

	function add(a, b) {
		return parseInt(a) + parseInt(b);
	}

	function showSentence() {
		var x = document.getElementById('word_input_1').value;
		var z = document.getElementById('word_sentence');
		z.innerHTML = "Hello, " + x + " and welcome to my webpage";
	}

	function showMouseOver() {
		var x = document.getElementById('mouseover_header');
		x.style.color = "green";
	}

	function hideMouseOver() {
		var x = document.getElementById('mouseover_header');
		x.style.color = "black";
	}

	function showNewImage() {
		var x = document.getElementById("mouseover_image");
		x.style.width = "150px";
		x.style.height = "400px";
		x.src = "images/meerkat.png"
	}

	function hideNewImage() {
		var x = document.getElementById("mouseover_image");
		x.style.width = "200px";
		x.style.height = "200px";
		x.src = "images/ladybug.png"
	}