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
let Cptend = 2;
function MuchCoockie() {
  clicks += 1;

  startime();
  bonuseconde = 1;

  document.getElementById("doublesc").innerHTML = "X" + Cptend+" 💪 ";

  score.style.backgroundImage = "url('c2.jpeg')";
  document.getElementById("doublesc").disabled = true;

  hiddenconfetie.style.visibility = "visible";
  hiddenconfetie.disabled = true;
  document.querySelector(".notif").style.visibility = "hidden";
  Autoclick.disabled = false;

  if (clicks % 35 == 0) {
    Double();

    hiddenconfetie.style.visibility = "visible";
    if (clicks < 0) {
      clicks = 0;
    }
  }
}
function Double() {
  if (clicks % 35 == 0 && Cptend > 0) {
    Cptend = Cptend * 2;
    clicks = clicks - Cptend;
    document.getElementById("doublesc").disabled = false;

    document.getElementById("doublesc").innerHTML =
      +Cptend + "for X 2 ";

    hiddenconfetie.style.visibility = "visible";
    hiddenconfetie.disabled = true;

    clicks = clicks * 2;
  }

  if (clicks < 0) {
    clicks = 0;
  }
  cptbonus--;
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
    hiddenconfetie.innerHTML = "Bonus 200%" + " 🎊  COCKIES X 5  ";
    hiddenconfetie.disabled = false;
    
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
  score.style.backgroundImage = "url('the-end.gif')";
  clicks = 0;
  document.getElementById("score").innerHTML =
    clicks + " : Coockies<br/>" + "READY:🎮";
  bonuseconde = 0;

  hiddenconfetie.innerHTML = "Bonus 200%" + " 😥" + bonuseconde;
  endtime();
  end = true;
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
  if (seconde > 30 && seconde < 40) {
    bonuseconde = bonuseconde + 1;

    document.querySelector(".notif").style.visibility = "visible";
    document.querySelector(".notif").innerHTML = " 10 SECONDES Bonus  💯";

    Autoclick.innerHTML =
      " BONUS = " + "( " + clicks + "+" + bonuseconde + ")<br/>";

    Autoclick.style.backgroundImage = "url('feteforaine1.gif')";
    document.querySelector(".notif").style.fontSize = "1.2rem";
    clicks = clicks + bonuseconde;
  } else {
    document.querySelector(".notif").style.visibility = "hidden";
  }

  if (minute == 1 && seconde == 10) {
    alert(" BONUS 200 % ");
   
      hiddenconfetie.style.visibility = "hidden";
      hiddenconfetie.disabled = false;
      BonusHidden();
      clicks = 500;
  
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
