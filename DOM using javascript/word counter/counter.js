function btn() {
     var word=document.getElementById("input").value 
     
    numofwords=word.split(' ')
    count=numofwords.length
  document.getElementById("result").innerHTML=count
      
}
