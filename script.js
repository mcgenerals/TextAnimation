var text = "I love github!"; // Text
var elementId = "message"; // Element's ID
var interval = 1000; //Interval

var cur = "";
var i = 0;
function run(){
    if(cur==text){
       cur = "";
       i = 0;
       document.getElementById(elementId).innerHTML = "";
       return;
    }
    spl = text.split("");
    cur += spl[i];
    i++;
    document.getElementById(elementId).innerHTML = cur;

}
setInterval(run,interval);
// © 2023 MCGENERALS
