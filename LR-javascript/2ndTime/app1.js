// alert('Hello World!');

let sentences = ' As salamu alaikum ya habibi. how are you Habibi? i think you happy with your new wife. you should thanks and say alhamdulillah for that habibi. that is my advicess for you habibi';

const matchHabibi = sentences.match(/habibi/gi);
const findHabibi = matchHabibi ? matchHabibi.length : 0;
console.log(findHabibi);




//loops

let forLoops = ['ami', 'tumi', 'se', 'tara'];
for (let x= 0; x < forLoops.length; x++) {
//console.log(forLoops[x]); + "br"
}

let forInLoops = { fName: 'Abdullah', lName: 'Muhammad', age: 26}

for ( x in forInLoops) {
  //console.log(x);
  //console.log(forInLoops[x]);
}

//Problem Salving episode-31

function randomNumber1() {
  return Math.floor(Math.random() * 10 + 1);
}
randomNumber1();
//console.log(randomNumber1());

const myStudents = ['Tamim', 'Ahmed', 'Sarah', 'Tahrim', 'Rajkumar', 'Abdullah', 'Babar']
//console.log(myStudents.sort());


const problem3= [4, 3, 5, 98, 65, 823, 923, 1]
problem3.sort(function (a, b){
  return a-b;
});
//console.log(problem3);

function leapYear(year) {
  if ( (year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {console.log(`${year} is Leap Year`);}
    else ( console.log(`${year} is not Leap year`))
} 
leapYear(1999);


//conditional statement

let age = 19;
if (age < 18) {
  console.log("Tumi Shuto Manush");}
else if (age > 40) {
  console.log('Apni Asoley Buraa');}
else { console.log('Apni Ready Achen');}

let age2 = 10;
let age3;
switch (age2) {
  case 18: 
    age3 = 'Tumi Asole Shuto Kids';
    break;
  case 19: 
    age3 ='Eta Amar Boyos noy';
    break;
  case 20: 
    age3 = 'kobe par korchi';
    break;
  default:
    age3 ='allah jane';}

console.log(age3);


//number
let rootNumber = 19; //integer or decimal
console.log(rootNumber.toString(2)); //binary
console.log(rootNumber.toString(8)); //octal
console.log(rootNumber.toString(16)); //hexadecimal

//Event

document.getElementById('btnn').addEventListener('click', function ifClickedEvent() { document.getElementById('btnn').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked viewers';}, true);


//function

function ifClicked() {console.log('viewer clicked on the button');}
document.getElementById('btnn').addEventListener('click', ifClicked);
// or
// document.getElementById('btnn').addEventListener('click', function(){console.log('viewer clicked on like');});

function project1(name, age, DoB = 1000) { console.log(`ami hocchi ${name} amar boyos ${age} ar jonmo saal ${DoB}`);}

project1('sakib', 25,);
project1('Tamim', 26, 1995);
project1('Johirul Islam', 27, 1998);
project1('Muhammad Ali Raju', 26, 1999);