var i=0;
function timecount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timecount()",1000
    );
}
timecount();