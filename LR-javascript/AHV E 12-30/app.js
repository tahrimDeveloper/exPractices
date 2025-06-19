
'use strick';
// Memoization

function square(num) { 
  return num * num;
}

function memoSqr() {
  let cache ={};
  return function MemoSquare(num) {
    if (num in cache) {console.log('from cache');
      console.log(cache); 
      return cache[num];  }
    else {
      const result = square(num);
      cache[num] = result;
      console.log('computing');
      return result;
    }};}

const resultFor = memoSqr();
console.log(resultFor(19));
console.log(resultFor(19));


// Loop (switch, while, if, else if....)
let difficulty = prompt('Choose difficulty (easy, medium, hard)').toLowerCase();

(difficulty);

//contitional Statments
let age = 26;

if (age > 19) {
  console.log('You are ready for marrage');}
else if (age < 15) {
  console.log('Wait your time will come soon');}
else if (age > 50) {
  console.log('you are too old');}
else {
  console.log ('Wait your time will come soon');}
console.log(age);

let vehicle = 'helicopter';
let vehicleType;

switch (vehicle) {
  case 'car': vehicleType = 'four ring vehicle';
  break
  case 'truck': vehicleType= 'strong four ring vehicle';
  break
  case 'motor bike': vehicleType= 'Risky vehicle';
  break
  case 'boat': vehicleType= 'no ring vehicle, but use water';
  break
  case 'helicopter': vehicleType= 'flying vehicle';
  break
  default: vehicleType= 'unknow vehicle'
}
console.log(vehicleType);

//project Ludo
let upValue = 6;
let lowValue =1;
let finaleValue = Math.ceil (Math.random() * (upValue - lowValue) + lowValue);
console.log(finaleValue);

function rollDise() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  let randomImage = 'image_ludo/' + randomNumber + '.png';
  document.getElementById('imgLudo').src = randomImage; }


// event
document.getElementById('btn').addEventListener ('click', function () {
document.getElementById('btn').innerHTML = 'Subscribed 😍';
},
true);

document.getElementById('like').addEventListener ('click', function () {
  document.getElementById('like').innerHTML = '<i class="fa-light fa-thumbs-up"> ✔ Liked</i>';
  document.getElementById('like').style.backgroundColor= '#ddd' ;
  document.getElementById('like').style.color= 'rgb(140, 14, 237)' ;
  },
  true);

