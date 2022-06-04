const auth = prompt('Enter the secret value');

if (auth === 'budget') {
if (window.innerWidth < 1150) {
document.body.innerHTML = `<h3>Not for small devices, :(</h3>`;
}

// Constants
const dropdownOne = document.querySelector('.dropdown-one');
const dropdownTwo = document.querySelector('.dropdown-two');
const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const submitBtn = document.querySelector('.btn');
const shortcutsBtn = document.querySelector('.shortcuts');
const tables = document.querySelector('table');
const totalElOne = document.querySelector('.valueOne');
const totalElTwo = document.querySelector('.valueTwo');
const date = document.querySelector('.date');
const expenseAmounts = [];
const incomeAmounts = [];
const profitable = document.querySelector('.profitable');
// Functions
function addTable() {

tables.innerHTML += `<tr style="height: 6vh;"><td>${  
document.querySelector(
'.date'
).value
}</td>
<td>${
document.querySelector(
'.dropdown-one'
).value
}</td>
<td>${
document.querySelector(
'.input-one'
).value
}</td>
<td>${
document.querySelector(
'.dropdown-two'
).value
}</td>
<td class="amount">
${
document.querySelector(
'.input-two'
).value
}
</td>
</tr>
`
// If Statements 

// if (
// dropdownOne.value ===
// 'Income') {
// incomeAmounts.push(Number(
// document.querySelector('.input-two').value
// )
// );
// function calculateOne(
// total,
// num
// ) {
// return (
// total + num
// );
// }
// let xOne =
// incomeAmounts.reduce(
// calculateOne
// );
// totalElOne.innerHTML = `${Number(
// xOne
// )}`;
// inputTwo.value ='00.00';
// } else if (
// dropdownOne.value === 'Expense'
// ) {
// expenseAmounts.push(
// Number(
// document.querySelector('.input-two').value
// )
// );
// function calculateTwo(
// total,
// num
// ) {
// return (
// total + num
// );
// }
// let xTwo = expenseAmounts.reduce(calculateTwo);
// totalElTwo.innerHTML = `${Number(xTwo)}`;
// } if (
// Number(
// totalElOne.innerText
// ) >
// Number(
// totalElTwo.innerText
// )) {
// profitable.innerText = `${totalElOne.innerHTML - totalElTwo.innerHTML} is your total profit`;
// profitable.style.color = '#008B8B';
// } if (Number(
// totalElTwo.innerText) >
// Number(totalElOne.innerText)
// ) {
// profitable.innerText = `${totalElTwo.innerHTML - totalElOne.innerHTML} is your total loss`;
// }

inputOne.value = '';
inputTwo.value = '00.00';
dropdownOne.value = 'Expense';
dropdownTwo.value = 'Transport';
date.value = '';  
};
} else {
    document.body.innerHTML = `Not for small devices, :(`;
}
