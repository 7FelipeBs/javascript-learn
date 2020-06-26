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

function copyToClipBoard(element){

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function update(){
    var topLeft = document.getElementById("topLeftBorder").value;
    var topRight = document.getElementById("topRightBorder").value;

    var bottomLeft = document.getElementById("bottomLeftBorder").value;
    var bottomRight = document.getElementById("bottomRightBorder").value;

    if(topLeft == '' || topRight == '' || bottomLeft == '' || bottomRight == ''){
        return 0;
    }
    document.getElementById("imageInternal").style.borderTopLeftRadius = topLeft + '%';
    document.getElementById("imageInternal").style.borderTopRightRadius = topRight + '%';

    document.getElementById("imageInternal").style.borderBottomLeftRadius = bottomLeft + '%';
    document.getElementById("imageInternal").style.borderBottomRightRadius = bottomRight + '%';
}