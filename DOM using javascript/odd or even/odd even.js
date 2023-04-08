function number() {
    var a=parseInt(document.getElementById("num").value)
    if(a%2==0)
    {
        document.getElementById("result").innerHTML=a+" is even number"
    }
    else{
        document.getElementById("result").innerHTML=a+ " is odd number"
    }
}