//step-1 add clickevent handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step:2 get the email address inside the email address
    //! Always remember to use .value to get text from an input field.
    const userField = document.getElementById('user-email');
    const email = userField.value;
    //step: 3 get password
    //3.a: set id on the html elemrnt
    //3.b: get the elemrnt
    //3.c: get the value from the elemrnt
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    if(email === 'shiam.sharif.07@gmial.com' && password === 'bismillah'){
        // SubmitButton to another HTML page
        window.location.href = 'bank.html';
    }
    else{
        alert('JA vaaag');
    }

})


