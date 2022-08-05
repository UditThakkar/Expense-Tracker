

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
    expenseItem.moment = new Date();


    allExpenses.push(expenseItem);
    console.clear();
    // console.table(allExpenses);

    //add to total
    totalExpense += expense;

    const someText = `Expense: ${totalExpense}`;
    // set the header element to total expense
    headingEl.textContent = someText;

    // const data1 = allExpenses[0];
    // const data2 = allExpenses[1];

    // const data1Text = `|Expense: ${data1.amount} :: Desc: ${data1.desc}|`
    // const data2Text = `|Expense: ${data2.amount} :: Desc: ${data2.desc}|`

    // const tableText =`
    //     <div>${data1Text}</div>
    //     <div>${data2Text}</div>
    // `

    const allExpenseHTML = allExpenses.map(expense =>createListItem(expense));
    

    const joinedAllExpenseHTML = allExpenseHTML.join("");

    expenseTableEl.innerHTML = joinedAllExpenseHTML;
}



// get the button element
const ele = document.querySelector("#btnAdd");

// function to increment the counter

//listen to events 
ele.addEventListener("click", addExpense, false);

// Controller functions
// get date

function getDateString(moment){
    return moment.toLocaleDateString('en-US', {
        year : 'numeric',
        month : 'long',
        day: 'numeric'
    });
}

// delete items

function deleteItem(dateValue) {
    console.log('delete item was called', dateValue);

    for(let i=0;i<allExpenses.length;i++){
        if(allExpenses[i].moment.valueOf()===dateValue){
            console.log('Item found', allExpenses[i]);
        }
        
    }
}

// view layer
function createListItem({desc,amount,moment}) {
    return `
        <li class="list-group-item d-flex justify-content-between">
            <div class="d-flex flex-column">
            ${desc}
            <small class="text-muted">${getDateString(moment)}</small>
            </div>
            <div>
            <span class="px-5"> ${amount} </span>
            <button 
            type="button" 
            class="btn btn-outline-danger btn-sm" onclick="deleteItem(${moment.valueOf()})">
                <i class="fas fa-trash-alt"></i>
            </button>
            </div>
        </li>
        `;
}