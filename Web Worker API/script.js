var w;
function startworker()
{
    if(typeof(Worker)!=="undefined")
    {
        if(typeof(w)=="undefined")
            {
                w=new Worker ("countdown.js");

            }
            w.onmessage=function(event)
            {
                document.getElementById("output").innerHTML=event.data;

            }
    }
    else{
        document.getElementById("data").innerHTML="sorry lala";

    }

}
function stopworker()
{
    w.terminate();
    w=undefined;

}
