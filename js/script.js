document.addEventListener('DOMContentLoaded', function () {
    const earthLink = document.getElementById('earth-link');
    const earth = document.getElementById('earth');

    if (earthLink && earth) {
        earthLink.addEventListener('click', function (e) {
            e.preventDefault();
            earth.classList.add('zooming');
            setTimeout(() => {
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = "systems-view.html";
                }, 800);
            }, 1000);
        });
    }
});