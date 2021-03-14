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
  
 document.getElementById("reportA").innerHTML=sheds[2].name;