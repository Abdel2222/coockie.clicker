let clicks = 0;
let cptbonus = 35;
let doubleScore = 1;
let newclick = 1;
let bonuseconde = 0;
let minute = 0;
let seconde = 0;
let hour = 0;
let timeout;
let start = true;
let end = true;
let stp = true;
const hiddenconfetie = document.querySelector(".hiddenconfetie");
const Spt = document.querySelector(".slot");
const Autoclick = document.getElementById("autoclick");
const emojis = ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪"];
const coockie = document.querySelector(".coockie");
const score = document.querySelector(".score");
const reset = document.getElementById("reset");
let Cptend = 0;
function MuchCoockie() {
  clicks += 1;
  startime();

  document.getElementById("doublesc").innerHTML = "X" + " 💪 " ;

  score.style.backgroundImage = "url('c2.jpeg')";
  document.getElementById("doublesc").disabled = false;
  reset.style.visibility = "hidden";
  hiddenconfetie.style.visibility = "hidden";
  document.querySelector(".notif").style.visibility = "hidden";
  Autoclick.disabled= false;
  document.getElementById("doublesc").disabled = true;

  if (clicks % 15 == 0) {
    
    hiddenconfetie.style.visibility = "visible";
    bonuseconde + 3;
    document.querySelector(".notif").visibility="visible";

    document.getElementById("doublesc").disabled = false;
  }
  bonuseconde++;

  if (bonuseconde > 35) {
  
    score.style.backgroundImage = "url('the-end.gif')";
    reset.style.visibility = "visible";

    alert("bonus seconde > 20 👎 !"+  
    "reset to start!"
   +" 🎬  RREFFRESHHHH");
 

    Cptend++;
    endtime();
  }
}
function Double() {
  if (clicks % 15 == 0 && cptbonus > 0) {
    alert("You ll make it for 35: ");
    ;
    document.querySelector(".notif ").style.visibility="visible";
    hiddenconfetie.style.visibility = "visible"

    doubleScore = clicks * 2;
    document.getElementById("doublesc").innerHTML = "X" + " 💪 " + bonuseconde ;
    
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
    duration: 3,
  }).to(".slot div", { autoAlpha: 0, duration: 0.3 }, "=0.2");
}
function Reset() {
  clicks = 0;
  document.getElementById("score").innerHTML =
    clicks + " : Coockies<br/>" + "READY:🎮";
  document.getElementById("reset").disabled = false;
  bonuseconde = 0;
  hiddenconfetie.style.visibility = "visible";
  hiddenconfetie.innerHTML = "Bonus 200%" + " 😥" + bonuseconde;
  endtime();
}
function startime() {
  if (end) {
    end = false;
    defilerTemps();
  }
}
function endtime() {
  if (!end) {
    end: true;
    clearTimeout(timeout);
  }
}
function defilerTemps() {
  if (end) return;

  seconde = parseInt(seconde);
  minute = parseInt(minute);
  hour = parseInt(hour);
  seconde++;
  if (seconde == 60) {
    minute++;
    seconde = 0;
  }
  if (minute == 60) {
    hour++;
    minute = 0;
  }
  if (seconde < 10) {
    seconde = "0" + seconde;
  }
  if ( seconde >15 && seconde< 25 ) {
    bonuseconde-3;
    clicks * 4;
    Autoclick.innerHTML=" BONUS*4 = "+ "(" +bonuseconde +")";
   
    document.querySelector(".notif").style.visibility = "visible";
    document.querySelector(".notif").innerHTML=" 10 SECONDES AUTOCLICKER";
    document.querySelector(".notif").style.fontSize="1.2rem";
    
  }
  else {
    document.querySelector(".notif").style.visibility = "hidden";

  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  document.getElementById("score").innerHTML =
    clicks + " : Coockies<br/>" + hour + " : " + minute + " : " + seconde;
  timeout = setTimeout(defilerTemps, 600);
}
