let display=document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay() {
    display.value="";
}

function deleteChar() {
    display.value=display.value.slice(0,-1);
}

function calculate() {
    try {
        display.value=eval(display.value);
    } catch (e) {
        display.value="Error";
    }
}