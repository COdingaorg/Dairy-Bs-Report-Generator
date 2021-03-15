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
  parseFloat(document.getElementById("time1"&&"time2").value);
  var result=sellingPrice*time*totalMilkProd;
  var week=7;
  var year=366;
  var sellingPrice=45;
    if (time=week) {
      result=sellingPrice*week*totalMilkProd;
      document.getElementById("weekRevenue").innerHTML="Your Weekly income is Kshs"+" "+result;
    };
    if (time=year) {
      result=sellingPrice*year*totalMilkProd;
        document.getElementById("yearRevenue").innerHTML="Your Yearly income is Kshs"+" "+result;
      }
    else {
      print("Please choose time or enter value");
    };
};
//report(document.getElementById("ppltr1").value,document.getElementById("time").value);
//creates object months for leap year
 var month1={
  name:"January",
  days:31
 };
 var month2={
   name:"February",
   days:29
 };
 var month3={
  name:"March",
  days:31
};
var month4={
  name:"April",
  days:30
};
var month5={
  name:"May",
  days:31
};
var month6={
  name:"June",
  days:30
};
var month7={
  name:"July",
  days:31
};
var month8={
  name:"August",
  days:31
};
var month9={
  name:"September",
  days:30
};
var month10={
  name:"October",
  days:31
};
var month11={
  name:"November",
  days:30
};
var month12={
  name:"December",
  days:31
};
var sellingPrice=45;
document.getElementById("leapReport").innerHTML="Amount in Kshs";
document.getElementById("january").innerHTML="Your income for"+" "+month1.name+" "+"is"+" "+month1.days*totalMilkProd;
document.getElementById("february").innerHTML="Your income for"+" "+month2.name+" "+"is"+" "+month2.days*totalMilkProd*sellingPrice;
document.getElementById("march").innerHTML="Your income for"+" "+month3.name+" "+"is"+" "+month3.days*totalMilkProd*sellingPrice;
document.getElementById("april").innerHTML="Your income for"+" "+month4.name+" "+"is"+" "+month4.days*totalMilkProd*sellingPrice;
document.getElementById("may").innerHTML="Your income for"+" "+month5.name+" "+"is"+" "+month5.days*totalMilkProd*sellingPrice;
document.getElementById("june").innerHTML="Your income for"+" "+month6.name+" "+"is"+" "+month6.days*totalMilkProd*sellingPrice;
document.getElementById("july").innerHTML="Your income for"+" "+month7.name+" "+"is"+" "+month7.days*totalMilkProd*sellingPrice;
document.getElementById("august").innerHTML="Your income for"+" "+month8.name+" "+"is"+" "+month8.days*totalMilkProd*sellingPrice;
document.getElementById("september").innerHTML="Your income for"+" "+month9.name+" "+"is"+" "+month9.days*totalMilkProd*sellingPrice;
document.getElementById("october").innerHTML="Your income for"+" "+month10.name+" "+"is"+" "+month10.days*totalMilkProd*sellingPrice;
document.getElementById("november").innerHTML="Your income for"+" "+month11.name+" "+"is"+" "+month11.days*totalMilkProd*sellingPrice;
document.getElementById("december").innerHTML="Your income for"+" "+month12.name+" "+"is"+" "+month12.days*totalMilkProd*sellingPrice;
var totalYearIncome=(month1.days*totalMilkProd)+(month2.days*totalMilkProd*sellingPrice)+(month3.days*totalMilkProd*sellingPrice)+(month4.days*totalMilkProd*sellingPrice)+(month5.days*totalMilkProd*sellingPrice)+(month6.days*totalMilkProd*sellingPrice)+(month7.days*totalMilkProd*sellingPrice)+(month8.days*totalMilkProd*sellingPrice)+(month9.days*totalMilkProd*sellingPrice)+(month10.days*totalMilkProd*sellingPrice)+(month11.days*totalMilkProd*sellingPrice)+(month12.days*totalMilkProd*sellingPrice);
document.getElementById("totalYear").innerHTML="Your total income for the year is"+" "+totalYearIncome;

