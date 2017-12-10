//localstorage
var date = new Date();
var date_value = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear();
var local_value = {
	date: date_value,
    score: scores,
    table: table

}
function save_data() {
	switch(memory_array.length) {
		case 36: 
			local_value.table = 1;
			break;
		case 64:  
			local_value.table = 2;
			break;
		case 100:  
			local_value.table = 3;
			break;
		case 144:  
			local_value.table = 4;
			break;
	}	
	local_value.score = scores;
	localStorage.setItem(name, JSON.stringify(local_value));
 }


//таблицы рекордов
var scores = 0;
var table = document.getElementById("table");
var table_name = document.getElementById("capture");
var massVal = [];
var table_child = document.getElementById("table_child");
function parseOb (ob) {
	for(var key in ob) {
	    massVal.push(ob[key]);
	}
}

function score_table(score_level) {
	while (table_child.firstChild) {
    table_child.removeChild(table_child.firstChild);
	}
	switch(score_level) {
		case 1: 
			capture.textContent = "Scores 6x6";
			break;
		case 2:  
			capture.textContent = "Scores 8x8";
			break;
		case 3:  
			capture.textContent = "Scores 10x10";
			break;
		case 4:  
			capture.textContent = "Scores 12x12";
			break;
	}	
	table.style.display="inline-table";
	for(var i=0; i<localStorage.length; i++) {
		parseOb(JSON.parse(localStorage.getItem(localStorage.key(i))));
		if(massVal[2]===score_level){
		table_child.innerHTML += '<tr><td>'+ massVal[0] +'</td><td>'+ localStorage.key(i) +'</td><td>'+massVal[1]+'</td></tr>';
		}
		massVal = [];
	}
}


//ф-ция начисления очков
function score() {
	time_value = minutes*60+seconds;
	switch(memory_array.length) {
		case 36: 			    
			if(time_value < 60) {
				scores += 100;
			} else if(time_value < 75) {
				scores += 70; 
				} else if (time_value < 105){
					scores += 50;
			        }
			if(moves < 100) {
				scores+= 100;
			} else if(moves < 150){
				scores+=50;
			}
			break;
		case 64: 			    
			if(time_value < 120) {
				scores += 100;
			} else if(time_value < 140) {
				scores += 70; 
				} else if (time_value < 160){
					scores += 50;
			        }
			if(moves < 250) {
				scores+= 100;
			} else if(moves < 300){
				scores+=50;
			}
			break;
		case 100: 			    
			if(time_value < 180) {
				scores += 100;
			} else if(time_value < 200) {
				scores += 70; 
				} else if (time_value < 220){
					scores += 50;
			        }
			if(moves < 400) {
				scores+= 100;
			} else if(moves < 450){
				scores+=50;
			}
			break;		
		case 144: 			    
			if(time_value < 240) {
				scores += 100;
			} else if(time_value < 260) {
				scores += 70; 
				} else if (time_value < 280){
					scores += 50;
			        }
			if(moves < 500) {
				scores+= 100;
			} else if(moves < 550){
				scores+=50;
			}
			break;	
		}
}