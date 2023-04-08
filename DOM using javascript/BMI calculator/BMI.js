function bmi(){
  var height=parseFloat(document.getElementById("input").value)
  console.log(height);
  var weight=parseInt(document.getElementById("input2").value)
  console.log(weight);
  var  a=(height**2)
  console.log(a);

  var bmi=(weight/a)
  console.log(bmi);

  document.getElementById("result").innerHTML=bmi

  if(bmi<18)
  {
    document.getElementById("result1").innerHTML="under weight"
  }
  else if(bmi<=25)
  {
    document.getElementById("result1").innerHTML="Normal"
  }
  else 
  {
    document.getElementById("result1").innerHTML="over weight"
  }
  document.getElementById("result").innerHTML=bmi
}