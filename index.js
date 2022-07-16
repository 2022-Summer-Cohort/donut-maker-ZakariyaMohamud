import DonutMaker from "./DonutMaker.js";

  let donutMaker = new DonutMaker(0,0,0);
  const donutCountEl =document.querySelector("#donut-count");
  const autoClickersEl = document.querySelector("#auto-clickers");
  const autoClickersCostEl = document.querySelector("#auto-clickers-cost")
  const donutMultiplierEl =document.querySelector("#donut-multiplier");
  const donutMultiplierCostEl =document.querySelector("#donut-multiplier-cost");
  let button =document.querySelector("#bake-donut");
  button.addEventListener("click",function(){
    donutMaker.bakeDonut();
    donutCountEl.innerText=Math.round(donutMaker.donutCount);



  })
 
  let autoClickerbutton = document.querySelector("#buy-auto-clicker");
  autoClickerbutton.addEventListener("click",function(){
    donutMaker.buyAutoClicker();
    donutCountEl.innerText= Math.round(donutMaker.donutCount);
    autoClickersEl.innerText=donutMaker.autoClickers;
    autoClickersCostEl.innerText =Math.round(donutMaker.autoClickersCost);
   
  })
    
 

  let multiplierbutton = document.querySelector("#buy-donut-multiplier");
  multiplierbutton.addEventListener("click",function(){
  donutMaker.buyDonutMultiplier();
  donutCountEl.innerText=Math.round(donutMaker.donutCount);
  donutMultiplierEl.innerText=donutMaker.donutMultiplier;
  donutMultiplierCostEl.innerText=Math.round(donutMaker.donutMultiplierCost);
   
})
let restartbtn=document.querySelector("#restart");
restartbtn.addEventListener("click",function(){
  donutMaker.restart();
  donutCountEl.innerText=Math.round(donutMaker.donutCount);
  autoClickersEl.innerText=donutMaker.autoClickers;
  donutMultiplierEl.innerText=donutMaker.donutMultiplier;
  donutMultiplierCostEl.innerText=Math.round(donutMaker.donutMultiplierCost);
  autoClickersCostEl.innerText =Math.round(donutMaker.autoClickersCost);
})
setInterval(() => {
  
  for(let i=0;i<donutMaker.autoClickers;i++){
    donutMaker.bakeDonut();
  }
  donutCountEl.innerText = Math.round(donutMaker.donutCount);
}, 1000);
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("MyBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
