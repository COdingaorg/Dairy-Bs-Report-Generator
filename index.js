var sheds=[
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
   var i;
  /*return ("Your Production in"+" "+sheds[i].name+" "+"is"+" "+sheds[i].litresProduced+" "+"Litres");*/
  console.log("Your Production in"+" "+sheds[i].name+" "+"is"+" "+sheds[i].litresProduced+" "+"Litres");
 };
 var totalmilkprod=sheds[0].litresProduced+sheds[1].litresProduced+sheds[2].litresProduced+sheds[3].litresProduced+sheds[4].litresProduced;
 console.log("Your Total milk production is "+" "+totalmilkprod+" "+"Litres");
 var revenue=function(newPrice, time){

  var wktotalProd=totalmilkprod*newPrice*time;
  var yrtotalProd=totalmilkprod*newPrice*time;
console.log("Your weekly income will be Kshs"+" "+wktotalProd);
console.log("Your yearly income will be Kshs"+" "+yrtotalProd);
 };
 revenue(45,7);
 var leapYr=[
  January={
    name:"January",
    Days:31},
  February={
    name:"February",
    Days:28},
  March={
    name:"March",
    Days:31},
  April={
    name:"April",
    Days:30},
  May={
    name:"May",
    Days:31},
  June={
    name:"June",
    Days:30},
  July={
    name:"July",
    Days:31},
  August={
    name:"August",
    Days:31},
  September={
    name:"September",
    Days:30},
  October={
    name:"October",
    Days:31},
  November={
    name:"November",
    Days:30},
  December={
    name:"December",
    Days:31}
 ];
console.log(leapYr.length);

}