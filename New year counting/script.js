//step 1
//creating Dom element
const Days=document.getElementById("Days");
const Hours=document.getElementById("Hours");
const Minutes=document.getElementById("Minutes");
const Seconds=document.getElementById("Seconds");
const countdown=document.getElementById("countdown");
const year= document.getElementById("year");
const loading=document.getElementById("loading");

const currentyear=new Date().getFullYear();
//console.log(currentyear)
const newyeartime=new Date(`JANUARY 01 ${currentyear+1} 00:00:00`);

year.innerText=currentyear+1;

//step 5
//creting fuction update
function updatecountdown()
{
    const currenttime=new Date();
    const difference=newyeartime-currenttime;
    //console.log(difference);
    //step - 6
    //1000-mili second to seconds
    //60=1hr->60mins
    ///1min =60secs
    //24=24hours
    const d=Math.floor(difference/1000/60/60/24);
    const h=Math.floor(difference/1000/60/60) %24;
    const m=Math.floor(difference/1000/60) %24;
    const s=Math.floor(difference/1000) %60;


    //step 7
//adding value to dom variable

    Days.innerHTML=d;
    Hours.innerHTML=h;
    Minutes.innerHTML=m;
    Seconds.innerHTML=s;

}
//updatecountdown();
setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex";
},1000);


setInterval(updatecountdown,1000);
