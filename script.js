var incomeVal = document.getElementById('income');
var expenseVal = document.getElementById('expense');
var inputAmt = document.getElementById('amount');
var inputText = document.getElementById('text');
var balanceVal = document.getElementById('balance');



function addTransaction()
{
    if(inputAmt.value > 0)
    {
        var income = parseInt(incomeVal.innerText);
        income += parseInt(inputAmt.value);
        incomeVal.innerText = income;

        var balance = parseInt(balanceVal.innerText);
        balance += parseInt(inputAmt.value);
        balanceVal.innerText = balance;
    }
    else
    {
        var expense = parseInt(expenseVal.innerText);
        expense += Math.abs(parseInt(inputAmt.value));
        expenseVal.innerText = expense;

        var balance = parseInt(balanceVal.innerText);
        balance -= Math.abs(parseInt(inputAmt.value));
        balanceVal.innerText = balance;

    }
    showHistory()
}

function showHistory()
{
    var name = inputText.value;
    var amt = inputAmt.value;
    historyBox.innerHTML += `<div class="his">
                            <h1>${name}</h1>
                            <h1>${amt}</h1>
                        </div>`;
}

function deleteHistory()
{
    var choice = confirm("Are you sure you want to delete history ?");
    if(choice)
        document.getElementById('historyBox').innerHTML = "";
}

var flag = true;
function toggleHistory()
{
    if(flag)
    {   
        historyBox.style.visibility = "visible";
    }
    else{
        historyBox.style.visibility = "hidden"; 
    }
    flag = !flag; 
}
