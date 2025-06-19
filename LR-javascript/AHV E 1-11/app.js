// function

function myFunction11(fullName, age, DoB = 1999) {
    console.log(`hi iam ${fullName} my boyos ${age} born ${DoB}`);
}
myFunction11('Abdullah', 27, 1998);

//Arrays
const codeLanguage = ['html', 'css', 'javasript', 'php', 'laraver'];

codeLanguage[9]= 'vue.js'; //change or extra add



console.log(codeLanguage);
console.log(codeLanguage[3]);//or (codeLanguage.at(3));
console.log(codeLanguage[codeLanguage - 1]);// alaways show last one 
// console.log(codeLanguage.toString());  
// console.log(codeLanguage.join (' % '));




//Objects literal
const newSymbol = Symbol ('key1');
const mobileModel = {
  //key: value
  brand: 'vivo',
  model:'v27',
  processor: 'snapDragon',
  camera: ['12MP', '5MP', '3MP'],
  zoomCamera: true,
   // To Explain Bracket Notation
  'selfie camera MP': 12,
   // Let me use symbol as keys in Object
   [newSymbol]: 'myKey1',
  brandModel: function () {
    return `Mobile Brand is ${this.brand} and model is ${this.model}`; },
  battery: { mah: 5000, mak: 40},
};

console.log(mobileModel);
console.log(mobileModel.brand);
console.log(mobileModel['selfie camera MP']);
console.log(mobileModel.brandModel());
console.log(mobileModel.battery.mah);

mobileModel.brand = 'oppo';
Object.freeze(mobileModel);
console.log(mobileModel.hasOwnProperty('camera'));

console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));

//multiple object combine
const ob1 = {
  a:1,
  b:2,
}
const ob2 = {
  c:1,
  d:2,
}
const ob3 = {
  e:1,
  f:2,
}
// const odFinale = Object.assign ( {}, ob1, ob2, ob3); or
const odFinale = { ...ob1, ...ob2, ...ob3};

//Objects constractor
function Person (first, last) { (this.firstName=first), (this.lastName=last);}
const persion1 = new Person ( 'ali', 'ahmed');
const persion2 = new Person ( 'Tahrim', 'Muhammad');
persion2.age = 18;

console.log(persion1);
console.log(persion2);



// Functions 1
function myProject (fullName, age, DoB = 1999) 

{console.log('hi' + ' iam ' + fullName + ' my boyos ' + age + ' born ' + DoB);};

myProject('ali', 30, 1998)
myProject('ahmed', 33, 1997)
myProject('tahrim', 26)

// Functions 2
function ifSub () {
  console.log('subscribe');}
document.getElementById('btn').addEventListener ('click', ifSub);

(function (massage){console.log(' i am self project ', massage);}) ('hello');

// function 3
let myName = function (x, y)
{ console.log('testing if me work or not');
  return x + y; };
console.log(myName (3,4));


let myName1 = function (x, y)
{ console.log('testing if me work or not');
  return x - y; };
console.log(myName1 (5,7));

// Functions 4
let numberMe = [2, 4, 6, 8, 1];
let sqNumber = numberMe.map (function (number) { return number * number;});
console.log(sqNumber);

let numberMe1 = [2, 4, 6, 8, 1];
let sqNumber1 = numberMe1.map (function (number) { return number + number;});
console.log(sqNumber1);

// function 5
let funArrey = function (x, y) { return x + y;};
console.log(funArrey(2, 2));
//or sortcut
let funArreyS = (x, y) => x/y;
console.log(funArreyS(10, 5));

// function 5 (function under function)
function funUfun (funMe) { function hi () 
  {alert (' as salamu alaikum ' + funMe);} return hi();}
funUfun ('Brother')


//data types (string, number, boolean, bigint, null, undefined, array, object)
let firstName = 'Muhammad';
let lastName = 'Tahrim';
let fullName = 'Tahrim Muhammad';
let finalName = `That is ${fullName}`;
console.log(finalName);

let fol = ['Mango', 'Jackfruit', 'Banana', 'jaam', 'Lichi']
fol[3]= 'Jamrol';
console.log(fol);

let students = {
  fullName: 'Ali Hasan',
  roll: 3,
  age: 19,
  dob: 1999,
}
console.log(students);

//Operators
let a = 2;
let b = 3;
console.log();

let c = '3';
let d = 4;
console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c!==d);
console.log(c>d);
console.log(c<d);
console.log(c>=d);
console.log(c<=d);

let r = 19;
let s = 18;
r = r + s;
r += s;
r -= s;
console.log(r);

let z = 19;
let m = 20;

console.log(m); m = z > m ? true : false;// or 
if (z>m) console.log(true); else console.log(false);


//veriable
let ami = 2;
let tumi = 98;
let country='banglaDesh'
let fruits = 'orange';

console.log( ami+ tumi );
console.log(ami - tumi);
console.log(ami * tumi);
console.log(ami / tumi);
console.log(ami % tumi);
console.log(country);
console.log(`My favorite ${fruits} is ff`);
console.log('My favorite ${fruits} is ff'); // single quite '-' not working, but `-` back quite working.

var se='amaar'
console.log(se);

const pro = 'love';
const pro2 = 90; //number frist not working like '2pro' but 'pro2'
const pro3 = 1;

console.log(pro);
console.log(pro2-pro3);


