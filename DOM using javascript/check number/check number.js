function number() {
    var a=parseInt(document.getElementById("num").value)
    if(a>0)
    {
        document.getElementById("result").innerHTML=a+" is postive number"
    }
    else if(a<0)
    {
        document.getElementById("result").innerHTML=a+" negative number"

    }
    else{
        document.getElementById("result").innerHTML=a+" is zero number"

    }
}