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

	function showAlert() {
		var x = document.getElementById('hidden_dialog');
		alert("You are a cool cat.");
	}

	function onChangeInput() {
		var x = document.getElementById('form_onChange').value;
		var y = document.getElementById('paragraph_onChange');
		y.innerHTML = x;
	}

	function showHawaiiText() {
		var x = document.getElementById("hawaii");
		x.style.color = "purple"
		x.innerHTML = "Now I'm back.";
	}

	function hideHawaiiText() {
		var x = document.getElementById("hawaii");
		x.style.color = "green"
		x.innerHTML = "I was in Hawaii for 2 weeks, I'm feeling a little rusty";
	}

	function showArrayText() {
		var person = {
			firstName:"John", 
			lastName:"Doe", 
			age:50, 
			eyeColor:"blue"};
		document.getElementById("array_text").innerHTML = 
		person.firstName + " is " + person.age + " years old.";
	}

	function showArrayText2() {
		var person = {
			firstName: "Jane",
			lastName: "Smith",
			age:22,
			eyeColor:"brown"
		};
		var x = document.getElementById("array_text2");
		x.innerHTML = person["firstName"] + " has " + person["eyeColor"] + " eyes.";
	}

	function showArrayText3() {
		var person = {
			firstName: "Billy",
			lastName: "Bob",
			age:31,
			eyeColor:"black",
			fullName: function() {
				return this.firstName + " " + this.lastName;
			}
		};
		var x = document.getElementById("array_text3");
		x.innerHTML = person.fullName();
	}

	function showTextLength() {
		var x = document.getElementById("text_length_input").value.length;
		var y = document.getElementById("text_length_button");
		y.style.color = "yellow";
		y.innerHTML = "The length of the text is " + "'" + x + "'";		 
	}

	function showTextCool() {
		var x = document.getElementById("text_cool").innerHTML;
		var y = document.getElementById("text_cool_button");
		y.innerHTML = x.indexOf("cool");
	}

	function textReplace() {
		var x = document.getElementById("text_replace");
		var y = x.innerHTML.replace("short", "long");
		x.innerHTML = y;
	}

	function showUpperCase() {
		var x = document.getElementById("text_uppercase");
		x.innerHTML = x.innerHTML.toUpperCase();
	}

	function hideUpperCase() {
		var x = document.getElementById("text_uppercase");
		x.innerHTML = x.innerHTML.toLowerCase();
	}

	function showSplitArray() {
		var x = document.getElementById("text_split_array");
		var arr = x.innerHTML.split(",")
		x.innerHTML = arr[0];
	}

	function hideSplitArray() {
		var x = document.getElementById("text_split_array");
		x.innerHTML = "This sentence will split into an array, because of the comma.";
	}

	function showPrimitive() {
		var x = document.getElementById("text_primitive");
		var y = new String(" and an Object String").bold();
		x.innerHTML =  "This sentence contains a primitive String" + y;
	}

	function hidePrimitive() {
		var x = $("text_primitive");
		x.innerHTML = "This sentence contains a primitive String";
	}

	function $(id) {
		return document.getElementById(id);
	}

	function multiplyInfinity() {
		var x = $("text_infinity");
		var y = 2;
		var text = "";
		while (y != Infinity) {
			y = y * y;
			text = text + y + "<br>";
		}
		x.innerHTML = text;
	}