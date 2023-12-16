const time = document.querySelector(".time");
let [second,minute,hour] = [0,0,0];
let stoptime = null;

function starttime(){
    second++;
    if(second >= 60){
        second = 0;
        minute++;
        if(minute >= 60){
            minute = 0;
            hour++;
        }
    }

    let s = second < 10 ? "0" + second : second;
    let m = minute < 10 ? "0" + minute : minute;
    let h = hour < 10 ? "0" + hour : hour;


    time.innerHTML = h +":"+ m + ":" + s;




}



function start(){
    if(stoptime !== null){
        clearInterval(stoptime);

    }

    stoptime = setInterval(starttime, 1000);
    
}


function watchstop(){
    clearInterval(stoptime);


}


function reset(){
    clearInterval(stoptime);
    let [second,minute,hour] = [0,0,0];
    time.innerHTML = "00:00:00";

}