function feet() {
    var feet=parseInt(document.getElementById("text1").value)
    var inches=parseInt(document.getElementById("text").value)
      feetintocm=feet*30.48
     inchesintocm=inches*2.54 
   var    result=feetintocm+inchesintocm
     
     
      document.getElementById("result").innerHTML=result 
                
}
    