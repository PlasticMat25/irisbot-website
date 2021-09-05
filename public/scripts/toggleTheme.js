const toggleButton = document.getElementById('toggleButton');
const indicator = document.querySelector('.indicator');

toggleButton.addEventListener('click', (e) => {
    indicator.classList.toggle('active-indicator');
    document.body.classList.toggle('dark');
});