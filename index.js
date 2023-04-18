let count = 0;

document.getElementById("decreaseButton").onclick = function(){
    count = count - 1;
    document.getElementById("myLabel").innerHTML = count;
}


document.getElementById("increaseButton").onclick = function(){
    count = count + 1;
    document.getElementById("myLabel").innerHTML = count;
}


document.getElementById("resetButton").onclick = function(){
    count = 0;
    document.getElementById("myLabel").innerHTML = count;
}
// -------------------------------------------------------------------------------------


let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;

console.log(x)
console.log(y)
console.log(z)