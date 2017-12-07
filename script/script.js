var memory_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'];

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var flag = true;

var memory_board = document.getElementById('memory_board');

var moves = document.getElementsByTagName('h4')[0];
var lives = document.getElementsByTagName('h4')[1];
var moves_item = 0;
var lives_item = 18;
var tiles = document.getElementById("memory_board").children;

function clearMovesLives () {
	moves_item = 0;
	lives_item = 18;
	moves.textContent = 0 ;
	lives.textContent = 18;
}
 
function updateMoves() { 
	moves_item++;
	moves.textContent = moves_item;
}
function updateLives() { 
	lives_item--;
	lives.textContent = lives_item;
}


Array.prototype.memory_tile_shuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0) {
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
};

function newBoard() {
			tiles_flipped = 0;
			var output = '';
			memory_array.memory_tile_shuffle();
			
			for (var i = 0; i < memory_array.length; i++) {
				output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
			}
			memory_board.innerHTML = output;
		};
function memoryFlipTile(tile, val) {
	if(tile.innerHTML == "" && memory_values.length < 2) {
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if (memory_values.length == 0) {
			updateMoves();
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(flag==true) {
				timer();
			};
		}
		else if (memory_values.length == 1){
			updateMoves();
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if (memory_values[0] == memory_values[1]) {
				updateLives();
				tiles_flipped += 2;
				memory_values = [];
				memory_tile_ids = [];
			if(tiles_flipped == memory_array.length) {
				stop.onclick();
				alert("Congratulation! You're score is: " + time.textContent+ "\nYou're moves is: " + moves.textContent);
				input.time = time.textContent;
				localStorage.setItem(name, JSON.stringify(input));
				save_data();	
				memory_board.innerHTML = "";
				newBoard();
				clearTimer();
				clearMovesLives();
				}
			} else {
				function flip2Back() {
					var tile_1 = document.getElementById(memory_tile_ids[0]);
					var tile_2 = document.getElementById(memory_tile_ids[1]);
					tile_1.style.background = '#2980b9';
					tile_1.innerHTML = "";
					tile_2.style.background = '#2980b9';
					tile_2.innerHTML = "";
					memory_values = [];
					memory_tile_ids = [];
				}
			setTimeout(flip2Back, 700);
			}
		}
	}
};




// Цветовое оформление
function yellow_color() {
	memory_board.style.background = "#ffe67f ";
	var x = document.getElementsByTagName("button");
	for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#ffd219";
    x[i].style.borderBottom = "4px solid #cca400 ";

	}
}

function green_color() {
	memory_board.style.background = "#30b339";
	var x = document.getElementsByTagName("button");
	for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#179920";
    x[i].style.borderBottom = "4px solid #14881c";
	}
}

function blue_color() {
	memory_board.style.background = "#a9cce3";
	var x = document.getElementsByTagName("button");
	for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#2980b9";
    x[i].style.borderBottom = "4px solid #2475ab";

	}
}

//форма sign up
var sign_menu = document.getElementById("sign_menu");
var form = document.forms.my_form;

sign_menu.onclick = function() {
	form.style.display = "block";
	document.getElementById("name").value = "";
}
sign.onclick = function() {
	form.style.display = "none";

}

//localstorage
var input = {
    time: ""
}
function save_data() {
	var name = document.getElementById("name").value ;
  	 
  	var storedValue = localStorage.getItem("name:"); 
  	document.getElementById("user").textContent = "User: " + name;
 }



//таблицы рекордов
var table = document.getElementById("table");
var table_name = document.getElementById("capture");
function score1() {
	capture.textContent = "Scores 6x6";
	table.style.display="inline-table";
}

function score2() {
	capture.textContent = "Scores 8x8";
	table.style.display="inline-table";
}

function score3() {
	capture.textContent = "Scores 10x10";
	table.style.display="inline-table";
}

function score4() {
	capture.textContent = "Scores 12x12";
	table.style.display="inline-table";
}
