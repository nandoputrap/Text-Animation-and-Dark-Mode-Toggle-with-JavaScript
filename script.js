// Text Animation

const text = document.querySelector('.text');
// console.log(text);

const huruf = [...text.textContent];
// console.log(huruf);

const hover = huruf.map(a => `<span>${a}</span>`).join('');
// console.log(hover);

text.innerHTML = hover;

// Dark Mode

const button = document.querySelector('.button');
const container = document.querySelector('.container');
const click = document.querySelector('.click');
console.log(button);

button.addEventListener('click', function () {
    button.classList.toggle('dark-button');
    if (click.innerHTML === 'Click to dark mode') {
        click.innerHTML = 'Click to bright mode';
    } else {
        click.innerHTML = 'Click to dark mode';
    }
    container.classList.toggle('dark');
    text.classList.toggle('dark-text');
});