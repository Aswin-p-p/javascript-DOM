function dicount() {
    var num;
    var amount;

num=parseInt(document.getElementById("num").value)
if(num>1000)
{
   amount=(num/100)*90
  document.getElementById("result").innerHTML=amount
    
}
else{
      document.getElementById("result").innerHTML=num
}
    
}
dicount()