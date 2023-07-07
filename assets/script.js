const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector("button"); 

btn.addEventListener('click', function () {
    output.innerHTML =input.value;
});