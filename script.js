var int=document.createElement("input");
int.setAttribute("type","date");
int.setAttribute("name","date");
int.setAttribute("id","date");

var bo=document.createElement("button");
bo.innerHTML="display data";
bo.setAttribute("class","btn btn-primary")
bo.addEventListener("click",displaydata);



var d1=document.createElement("div");
d1.append(int,bo);
d1.className="container text center";
d1.className="da";
document.body.append(d1);

var da1=document.createElement("div");
da1.setAttribute("id","display");
document.body.append(da1);




function displaydata(){
    var inputs=document.getElementById("date").value;
    if(Date.parse(inputs)){
    var inputdate=new Date(inputs);
    var currentdate=new Date();
    var millidiff=currentdate.getTime()-inputdate.getTime();
    var seconds=mathfloor(millidiff,1000);
    var minutes=mathfloor(seconds,60);
    var hours=mathfloor(minutes,60);
    var days=mathfloor(hours,24);
    var year=currentdate.getFullYear()-inputdate.getFullYear();
    var month1=(currentdate.getMonth()-inputdate.getMonth());
    var monthy=year*12;
    var month=month1+monthy;

    da1.innerHTML=`Given input data is ${currentdate} <br>
    year ${year} <br>
    Month ${month} <br>
    Days ${days} <br>
    Hour ${days} <br>
    Minutes ${minutes} <br>
    Seconds ${seconds} <br>
    Milliseconds ${millidiff} <br>`
        
    }
}
function mathfloor (value1,value2){
 return  Math.floor (value1/value2) ;
}





