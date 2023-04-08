function number() {
    var a=parseInt(document.getElementById("num").value)
    var b=a%5
    if(b==0)
    {
        document.getElementById("result").innerHTML=" is multple of 5"
    }
 else{
    document.getElementById("result").innerHTML=" is not multple of 5"

 }
}