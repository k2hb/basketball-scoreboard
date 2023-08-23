let homePt = document.getElementById("homeScore");
let roadPt = document.getElementById("roadScore");
let point = 0;
let rPoint = 0;

function add1() {
  point += 1;
  homePt.innerText = point;
}

function add2() {
  point += 2;
  homePt.innerText = point;
}

function add3() {
  point += 3;
  homePt.innerText = point;
}

function minus1() {
  point -= 1;
  homePt.innerText = point;
}

function roadAdd1() {
  rPoint += 1;
  roadPt.innerText = rPoint;
}

function roadAdd2() {
  rPoint += 2;
  roadPt.innerText = rPoint;
}

function roadAdd3() {
  rPoint += 3;
  roadPt.innerText = rPoint;
}

function roadMinus1() {
  rPoint -= 1;
  roadPt.innerText = rPoint;
}
