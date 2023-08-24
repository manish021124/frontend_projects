function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + " : " + m + " ";
    var sec = ": " + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.getElementById("MySecDisplay").innerText = sec;
    document.getElementById("MySecDisplay").textContent = sec;
    
    setTimeout(showTime, 1000);
    
}

function nightMode(){
     const checkbox = document.getElementById('checkbox')

     document.body.classList.toggle('dark-mode');
}

showTime();
checkbox.addEventListener('change', nightMode);



