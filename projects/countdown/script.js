const data = document.getElementById('data');
const button = document.getElementById('button');
const dayCount = document.getElementById('daycount');
const hourCount = document.getElementById('hourcount');
const minCount = document.getElementById('mincount');
const secCount = document.getElementById('seccount');

inputValue();
button.addEventListener("click", startCondition);

function startCondition(){      //button to stop and start counting(loop)
    if(button.innerHTML == "Start"){
        start();
    }else{
        stop();
    }
}

//value for date and time
function inputValue(){
    const valueDate = new Date();
    const yearValue = valueDate.getFullYear();
    let monthValue = ((valueDate.getMonth() + 1) < 10) ? "0" + ((valueDate.getMonth() + 1)) : (valueDate.getMonth() + 1);
    let maxMonthValue = ((valueDate.getMonth() + 4) < 10) ? "0" + ((valueDate.getMonth() + 4)) : (valueDate.getMonth() + 4);
    let dayValue = (valueDate.getDate() < 10) ? "0" + valueDate.getDate() : valueDate.getDate(); 
    const dateValue = yearValue + "-" + monthValue + "-" + dayValue;
    const maxDateValue = yearValue + "-" + maxMonthValue + "-" + dayValue;
    let hourValue = (valueDate.getHours() < 10) ? "0" + valueDate.getHours() : valueDate.getHours();
    let minuteValue = (valueDate.getMinutes() < 10) ? "0" + valueDate.getMinutes() : valueDate.getMinutes();
    const timeValue = hourValue + ":" + minuteValue;

    document.getElementById('date').value = dateValue;
    document.getElementById('date').min = dateValue;
    document.getElementById('date').max = maxDateValue;
    document.getElementById('time').value = timeValue;
}

function start(){
    data.style.visibility = "hidden";
    button.style.backgroundColor = "red";
    button.innerHTML = "Stop";
    startCount();
}

function startCount(){
    const currentDate = Date.now();     //date in milliseconds
    let inputDate = data.elements[0].value;     //getting input from user
    let inputTime = data.elements[1].value;
    let totalInput = inputDate + " " + inputTime;       //to get same format to get difference
    let inputDateTime = new Date(totalInput);       
    let inputMilli = inputDateTime.getTime();       //input date and time in milliseconds
    let countingTime = inputMilli - currentDate;       //difference in milliseconds
    let countingDays = Math.floor(countingTime / (24 * 60 * 60 * 1000));
    let countingHours = Math.floor((countingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let countingMinutes = Math.floor((countingTime % (60 * 60 * 1000)) / (60 * 1000));
    let countingSeconds = Math.floor((countingTime % (60 * 1000)) / (1000));

    displayStartCount(dayCount, countingDays);
    displayStartCount(hourCount, countingHours);
    displayStartCount(minCount, countingMinutes);
    displayStartCount(secCount, countingSeconds);

    if((countingDays == 0 && countingHours == 0 && countingMinutes == 0 && countingSeconds == 0) || countingTime <= 0){
        endCount(countingTime);  
    }

    if(button.innerHTML == "Stop"){
        setTimeout(startCount, 1000);
    }else{
        stop(); 
    }
}

function endCount(countingTime){
    stop();
    if(countingTime <= 0){
        alert("Please enter date and time to start countdown.");
    }else{
        alert("Tada!!!");
    }
}

function stop(){
    clearTimeout(startCount);
    data.style.visibility = "visible";
    button.style.backgroundColor = "green";
    button.innerHTML = "Start";
    inputValue();
    stopCount();
}

function stopCount(){
    displayEndCount(dayCount);
    displayEndCount(hourCount);
    displayEndCount(minCount);
    displayEndCount(secCount);
}

function displayStartCount(count, counting){
    if(counting < 10 && counting > -1){
        count.innerHTML = "0" + counting;
    }else{
        count.innerHTML = counting;
    }
}

function displayEndCount(count){
    count.innerHTML = "00";
}