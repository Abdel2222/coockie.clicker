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
const hidden = document.querySelector(".hidden");
function MuchCoockie() {
  clicks += 1;

  document.getElementById("score").innerHTML = clicks + " : Coockies";
  hidden.style.visibility = "hidden";
  document.getElementById("doublesc").disabled=false;
  if (clicks % 20 == 0) {
    alert("click for doublescore !!");
    hidden.style.visibility = "visible";
  }

  if (clicks == 100) {
    hidden.style.visibility = "visible";
    alert("ourahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh coockies explosion!!!!");
    clicks = 0;
  }
}
function DoubleScore() {
  if (clicks % 20 == 0) {
    doubleScore = clicks * 2;
    clicks = doubleScore;

    document.getElementById("score").innerHTML = doubleScore + " : Coockies";
    document.getElementById("doublesc").disabled=true;
  }
}
