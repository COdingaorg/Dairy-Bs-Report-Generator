var sheds=[//creates 5 sheds
  Shed_A={
    name:"Shed-A",
    litresProduced:Math.floor(Math.random()*1000),
  },
  Shed_B={
    name:"Shed-B",
    litresProduced:Math.floor(Math.random()*1000),
  }, 
  Shed_C={
    name:"Shed-C",
    litresProduced:Math.floor(Math.random()*1000),
  }, 
  Shed_D={
    name:"Shed-D",
    litresProduced:Math.floor(Math.random()*1000),
  }, 
  Shed_E={
    name:"Shed-E",
    litresProduced:Math.floor(Math.random()*1000),
  }];
    for (var i=0; i<sheds.length; i++){
      try{throw i}
      catch(ii) {
    document.getElementById("reportA").innerHTML="Your Production in"+" "+sheds[i].name+" "+"is"+" "+sheds[i].litresProduced+" "+"litres";
      }
  };
  var totalMilkProd=sheds[0].litresProduced+sheds[1].litresProduced+sheds[2].litresProduced+sheds[3].litresProduced+sheds[4].litresProduced+" "+"Litres";
  document.getElementById("totalPerDay").innerHTML=totalMilkProd;
 /*document.getElementById("test").innerHTML=sheds[2].name;
 for (var i=0; i<sheds.length; i++){
   //document.getElementById("reportA").innerHTML=
   console.log("Your Production in"+" "+sheds[i].name+" "+"is"+" "+sheds[i].litresProduced+" "+"litres");
   if(i<sheds.length){
   document.getElementById("reportA").innerHTML="Your Production in"+" "+sheds[i].name+" "+"is"+" "+sheds[i].litresProduced+" "+"litres"};
 };*/
 function calcTime(ppltr1, time){
   if (time="week"){
     document.getElementById("pricePerLitre").innerHTML="Your weekly income is"+week*ppltr1*totalMilkProd;
   }
   else if(time="year"){
     document.getElementById("pricePerLitre").innerHTML="Your Yearly income is"+year*ppltr1*totalMilkProd;
   };
 };
 calcTime(parseInt(document.getElementById("ppltr1").value),parseFloat(document.getElementById("time").value));