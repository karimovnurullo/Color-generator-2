let input = document.querySelector('.input');
let button = document.querySelector('.btn');
let box = document.querySelector('.box');
let item = document.querySelectorAll('.item');
let alert = document.querySelector('.alert');
let error = document.querySelector('.error');
let clear = document.querySelector('.clear');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createDiv() {
    let color = getRandomColor();
    let div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = color;
    div.style.background = color;
    box.appendChild(div);

    clear.addEventListener('click', () => {
        box.removeChild(div);
        box.style.padding = '0px';

    });

    div.addEventListener('click', (e) => {
        let item = e.target;
        document.body.style.background = item.textContent;
        alert.classList.remove('show');
        error.classList.remove('show');
    })
    div.addEventListener('dblclick', (e) => {
        console.log(e.target.textContent);
        navigator.clipboard.writeText(e.target.textContent);
        alert.classList.add('show');
        setTimeout(() => {
            alert.classList.remove('show');
        }, 1500);
    });

}
input.addEventListener('change', () => {
    let value = input.value * 1;
    let count = 0;
    if (value) {
        const interval = setInterval(() => {
            createDiv();
            count++;
            if (value == count) {
                clearInterval(interval)
            }
        }, 50);
        box.style.padding = '20px';
        error.classList.remove('show');
    } else error.classList.add('show');
    input.value = "";
})