//var text="Arrow";


//var canvas=document.createElement("canvas");
//canvas.width=500;
//canvas.height=500;
//canvas.id="message";

//var c=canvas.getContext("2d");

//c.fillText(text,250,250)
//document.body.appendChild(canvas);

var s1="on";

var text = document.createElement("p");
text.setAttribute("x",500);
text.setAttribute("y",500);
text.style.fontSize = '50';

text.textContent = "Servers:"+s1;
document.body.appendChild(text);
