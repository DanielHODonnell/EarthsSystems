const sun = document.getElementById('sun');
const earth = document.getElementById('earth');

sun.addEventListener('click', function () {
    const isCentered = sun.classList.contains('centered');

    sun.classList.add('animating');

    if (isCentered) {
        sun.classList.remove('centered');
        earth.classList.remove('offscreen');
    } else {
        sun.classList.add('centered');
        earth.classList.add('offscreen');
    }

    setTimeout(() => {
        sun.classList.remove('animating');
    }, 1000);
});