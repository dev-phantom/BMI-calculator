const maleBtn = document.querySelector(".male-container");
let femaleBtn = document.querySelector(".female-container");
var range = document.querySelector("#slider").value;
let weightDisplay = document.querySelector('.result');
let AgeDisplay = document.querySelector('.display');
const WeightAddBtn = document.querySelector(".add");
const WeightSubBtn = document.querySelector(".subtract");
const AgeAddBtn = document.querySelector(".age-add");
const AgeSubBtn = document.querySelector(".age-subtract");
const calculateBtn = document.querySelector(".calculate");
let weight = 0;
let age = 0;
//adding eventlistner to the buttons

maleBtn.addEventListener('click', male);
femaleBtn.addEventListener('click', female);
WeightAddBtn.addEventListener('click', AddWeight);
WeightSubBtn.addEventListener('click', SubWeight);
AgeAddBtn.addEventListener('click', AddAge);
AgeSubBtn.addEventListener('click', SubAge);
calculateBtn.addEventListener('click', calculate);

//functions

function AddWeight() {
    weight++;
    weightDisplay.innerHTML = weight;
    alert("hello")
}
function SubWeight() {
    weight--;
    weightDisplay.innerHTML = weight;
}
function female() {
    alert('heloo')
}