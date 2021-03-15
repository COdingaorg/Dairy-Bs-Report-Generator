var litresProduced;
var sheds=[
  shedA={
    name:"shed_A",
    litresProduced:Math.floor(Math.random()*1000)
  },
  shedB={
    name:"shed_B",
    litresProduced:Math.floor(Math.random()*1000)
  },
  shedC={
    name:"shed_C",
    litresProduced:Math.floor(Math.random()*1000)
  },
  shedD={
    name:"shed_D",
    litresProduced:Math.floor(Math.random()*1000)
  },
  shedE={
    name:"shed_E",
    litresProduced:Math.floor(Math.random()*1000)
  },
];
 /* sheds.forEach(litresProduced => {
    for(i=0; 1<sheds.length; i++){
    //document.getElementById("reportA").innerHTML="Your production in"+" "+sheds[i].name+" "+"is"+" "+sheds[i].litresProduced+" "+"Litres";
  };
});*/
var totalMilkProd=sheds[0].litresProduced+sheds[1].litresProduced+sheds[2].litresProduced+sheds[3].litresProduced+sheds[4].litresProduced;
document.getElementById("totalPerDay").innerHTML="Your Total Milk Production is"+" "+totalMilkProd+"Litres";
document.getElementById("shed1").innerHTML = "Your production in"+" "+sheds[0].name+" "+"is"+" "+sheds[0].litresProduced+" "+"Litres";
document.getElementById("shed2").innerHTML = "Your production in"+" "+sheds[1].name+" "+"is"+" "+sheds[0].litresProduced+" "+"Litres";
document.getElementById("shed3").innerHTML = "Your production in"+" "+sheds[2].name+" "+"is"+" "+sheds[0].litresProduced+" "+"Litres";
document.getElementById("shed4").innerHTML = "Your production in"+" "+sheds[3].name+" "+"is"+" "+sheds[0].litresProduced+" "+"Litres";
document.getElementById("shed5").innerHTML = "Your production in"+" "+sheds[4].name+" "+"is"+" "+sheds[0].litresProduced+" "+"Litres";
document.getElementById("ppltr1").value
//function that prints income.
function report(sellingPrice, time) {
  parseInt(document.getElementById("ppltr1").value);
  parseFloat(document.getElementById("time").value);
  var result=sellingPrice*time*totalMilkProd;
  var week=7;
  var year=366;
    if (time=week) {
      result=sellingPrice*week*totalMilkProd;
      document.getElementById("weekRevenue").innerHTML="Your Weekly income is Kshs"+" "+result;
    }
    else if (time=year) {
      result=sellingPrice*year*totalMilkProd;
        document.getElementById("yearRevenue").innerHTML="Your Yearly income is Kshs"+" "+result;
      }
    else {
      alert("Please choose time or enter value");
    };
};
//report(document.getElementById("ppltr1").value,document.getElementById("time").value);