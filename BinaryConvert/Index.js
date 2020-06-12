
function bin2Convert(){
    var bin = document.getElementById("binary").value;

    if(bin == '' || bin === String){
        alert("Please Insert a number!");
    } 

    else if(bin % 10 > 1){
        alert("Please insert a number binary valid!")
    }

    var dec = Number.parseInt(bin, 2);
    document.getElementById("result").innerHTML = dec;

}

document.getElementById("button").onclick = function(){
    bin2Convert();
};
