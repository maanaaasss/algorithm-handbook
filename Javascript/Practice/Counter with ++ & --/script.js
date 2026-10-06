const resetBtn = document.getElementById('reset')
const incBtn = document.getElementById('increment')
const decBtn = document.getElementById('decrement')
const counter = document.getElementById('counter')

let count = 0;

incBtn.addEventListener('click', () => {
    counter.textContent = count + 1;
    count = count + 1;
})

decBtn.addEventListener('click', () => {
    if(count == 0) {
        alert("You can't Decrement more!")
    } else {
        counter.textContent = count - 1;
        count = count - 1;
    }
})

resetBtn.addEventListener('click', () => {
    counter.textContent = 0;
    count = 0;
})
