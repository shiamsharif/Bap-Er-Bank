//step:1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step:2 get the deposit amount from the deposit input
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);

    //Step:3 get the current total
    //for non input tag(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step:4 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotal;
    
    //step:5 get ballance current total
    const balanceTotalElemrnt = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElemrnt.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step:6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    //Set the balance
    balanceTotalElemrnt.innerText = currentBalanceTotal;
    
    
    // console.log(depositAmount);
})