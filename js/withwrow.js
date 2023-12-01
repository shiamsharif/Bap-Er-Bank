// 1.
document.getElementById('btn-withdeow').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);

//Step:4
    const currentWithdrpwTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrpwTotal;

//Step:5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//step:6
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;

//Step:7 
    withdrowField.value = '';
})