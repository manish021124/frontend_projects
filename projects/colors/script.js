const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let totalRandom = '';

document.getElementById("myBtn").addEventListener("click", createColor);

function createColor(){
    for(i = 0; i < 6; i++){
        let random = value[Math.floor(Math.random() * value.length)];
        totalRandom += random;
    }
    document.body.style.backgroundColor = '#' + totalRandom;
    document.getElementById("colorName").innerHTML = '#' + totalRandom;
    totalRandom = '';
}




