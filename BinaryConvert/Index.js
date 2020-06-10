function bin2Convert(){
    var bin = document.getElementById("binary").value;

    var dec = Number.parseInt(bin, 2);

    document.getElementById("result").innerHTML = dec;
}

document.getElementById("button").onclick = function(){
    bin2Convert();
};