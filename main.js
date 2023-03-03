// Задано
// інпут в який користувач черезз кому вводить числа.
// radio-button з варіантами зростання і спадання
// кнопка посортувати
// При кліці на кнопку потрібно з введених чисел створити масив та посортувати його в залежності від обраного напрямку
// (спадаючий чи зростаючий)

const form = document.forms[0];
let arr = [];
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('input').value;
    arr = input.split(' ');
    if(form.select.value == 1){
        console.log(arr.sort((a, b) => a-b));
    }else if(form.select.value == 0){
        console.log(arr.sort((a, b) => b-a));
    }else{
        alert('Select action');
    }
})