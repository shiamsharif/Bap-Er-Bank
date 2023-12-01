//step:1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step:2 get the deposit amount from the deposit input
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
   
    //Step:3 get the current total
    //for non input tag(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    // const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
    
    
    
    // console.log(depositAmount);
})