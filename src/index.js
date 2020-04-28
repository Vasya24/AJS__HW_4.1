export default function func() {
    let inp = document.querySelector(".input");
let val = inp.value;
val = Number.parseInt(val);

try {
    typeof(val) === "number";
    console.log('Ага, ок')
} catch {
    console.error('Вообще не ок. Я принимаю только числа.')
}

}