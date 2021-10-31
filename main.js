window.addEventListener("keydown", keydown);
var pressed;
var keys = [];

function keydown(e) {
    pressed = e.keyCode;
    if(pressed >= 65 && pressed <= 90){
        // Capitals
        document.getElementById("text").innerHTML=" an alphabet key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else if(pressed >= 97 && pressed <= 122){
        // Small letters
        document.getElementById("text").innerHTML=" an alphabet key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else if(pressed >= 48 && pressed <= 57){
        // Numbers
        document.getElementById("text").innerHTML=" a number key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else if(pressed >= 37 && pressed <= 40){
        // Arrows
        document.getElementById("text").innerHTML=" an arrow key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else if(pressed == 17){
        // ctrl
        document.getElementById("text").innerHTML=" the control(ctrl) key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else if(pressed == 18){
        // alt
        document.getElementById("text").innerHTML=" the alternate(alt) key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else if(pressed == 27){
        // esc
        document.getElementById("text").innerHTML=" the escape(esc) key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    } else{
        // others
        document.getElementById("text").innerHTML=" an unrecognised key key.";
        console.log(pressed);
        keys.push(pressed);
        document.getElementById("list").innerHTML = keys;
    }
}