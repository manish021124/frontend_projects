const images = ['url("1.jpg")', 'url("2.jpg")', 'url("3.jpg")'];
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const indicator1 = document.getElementById('indicator1');
const indicator2 = document.getElementById('indicator2');
const indicator3 = document.getElementById('indicator3');
let nextValue = 0;

glowBtn(btn1);
glowBtn(btn2);
glowBtn(indicator1);
glowBtn(indicator2);
glowBtn(indicator3);
moveNext();
btn1.addEventListener("click", leftNext);
btn2.addEventListener("click", rightNext);
indicator1.addEventListener("click", function(){jumpNext(0)});
indicator2.addEventListener("click", function(){jumpNext(1)});
indicator3.addEventListener("click", function(){jumpNext(2)});

function glowBtn(btn){
    btn.onmouseover = function(){glow(btn)};
    btn.onmouseout = function(){stopGlow(btn)};
}

function glow(a){
    a.style.color = '#ffffff';
}

function stopGlow(b){
    b.style.color = '#797575';
}

function rightNext(){
    nextValue += 1;
    if(nextValue >= images.length){
        nextValue = 0;
    }
    document.body.style.backgroundImage = images[nextValue];
}

function leftNext(){
    nextValue -= 1;
    if(nextValue < 0){
        nextValue = images.length - 1;
    }
    document.body.style.backgroundImage = images[nextValue];
}

function jumpNext(c){
    document.body.style.backgroundImage = images[c];
    nextValue = c;
}

function moveNext(){
    setInterval(next, 3000);
}

function next(){
    nextValue += 1;
    document.body.style.backgroundImage = images[nextValue];
    if(nextValue >= images.length){
        nextValue = -1;
    }
}
