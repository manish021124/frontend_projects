document.getElementById('btn').addEventListener("click", show);
document.getElementById('btn1').addEventListener("click", hide);

function show(){
    document.getElementById('list').style.width = "30%";
}

function hide(){
    document.getElementById('list').style.width = "0";
}