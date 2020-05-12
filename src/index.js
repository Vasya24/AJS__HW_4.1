let inp = document.querySelector('#input');
//Перевожу строковой тип вводимых данных в числовой
let val = Number(inp.value)
//Перевожу вводимые числа в десятичную систему
parseInt(val, 10)
let err = new Error('Ты что-то не так делаешь!')
//Предотвращаю ввод других символов
inp.addEventListener('keypress', (e) => {
    if (e.charCode < 48 || e.charCode > 57) {
        e.preventDefault()
    }
})

let btn = document.getElementById('button')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        isNaN(inp.value) === false
    } finally {
        inp.value = null
    }
})