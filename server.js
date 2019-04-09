var s=document.getElementById("s1");

if(s.state=="on"){
   s1="on";
}else{
  s1="off";
}

var s1;

var text = document.createElement("p");
text.setAttribute("x",500);
text.setAttribute("y",500);
text.style.fontSize = '50';

text.textContent = "Servers:"+s1;
document.body.appendChild(text);
