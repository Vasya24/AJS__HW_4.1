import '../index'

try {
    typeof(val) === "number";
    console.log('Ага, ок')
} catch {
    console.error('Вообще не ок. Я принимаю только числа.')
}