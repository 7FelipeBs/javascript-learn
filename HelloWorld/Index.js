var button = document.getElementById("button");
var checkButton;

function HelloWorld(){
    return document.getElementById("helloworld").innerText = "hello world";
};

document.getElementById("button").onclick = function(){
    HelloWorld();
}