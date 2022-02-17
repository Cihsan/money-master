// 
function parseDotValue(idv) {
    let idnamev = document.getElementById(idv)
    let idnameConvert = parseInt(idnamev.value)
    return idnameConvert
}
function parseDotInner(idi) {
    let idname = document.getElementById(idi)
    let idnameCon = parseInt(idname.innerText)
    return idnameCon
}

document.getElementById('calculate').addEventListener('click', function () {
    let getIncome = parseDotValue('income');
    let getFood = parseDotValue('food');
    let getRent = parseDotValue('rent');
    let getEtc = parseDotValue('etc');
    let expenseTotal = getFood + getRent + getEtc;
    let balanceTotal = getIncome - expenseTotal;

    let totalExpense = document.getElementById('totalExpense')
    totalExpense.innerText = expenseTotal;
    let balance = document.getElementById('balance')
    balance.innerText = balanceTotal;

    // some not perfect run
    //Validation Done For Negetive value 
    if (getIncome > 0 && getFood > 0 && getRent > 0 && getEtc > 0) {
        document.getElementById('warnningOne').style.display = 'none'
    }
    else {
        document.getElementById('warnningOne').style.display = 'block'
    }
    //Validation Done For Expense more than Income
    if (expenseTotal < balanceTotal) {
        document.getElementById('warnningTwo').style.display = 'none';
    }
    else {
        document.getElementById('warnningTwo').style.display = 'block';
    }

})

document.getElementById('save').addEventListener('click', function () {
    let getIncome = parseDotValue('income');
    let getPercent = parseDotValue('savePercent');
    let getPercentTotal = (getIncome * getPercent) / 100;
    //saving amount
    let showSaveAmount = parseDotInner('savingAmount');
    console.log(getPercentTotal);
    let showRemainBalance = parseDotInner('remainBalance');
    let getBalance = parseDotInner('balance');
    let remainTotal = getBalance - getPercentTotal;
    //Validation Done For Saving more than Balance Income
    if (getPercentTotal < getBalance) {
        let saveAmountshow = document.getElementById('savingAmount')
        saveAmountshow.innerText = getPercentTotal
        let remainBalanceShow = document.getElementById('remainBalance')
        remainBalanceShow.innerText = remainTotal
        document.getElementById('warnningThree').style.display = 'none'
    }
    else {
        document.getElementById('warnningThree').style.display = 'block'
    }

})