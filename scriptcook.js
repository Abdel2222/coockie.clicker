/*const cookie = document.getElementById(cookie); //recuperer l element  dans l image cookie//
const updatescore = (cookies) => {
  const title = document.querySelector("title");
  const score = document.querySelector("#score span");
  score.innerText = cookies;
  title.innerHTML = cookies;
};*/
let clicks = 0;
let cptbonus=35;
let doubleScore = 1;
let newclick = 1;
let today = new Date();
const hidden = document.querySelector(".hidden");
const Slot = document.querySelector(".slot");
const Autoclick=document.querySelector(".Autoclick");
const emojis=[
  "🍪",
  "🍪",
  "🍪",
  "🍪",
  "🍪",
  "🍪",
];


function MuchCoockie() {
  clicks += 1;
  let Seconds = today.getMilliseconds();
  document.getElementById("score").innerHTML =
    clicks + " : Coockies<br/>" + Seconds + "  times games";
  hidden.style.visibility = "hidden";
  document.getElementById("doublesc").disabled = true;
  if (clicks % 25 == 0) {
    alert("click for doublescore !!");
    hidden.style.visibility = "visible";
    document.getElementById("doublesc").disabled = false;
   
  }
  if (clicks == 100) {
    hidden.style.visibility = "visible";
    Autoclick.Autoclicker();
    alert("ourahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh coockies explosion!!!! ");
  }
}
function Double() {
  if (clicks % 25 == 0 && cptbonus>0) {
    alert("You ll make it for 35: ");
    doubleScore = clicks * 2;
    clicks = clicks- cptbonus;
    if(clicks<0){
      clicks=0;

    }
    cptbonus--;
    document.getElementById("score").innerHTML =
      doubleScore + " : Coockies<br/>";
    document.getElementById("doublesc").disabled = true;
  } else if (clicks == 100) {
    document.getElementById("score").innerHTML =
      clicks + " : Coockies soon FINITO !!!!";
  } else {
    clicks = 0;
    document.getElementById("score").innerHTML =
      clicks + " : Coockies shit f!!!!";
  }
}
function splashcoockie(){
  for(let i=0;i<20;i++)
  {
    const confeticoockie= document.createElement("div"); /*create element in div*/
    confeticoockie.innerText=emojis[Math.floor(Math.random() * emojis.length)];/*tirer un coockie au hazard et le x 20*/
    Slot.appendChild(confeticoockie);/*ajouter la variable emoji confeti aux enfants du div Slot*/

  }
}

function BonusHidden() {
  

hidden.style.backgroundColor = "green";


}
function Autoclicker() {
  setInterval(() => {
    Autoclick.click();
    
  }, 100)

}

