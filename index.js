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
 var days;
 var leapYr=[
  January={
    name:"January",
    days:31},
  February={
    name:"February",
    days:28},
  March={
    name:"March",
    days:31},
  April={
    name:"April",
    days:30},
  May={
    name:"May",
    days:31},
  June={
    name:"June",
    days:30},
  July={
    name:"July",
    days:31},
  August={
    name:"August",
    days:31},
  September={
    name:"September",
    days:30},
  October={
    name:"October",
    days:31},
  November={
    name:"November",
    days:30},
  December={
    name:"December",
    days:31}
 ];
console.log(leapYr.length);
for (i=0; i<=leapYr.length; i++){
  var monthlyTotal=(leapYr[i].days*totalmilkprod);
  console.log("Your Income for"+" "+leapYr[i].name+" "+"is"+" "+monthlyTotal)
};