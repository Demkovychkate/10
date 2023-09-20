let res1 = document.querySelector('.result-one');
let res2 = document.querySelector('.result-two');
let res3 = document.querySelector('.result-three');
let res4 = document.querySelector('.result-four');
let res5 = document.querySelector('.result-five');

let numberOne = prompt( ' Введіть перше число',' ');
res1.innerHTML += numberOne;

let numberTwo = prompt( ' Введіть перше число',' ');
res2.innerHTML +=numberTwo;

let numberThree = prompt( ' Введіть перше число',' ');
res3.innerHTML += numberThree;

let mass = [numberOne,numberTwo,numberThree];
res4.innerHTML=mass;

let sum = 0;
for (let i=0; i<mass.length; i++)
  sum += parseFloat(mass[i]);

let avg = sum / mass.length;

res5.innerHTML= Math.floor(avg);
console.log (avg)
