function amstrong(){
    var num=parseInt(document.getElementById("num").value) 
     var sum=0;
     temp=num
     var a;
     while(temp>0)
     {
        a=temp%10
        sum=sum+a*a*a
        temp=parseInt(temp/10)
     }
     if(sum==num)
     {
    document.getElementById("para").innerHTML=num+ " is amstrong"
     }
     else{
     document.getElementById("para").innerHTML=num+ " is not amstrong"
     } 
     
}