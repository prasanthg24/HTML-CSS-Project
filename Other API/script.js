/*var n=document.getElementById("para");
function getlocation()
{
    if(navigator.geolocation)
    {
        
       navigator.geolocation.getCurrentPosition(showposition,errorposition);
    }
    else
    {
        n.innerHTML="geolocation not supported";
    }


}
function showposition(position)
{
    n.innerHTML="lat : "+position.coords.latitude+" <br> lon :"+position.coords.longitude;


}
function errorposition(position)
{
    console.log("Unable to find the user location");
}
WEB STORAGE API*/

if(typeof(Storage)!=="undefined")
{
    localStorage.setItem("fristname","lala");
    localStorage.setItem("country","indian");
    
}
document.getElementById("para").innerHTML=localStorage.getItem("frist");