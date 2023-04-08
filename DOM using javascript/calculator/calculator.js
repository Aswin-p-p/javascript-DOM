function cals(val) {
    document.getElementById("num").value=val
}
function cal(val) {
    document.getElementById("num").value+=val
}
function e() 
{
   cals(eval(document.getElementById("num").value))
    
}