const mode = document.getElementById('mode-icon');
const video = document.getElementById('lightmode-video');

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        video.removeAttribute('./assets/Light mode clouds.mp4');
        video.setAttribute('src', './assets/dark mode clouds.mp4');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    video.removeAttribute('./assets/dark mode clouds.mp4');
    video.setAttribute('src', './assets/Light mode clouds.mp4');
    
});