const redBtn = document.getElementById('red')
const blueBtn = document.getElementById('blue')
const greenBtn = document.getElementById('green')
const body = document.getElementById('bdy')

console.log(body);


redBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'red';
})

blueBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
})

greenBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'green';
})