let x = window.matchMedia("(min-width: 768px)");
let list = document.getElementById('list');

myFunction(x);
x.addListener(myFunction);
document.getElementById('btn').addEventListener("click", show);


function myFunction(x){
    if(x.matches){
        list.style.visibility = "visible";
    }else{
        list.style.visibility = "hidden";
    }
}

function show(){
    if(list.style.visibility == 'hidden'){
        visible();
    }else{
        hidden();
    }
}

function visible(){
    list.style.visibility = "visible";
}

function hidden(){
    list.style.visibility = "hidden";
}
