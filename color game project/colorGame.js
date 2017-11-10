var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");;
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.innerHTML === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
		/*if(this.innerHTML==="easy"){
				numberOfSuares = 3;
		}else{
			numberOfSuares = 6;
		}*/
		reset();
	});

}

function reset(){
	colors = generateRandomColors(numberOfSquares);

	//pick a new random color from array
	pickedColor = pickColor();
	//change coloDisplay to match picked color
	colorDisplay.innerHTML = pickedColor;

	resetButton.innerHTML = "New Colors"

	messageDisplay.innerHTML = ""; 
	//change colors of squares
	for(var i =0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";	
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})
colorDisplay.innerHTML = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial collors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeres to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedcolor
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "correct";
			changeColors(clickedColor);
			resetButton.innerHTML = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	})
}

function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []

	for(var i = 0; i< num; i++){
		arr.push(randomColor())

	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	return "rgb("+ r +", "+ g +", "+ b +")";
}
