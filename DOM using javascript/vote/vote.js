function vote() {
    var age=parseInt(document.getElementById("age").value)
    if(age>18)
    {
         if(age>=25)
         {
            document.getElementById("result").innerHTML=age+" your eligble to vote and contest"
         }
         else{
            document.getElementById("result").innerHTML=age+" your eligble to vote "
         }
        
    }
    else{
        document.getElementById("result").innerHTML=age+" your not eligble to vote "
    }
    

}