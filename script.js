// init value of expense at 0
let totalExpense = 0;

//get the heading element
const headingEl = document.querySelector("#heading");

// get the reference to the desc element

const inputDescEl = document.querySelector("#inputDesc");

// read value from inputAmt
const inputEle = document.querySelector("#inputAmt");

// get the ref to table
const expenseTableEl = document.querySelector("#expenseTable");

headingEl.textContent = totalExpense;

// all expense at one place
const  allExpenses = [];

function addExpense() {
    const expenseItem = {};

    const texAmt = inputEle.value;
    // console.log(texAmt);

    // read the desc from inputDesc
    const textDesc = inputDescEl.value;

    //convert to integer
    const expense = parseInt(texAmt, 10); 
    
    // put it in object
    expenseItem.desc = textDesc;
    expenseItem.amount = expense;


    allExpenses.push(expenseItem);
    console.clear();
    console.table(allExpenses);

    //add to total
    totalExpense += expense;

    // const someText = `Expense: ${totalExpense}`;
    // set the header element to total expense
    headingEl.innerText = totalExpense;

    const data1 = allExpenses[0];
    const data2 = allExpenses[1];

    const data1Text = `|Expense: ${data1.amount} :: Desc: ${data1.desc}|`
    const data2Text = `|Expense: ${data2.amount} :: Desc: ${data2.desc}|`

    const tableText =`
        <div>${data1Text}</div>
        <div>${data2Text}</div>
    `
    expenseTableEl.innerHTML = tableText;
}



// get the button element
const ele = document.querySelector("#btnAdd");

// function to increment the counter

//listen to events 
ele.addEventListener("click", addExpense, false);