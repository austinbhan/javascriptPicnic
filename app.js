// Get document elements

const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');

// Add Event Listeners

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('grapes');
});

bread.addEventListener('click', () => {
    bread.classList.toggle('bread');
});

watermelon.addEventListener('click', () => {
    watermelon.addEventListener.toggle('watermelon');
});
