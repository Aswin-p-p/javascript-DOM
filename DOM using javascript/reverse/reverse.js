function reverse() {
    var a=parseInt(document.getElementById("num1").value)
    var result=0;
    while(a>0)
    {
        r=a%10;
        result=result*10+r;
        a=parseInt(a/10);
    }
   document.getElementById("para").innerHTML=result
}
