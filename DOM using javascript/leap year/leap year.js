function year() {
    var year=parseInt(document.getElementById("year").value)
    if(year%4==0)
    {
        document.getElementById("result").innerHTML=year+" is leap year"
    }
    else{
        document.getElementById("result").innerHTML=year+" is not leap year"

    }
}