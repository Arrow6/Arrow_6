var text="Arrow";


var canvas=document.createElement("canvas");
canvas.width=500;
canvas.height=500;
canvas.id="message";

var c=canvas.getContext("2d");

c.fillText(text,250,250)
document.body.appendChild(canvas);
