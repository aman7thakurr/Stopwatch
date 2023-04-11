let display=document.querySelector('.display');
let stopBtn=document.getElementById('stopBtn');
let startBtn=document.getElementById('startBtn');
let resetBtn=document.getElementById('resetBtn');
let msec = 00;
let secs = 00;
let mins = 00;
let timerId=null;

startBtn.addEventListener('click',function(){
   if(timerId !==null){
    clearInterval(timerId);
   }
    timerId= setInterval(timer,10);
});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
 });

 resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    display.innerHTML=`00:00:00`;
    msec=secs=mins=00;
 });
function timer(){
    msec++;

    if(msec==100){
        msec=0;
        secs++;

        if(secs==60){
            secs=0;
            mins++;
        }
    }
    let msString = msec<10 ? `0${msec}`: msec;
    let secsString = secs<10 ? `0${secs}`: secs;
    let minsString = mins<10 ? `0${mins}`: mins;

    display.innerHTML=`${minsString} : ${secsString} : ${msString}`;
}