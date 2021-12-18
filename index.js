const maleBtn = document.querySelector(".male-container");
const femaleBtn = document.querySelector(".female-container");
let weightDisplay = document.querySelector('.results');
const HeightDisplay = document.querySelector('.result')
let AgeDisplay = document.querySelector('.display');
const WeightAddBtn = document.querySelector(".add");
const WeightSubBtn = document.querySelector(".subtract");
const AgeAddBtn = document.querySelector(".age-add");
const AgeSubBtn = document.querySelector(".age-subtract");
const calculateBtn = document.querySelector(".calculate");
let weight = 0;
let age = 0;

//  functions
function AddWeight() {
    weight++;
    weightDisplay.innerHTML = weight;
    
}
function SubWeight() {
    weight--;
    weightDisplay.innerHTML = weight;
}
function AddAge() {
    age++;
    AgeDisplay.innerHTML = age; 
}
function SubAge() {
    age--;
    AgeDisplay.innerHTML = age;
}
function male() {
    //ll
}
function female() {
    alert('heloo')
}
function calculate() {
    const height = document.getElementById('slider').value;
    let bmi = weight/height;
    let answer = document.querySelector('.answer');
    let status = document.querySelector('.status');
    if (bmi < 18.5) {
        status.innerHTML = "your body mass index is below normal please try to eat well your are underweight";
        answer.innerHTML = "your BMI is " + bmi;
    }
    else{
        answer.innerHTML = "you are good shape";
    }
}
//adding eventlistner to the buttons

maleBtn.addEventListener('click', male);
femaleBtn.addEventListener('click', female);
WeightAddBtn.addEventListener('click', AddWeight);
WeightSubBtn.addEventListener('click', SubWeight);
AgeAddBtn.addEventListener('click', AddAge);
AgeSubBtn.addEventListener('click', SubAge);
calculateBtn.addEventListener('click', calculate);


