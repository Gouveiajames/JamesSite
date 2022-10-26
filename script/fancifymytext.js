function bigger() {
    document.getElementById("area").style.fontSize = "24pt";
}

function addStyle() {
    // uncheck the boryingbetty radio button if checked
    document.getElementById("boringBetty").checked = false;

    document.getElementById("area").style.fontWeight = "bold";
    document.getElementById("area").style.color = "blue";
    document.getElementById("area").style.textDecoration = "underline";
}

function removeStyles() {
    // uncheck the fancify button if checked
    document.getElementById("fancyShamcy").checked = false;
    document.getElementById("area").style.fontWeight = "normal";
    document.getElementById("area").style.color = "black";
    document.getElementById("area").style.textDecoration = "none";
}

function moo() {
    
    var txt = document.getElementById("area");
    txt.value = txt.value.toUpperCase();
    var sentences = txt.value.split('.');
    txt.value = sentences.join('-Moo');  
}



