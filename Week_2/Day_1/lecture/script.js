function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}


function turtles () {
    console.log("Ninja Turtles Are The Best Turtles!")
}

var num = 0
function counter() {
    num += 1
    console.log(num)
}

function example(element) {
    console.log("element clicked", element);
}

function turnOff(element) {
    element.innerText = "Off";
}

function hide(element) {
    element.remove();
}