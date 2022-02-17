

/* function parseDotValue(id) {
    let idname = document.getElementById(id).parseInt().value
}
document.getElementById('calculate').addEventListener('click', function () {
    //all input
    let income = document.getElementById('income');
    let incomeConvert = parseInt(income.value);
    //parseAndValue('income')
    let food = document.getElementById('food');
    let foodConvert = parseInt(food.value);
    //parseAndValue('food')
    let rent = document.getElementById('rent');
    let rentConvert = parseInt(rent.value);
    //parseAndValue('rent')
    let etc = document.getElementById('etc');
    let etcConvert = parseInt(etc.value);
    //parseAndValue('etc')
    let expense = foodConvert + rentConvert + etcConvert;


    //let expense = (parseAndValue('food')) + (parseAndValue('rent')) + (parseAndValue('etc'))
    //update here
    let totalExpense = document.getElementById('totalExpense');
    let totalExpenseConvert = parseInt(totalExpense.innerText);


    let balance = document.getElementById('balance')
    let balanceConvert = parseInt(balance.innerText);
    let expenseAfter = incomeConvert - expense;

    // if (incomeConvert > 0 && foodConvert > 0 && rentConvert > 0 && etc > 0) {
    if (0 < incomeConvert && 0 < foodConvert && 0 < rentConvert && 0 < etc) {
        document.getElementById('message').style.display = 'block'
    }
    else {
        document.getElementById('message').style.display = 'none'
    }

    if (expense < expenseAfter) {//&& expenseAfter > expense
        totalExpense.innerText = expense
        balance.innerText = expenseAfter
        document.getElementById('messageForMoreExpense').style.display = 'none'
    }
    else {
        document.getElementById('messageForMoreExpense').style.display = 'block'
    }


})

document.getElementById('save').addEventListener('click', function () {
    let income = document.getElementById('income')
    let incomeConvert = parseInt(income.value)
    let savePercent = document.getElementById('savePercent')
    let savePercentConvert = parseInt(savePercent.value)
    let getPercent = (incomeConvert * savePercentConvert) / 100
    //saving amount
    let savingAmount = document.getElementById('savingAmount')
    let savingAmountConvert = parseInt(savingAmount.innerText)
    //savingAmount.innerText = getPercent
    console.log(savePercentConvert)
    let remainBalance = document.getElementById('remainBalance')
    let remainBalanceConvert = parseInt(remainBalance.innerText)
    let balance = document.getElementById('balance')
    let balanceConvert = parseInt(balance.innerText);
    let remain = balanceConvert - getPercent
    if (getPercent < balanceConvert) {
        savingAmount.innerText = getPercent
        remainBalance.innerText = remain;
        document.getElementById('message2').style.display = 'none'
    }
    else {
        document.getElementById('message2').style.display = 'block'
    }
    //remainBalance.innerText = remain;
})
 */

