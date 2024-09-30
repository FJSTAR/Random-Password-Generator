const passwordBox = document.querySelector('#password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";
const allChars = upperCase + lowerCase + number + symbol;

document.querySelector('button').addEventListener('click',
function generatePassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
})

document.querySelector('.copy').addEventListener('click',
function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});