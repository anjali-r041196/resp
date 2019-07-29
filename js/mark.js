function grade(c,d)
{
  var a=(c/d)*100;
  if(a>=90)
  {
      return "A";
  }
  if(80<=a&&a<90)
  {
return "B";
  }
  if(65<=a&&a<80)
  {
return "C";
  }
  if(45<=a&&a<65)
  {
return "D";
  }
  if(30<=a&&a<45)
  {
return "E";
  }
  else
  {
      return "F";
  }
   
}
function getsts(a,b,c,d,e,f)
{
    if(a=="F"||b=="F"||c=="F"||d=="F"||e=="F"||f=="F")
    {
        return "fail";
    }
    else
    {
return "pass";
    }
}
function getmark()
{
var n1=document.getElementById("namei").value;
document.getElementById("result1").innerHTML="NAME: "+n1;
var n2=document.getElementById("semi").value;
document.getElementById("result2").innerHTML="SEM: "+n2;
var n3=document.getElementById("codei").value;
document.getElementById("result3").innerHTML="CODE: "+n3;
document.getElementById("result4").innerHTML="subject";
document.getElementById("result5").innerHTML="mark obtained";
document.getElementById("result6").innerHTML="tot mark";
document.getElementById("result7").innerHTML="grade";
document.getElementById("tony").innerHTML="status";
var n4=document.getElementById("sm1").value;
document.getElementById("result8").innerHTML=n4;
var n5=parseFloat(document.getElementById("sm2").value);
document.getElementById("result9").innerHTML=n5;
var n6=parseFloat(document.getElementById("sm3").value);
document.getElementById("result10").innerHTML=n6;
var b=grade(n5,n6);
document.getElementById("resulta").innerHTML=b;
var n7=document.getElementById("2sni").value;
document.getElementById("result11").innerHTML=n7;
var n8=parseFloat(document.getElementById("2smi").value);
document.getElementById("result12").innerHTML=n8;
var n9=parseFloat(document.getElementById("2sti").value);
document.getElementById("result13").innerHTML=n9;
var c=grade(n8,n9);
document.getElementById("resultb").innerHTML=c;
var n10=document.getElementById("3sni").value;
document.getElementById("result14").innerHTML=n10;
var n11=parseFloat(document.getElementById("3smi").value);
document.getElementById("result15").innerHTML=n11;
var n12=parseFloat(document.getElementById("3sti").value);
document.getElementById("result16").innerHTML=n12;
var d=grade(n11,n12);
document.getElementById("resultc").innerHTML=d;
var n13=document.getElementById("4sni").value;
document.getElementById("result17").innerHTML=n13;
var n14=parseFloat(document.getElementById("4smi").value);
document.getElementById("result18").innerHTML=n14;
var n15=parseFloat(document.getElementById("4sti").value);
document.getElementById("result19").innerHTML=n15;
var e=grade(n14,n15);
document.getElementById("resultd").innerHTML=e;
var n16=document.getElementById("5sni").value;
document.getElementById("result20").innerHTML=n16;
var n17=parseFloat(document.getElementById("5smi").value);
document.getElementById("result21").innerHTML=n17;
var n18=parseFloat(document.getElementById("5sti").value);
document.getElementById("result22").innerHTML=n18;
var f=grade(n17,n18);
document.getElementById("resulte").innerHTML=f;
var n19=document.getElementById("6sni").value;
document.getElementById("result23").innerHTML=n19;
var n20=parseFloat(document.getElementById("6smi").value);
document.getElementById("result24").innerHTML=n20;
var n21=parseFloat(document.getElementById("6sti").value);
document.getElementById("result25").innerHTML=n21;
var g=grade(n20,n21);
document.getElementById("resultf").innerHTML=g;
var z=getsts(b,c,d,e,f,g);
document.getElementById("sts").innerHTML=z;
}
