const sun = document.getElementById('sun');
const earth = document.getElementById('earth');

sun.addEventListener('click', function () {
    sun.classList.toggle('centered');
    earth.classList.toggle('offscreen');
});