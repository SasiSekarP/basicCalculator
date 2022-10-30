'use strict'

let display = ''

function add(a) {
    display =display.split('')
    display.push(a);
    display = display.join('')
    console.log(display)
    document.getElementById('display').innerText = display;
}

function calc() {
    let splitValue = String(eval(display)).split('.')
    display = Number(eval(display));
    display = String(eval(display));
    console.log(display);
    document.getElementById('display').innerText =   display;
    if (splitValue.length === 1) {
        display = String(eval(display));
        console.log(display);
        document.getElementById('display').innerText =   display;
    } else {
        let onlyDecimalValue = String(display - Math.floor(display)).split('')
        onlyDecimalValue.shift();
        let onlyDecimalValueLen = onlyDecimalValue.length;
        console.log(onlyDecimalValue)
        console.log(onlyDecimalValueLen)
        if (onlyDecimalValueLen >= 16) {
            display = (Number(display)).toFixed(15)
            console.log(display)
            document.getElementById('display').innerHTML = display;
        } else {
            document.getElementById('display').innerHTML = display;
        }
    }
}

function remove() {
    display =display.split('')
    display.pop()
    display = display.join('')
    console.log(display)
    document.getElementById('display').innerText = display;
}