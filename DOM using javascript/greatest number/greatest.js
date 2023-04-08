function greatest() {
    a=parseInt(document.getElementById("num1").value)
    b=parseInt(document.getElementById("num2").value)
    c=parseInt(document.getElementById("num3").value) 
  if(a>b)
  {
    if(a>c)
    {
        document.getElementById("para").innerHTML=a+" is greater"
    }
 
  }
  else if(b>c){
    document.getElementById("para").innerHTML=b+" is greater"
  }
  else{
    document.getElementById("para").innerHTML=c+" is greater"
  }


}