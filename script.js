var body= document.getElementById("body");
var clock=document.getElementById("clock");
var mode=document.getElementById("bt");


var state = false;

function dosmth(){
  
   if (state){
      body.style.background="black";
      state=false;
   }
   else{
      body.style.background="rgb(185, 194, 188)";
      state=true;
   }

}


setInterval(()=> 
{

   d=new Date();
   hr=d.getHours();
   min=d.getMinutes();
   sec=d.getSeconds();

   hrotation = 30*hr + min/2;
   mrotation = 6*min;
   srotation = 6*sec;

   hour.style.transform = `rotate(${hrotation}deg)`;
   minute.style.transform = `rotate(${mrotation}deg)`;
   second.style.transform = `rotate(${srotation}deg)`;



},1000);