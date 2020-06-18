//Create a system that when user enter some value into any part of border radius, change result instantly at box result inside bottom of page.
$(document).ready(function(){
    $("#topLeftBorder").on("input", function(){
        $("#resultTopLeft").text($(this).val());
    });

    $("#bottomLeftBorder").on("input", function(){
        $("#resultBottomLeft").text($(this).val());
    });

    $("#topRightBorder").on("input", function(){
        $("#resultTopRight").text($(this).val());
    });

    $("#bottomRightBorder").on("input", function(){
        $("#resultBottomRight").text($(this).val());
    });
});

function copyToClipBoard(){
    var copyBorderRadius = document.getElementById("textBorderRadius");

    copyBorderRadius.select();
    document.execCommand("copy");
}



//Create a system that when user click on copy, he will have stored this value for personal use..


//When user change value at box borde radius, appareance changed too