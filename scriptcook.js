/*const cookie = document.getElementById(cookie); //recuperer l element  dans l image cookie//
const updatescore = (cookies) => {
  const title = document.querySelector("title");
  const score = document.querySelector("#score span");
  score.innerText = cookies;
  title.innerHTML = cookies;
};*/
let clicks = 0;
let cptbonus = 35;
let doubleScore = 1;
let newclick = 1;
let bonuseconde = 0;
let today = new Date();
const hiddenconfetie = document.querySelector(".hiddenconfetie");
const Spt = document.querySelector(".slot");
const Autoclick = document.querySelector(".autoclick");
const emojis = ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪"];
const coockie = document.querySelector(".coockie");
const score = document.querySelector(".score");
const reset = document.getElementById("reset");
let Cptend = 0;
function MuchCoockie() {
  clicks += 1;
  let Seconds = today.getMilliseconds();
  document.getElementById("score").innerHTML =
    clicks + " : Coockies<br/>" + "00:00:00";
  score.style.backgroundImage = "url('c2.jpeg')";
  document.getElementById("doublesc").disabled = false;
  reset.style.visibility = "hidden";
  hiddenconfetie.style.visibility = "hidden";

  document.getElementById("doublesc").disabled = true;
  if (clicks % 15 == 0) {
    alert("click for doublescore !! or wait for a big surprise 🤲");
    hiddenconfetie.style.visibility = "visible";
    bonuseconde + 10;

    document.getElementById("doublesc").disabled = false;
  }
  bonuseconde++;

  if (bonuseconde > 50) {
    score.style.backgroundImage = "url('the-end.gif')";
    reset.style.visibility = "visible";

    alert("game overrrrrrrrrrrrrrrrrrr ! presse reset to start!");

    Cptend++;
  }
}
function Double() {
  if (clicks % 15 == 0 && cptbonus > 0) {
    alert("You ll make it for 35: ");
    hiddenconfetie.style.visibility = "visible";

    doubleScore = clicks * 2;
    document.getElementById("doublesc").innerHTML = "X" + " 💪 " + cptbonus;
  }

  clicks = clicks - cptbonus;
  if (clicks < 0) {
    clicks = 0;
  }
  cptbonus--;
  document.getElementById("score").innerHTML = doubleScore + " : Coockies<br/>";
  document.getElementById("doublesc").disabled = true;
}

function Splashcoockie() {
  for (let i = 0; i < 50; i++) {
    const confeti = document.createElement("div"); /*create element in div*/
    confeti.innerText =
      emojis[
        Math.floor(Math.random() * emojis.length)
      ]; /*tirer un coockie au hazard et le x 20*/
    Spt.appendChild(
      confeti
    ); /*ajouter la variable emoji confeti aux enfants du div Slot*/
  }
}

function BonusHidden() {
  for (let i = 0; i < 50; i++) {
    const confeti = document.createElement("div"); /*create element in div*/
    confeti.innerText =
      emojis[
        Math.floor(Math.random() * emojis.length)
      ]; /*tirer un coockie au hazard et le x 20*/
    Spt.appendChild(
      confeti
    ); /*ajouter la variable emoji confeti aux enfants du div Slot*/
    hiddenconfetie.innerHTML = "Bonus 200%" + " 🎊 " + bonuseconde;
  }

  animateConfetticoochies();
}
function animateConfetticoochies() {
  const TCONF = gsap.timeline();
  TCONF.to(".slot div ", {
    y: "random(-100,100)",
    x: "random(-100,100)",
    z: "random(0,1000)",
    rotation: "random(-90,90)",
    duration: 2,
  });
}
function Reset() {
  clicks = 0;
  document.getElementById("score").innerHTML =
    clicks + " : Coockies<br/>" + "READY:🎮";
  document.getElementById("reset").disabled = false;
  bonuseconde = 0;
  hiddenconfetie.style.visibility = "visible";
}
