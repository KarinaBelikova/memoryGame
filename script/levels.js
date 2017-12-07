function level1() {
   clearTimer();
   memory_board.style.gridTemplateColumns="repeat(6, 75px)";
   memory_board.style.gridTemplateRows="repeat(6, 75px)";
   memory_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
   'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'];
   memory_array.length = 36;
   lives_item = 18;
   lives.textContent = lives_item;
   flag = true;
   newBoard();
  
};

function level2() {
	clearTimer();
	memory_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5'];
	memory_array.length = 64;
	lives_item = 32;
	lives.textContent = lives_item;
	flag = true;
    newBoard();
    for (var i = 0; i < tiles.length; i++) {
    tiles[i].style.padding = "6px";
	}
	memory_board.style.gridTemplateColumns="repeat(8, 58px)";
	memory_board.style.gridTemplateRows="repeat(8, 58px)";
	
};

function level3() {
	clearTimer();
	memory_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
	'6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
	'6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
	memory_array.length = 100;
	lives_item = 50;
	lives.textContent = lives_item;
	flag = true;
    newBoard();
    for (var i = 0; i < tiles.length; i++) {
    tiles[i].style.padding = "1px";
	}
	memory_board.style.gridTemplateColumns="repeat(10, 46px)";
	memory_board.style.gridTemplateRows="repeat(10, 46px)";
	
};

function level4() {
	clearTimer();
	memory_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
	'6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
	'24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
	'41','42','43','44','45',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
	'6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
	'24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
	'41','42','43','44','45'];
	memory_array.length = 144;
	lives_item = 72;
	lives.textContent = lives_item;
	flag = true;
    newBoard();
    for (var i = 0; i < tiles.length; i++) {
    tiles[i].style.width = "38px";
    tiles[i].style.height = "38px";
     tiles[i].style.padding = "0px";
	}
	memory_board.style.gridTemplateColumns="repeat(12, 38px)";
	memory_board.style.gridTemplateRows="repeat(12, 38px)";
	
};