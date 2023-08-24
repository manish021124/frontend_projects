let count = 0;

dispalyCount();

document.getElementById("btnPlus").addEventListener("click", addCount);
document.getElementById("btnMinus").addEventListener("click", minusCount);
document.getElementById("btnReset").addEventListener("click", resetCount);

function dispalyCount(){
    document.getElementById("count").innerHTML = count;
}

function addCount(){
    count = count + 1;
    dispalyCount();
}

function minusCount(){
    count = count - 1;
    dispalyCount();
}

function resetCount(){
    count = 0;
    dispalyCount();
}



