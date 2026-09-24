// regex
// ^ начало
// $ конец

//--- что? ---
// [abc],[a-z];
// [^abc] - все кроме
// \d = [0-9]
// \D - все кроме y 
// \s - пробел, таб
// точка - любой символ

//--- сколько? ---
// [*] - 0 и более
// + - 1 и более
// ? - 0 или 1
// {n} - n раз
// {n,} - n и более
// {n, m} - от n до m

// i - регистронезависим а=А
// g - глобальный поиск
// u - Unicode

// +? может быть, а может и нет


// -----Тест-----
function testInputs() {
    console.log('Test')

    // ---ФИО---
    let elementInputFIO = document.getElementById("FIO");
    console.log((elementInputFIO.value))
    
    let FIORegex = /^[a-zа-я]+ [a-zа-я]+ [a-zа-я]+$/i;
    let fioCorrect = FIORegex.test(elementInputFIO.value);
    console.log(fioCorrect)
    fioErrorText = document.querySelector('.fio-error-text');

    if (fioCorrect) {
        elementInputFIO.classList.remove('input-incorrect');
        fioErrorText.style.display = 'none';
    } else {
        elementInputFIO.classList.add('input-incorrect');
        fioErrorText.style.display = 'flex';
    }
    

    // ---Логин---
    let elementInputLogin = document.getElementById("login");
    console.log((elementInputLogin.value))
    
    let loginRegex = /^(?=.*[a-zа-я])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/i;
    let loginCorrect = loginRegex.test(elementInputLogin.value);
    console.log(loginCorrect)
    loginErrorText = document.querySelector('.login-error-text');

    if (loginCorrect) {
        elementInputLogin.classList.remove('input-incorrect');
        loginErrorText.style.display = 'none';
    } else {
        elementInputLogin.classList.add('input-incorrect');
        loginErrorText.style.display = 'flex';
    }

    // ---Email---
    let elementInputEmail = document.getElementById("email");
    console.log((elementInputEmail.value))
    
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailCorrect = emailRegex.test(elementInputEmail.value);
    console.log(emailCorrect)
    emailErrorText = document.querySelector('.email-error-text');
    

    if (emailCorrect) {
        elementInputEmail.classList.remove('input-incorrect');
        emailErrorText.style.display = 'none';
    } else {
        elementInputEmail.classList.add('input-incorrect');
        emailErrorText.style.display = 'flex';
    }

    // ---Возраст---
    let elementInputAge = document.getElementById("age");
    console.log((elementInputEmail.value))
    
    let ageRegex = /^([6-9]|\d{2,})$/;
    let ageCorrect = ageRegex.test(elementInputAge.value);
    console.log(ageCorrect)
    ageErrorText = document.querySelector('.age-error-text');

    if (ageCorrect) {
        elementInputAge.classList.remove('input-incorrect');
        ageErrorText.style.display = 'none';
    } else {
        elementInputAge.classList.add('input-incorrect');
        ageErrorText.style.display = 'flex';
    }

    // ---Пароль---
    let elementInputPassword = document.getElementById("password");
    console.log((elementInputPassword.value))
    
    let passwordRegex = /^(?=.*[a-zа-я])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/i;
    let passwordCorrect = passwordRegex.test(elementInputPassword.value);
    console.log(passwordCorrect)
    passwordErrorText = document.querySelector('.password-error-text');

    if (emailCorrect) {
        elementInputPassword.classList.remove('input-incorrect');
        passwordErrorText.style.display = 'none';
    } else {
        elementInputPassword.classList.add('input-incorrect');
        passwordErrorText.style.display = 'flex';
    }

}