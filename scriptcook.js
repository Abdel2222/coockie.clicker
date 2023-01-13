/*const cookie = document.getElementById(cookie); //recuperer l element  dans l image cookie//
const updatescore = (cookies) => {
  const title = document.querySelector("title");
  const score = document.querySelector("#score span");
  score.innerText = cookies;
  title.innerHTML = cookies;
};*/
let clicks = 0;
let doubleScore = 1;
let newclick = 1;
let today = new Date();
const hidden = document.querySelector(".hidden");

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
  if (clicks == 165) {
    hidden.style.visibility = "visible";
    alert("ourahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh coockies explosion!!!! ");
  }
}
function Double() {
  if (clicks % 25 == 0) {
    doubleScore = clicks * 2;
    clicks = doubleScore;
    document.getElementById("score").innerHTML =
      doubleScore + " : Coockies<br/>";
    document.getElementById("doublesc").disabled = true;
  } else if (clicks == 150) {
    document.getElementById("score").innerHTML =
      clicks + " : Coockies soon FINITO !!!!";
  } else {
    clicks = 0;
    document.getElementById("score").innerHTML =
      clicks + " : Coockies so FINITO !!!!";
  }
}

function BonusHidden() {
  let newbtn = document.querySelector(".hidden");

  newbtn.style.backgroundColor = "green";
}
