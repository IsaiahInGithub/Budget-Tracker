if (window.innerWidth < 1000) {
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
      '.dropdown-one'
    ).value
  }</td>
  <td>${
    document.querySelector(
      '.dropdown-two'
    ).value
  }</td>
  <td>${
    document.querySelector(
      '.input-one'
    ).value
  }</td>
  <td>${
    document.querySelector(
      '.input-two'
    ).value
  }</td>
  <td>
  ${
    document.querySelector(
      '.date'
    ).value
  }
  </td>
  </tr>
`
// If Statements
  
if (
dropdownOne.value ===
'Income') {
incomeAmounts.push(Number(
    document.querySelector('.input-two').value
  )
);
function calculateOne(
  total,
  num
) {
  return (
    total + num
  );
}
let xOne =
  incomeAmounts.reduce(
    calculateOne
  );
totalElOne.innerHTML = `${String(
  xOne
)}`;
inputTwo.value ='00.00';
} else if (
dropdownOne.value === 'Expense'
) {
expenseAmounts.push(
  Number(
    document.querySelector('.input-two').value
  )
);
function calculateTwo(
  total,
  num
) {
  return (
    total + num
  );
}
let xTwo = expenseAmounts.reduce(calculateTwo);
totalElTwo.innerHTML = `${String(xTwo)}`;
} if (
Number(
  totalElOne.innerText
) >
Number(
  totalElTwo.innerText
)) {
  profitable.innerText = `${totalElOne.innerHTML - totalElTwo.innerHTML} is your total profit`;
} if (Number(
totalElTwo.innerText) >
Number(totalElOne.innerText)
) {
  profitable.innerText = `${totalElTwo.innerHTML - totalElOne.innerHTML} is your total loss`;
  profitable.style.color = 'red';
}
inputOne.value = '';
inputTwo.value = '00.00';
dropdownOne.value = 'Expense';
dropdownTwo.value = 'Transport';
};
