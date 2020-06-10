//Function for get history
function getHistory(){
    return document.getElementById("history-value").innerText;
}

//Function to print history calculer
function printHistory(num){
    return document.getElementById("history-value").innerText = num;
}

//Function for get output
function getOutput(){
    return document.getElementById("output-value").innerText;
}

//Function to print output calculer
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    } 
    
    //Print number with using function to format number
    else{
		document.getElementById("output-value").innerText = getFormattedNumber(num);
	}
}


//Function get string, transform Number, get this Number and format with toLocale and return this value
function getFormattedNumber(num){

    var n = Number(num);
    var value = n.toLocaleString(n);
    return value;
}

//Function show formated number after any comma
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

//get operator class in html
var operator = document.getElementsByClassName("operator");

//A function that scrolls through a collection of operator HTML
for(var i = 0; i < operator.length; i++){
    //Get a list element at position 'i',
    //Soon afterwards, every time you click, an event starts.
    operator[i].addEventListener('click', function(){

        //element "clear" of collection, every time will clear the screen.
        if(this.id=="clear"){
            printHistory("");
            printOutPut("");
        }

        else if (this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
        }		
        
        else{
            var output = getOutput();
            var history = getHistory();
            
			if(output=="" && history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
            }
            
			if(output!="" || history!=""){

                output= output==""?output:reverseNumberFormat(output);
                
                history=history+output;
                
				if(this.id=="="){
                    var result=eval(history);
                    
                    printOutput(result);
                    
                    printHistory("");    
				}
				else{
                    history=history+this.id;
                    
                    printHistory(history);
                    
                    printOutput("");
				}
			}
		}
	});
}

var number = document.getElementsByClassName("number");

for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){

        var output=reverseNumberFormat(getOutput());
        
        if(output!=NaN){ //if output is a number
            
            output=output+this.id;
            
			printOutput(output);
		}
	});
}
