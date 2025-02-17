//Dark mode

const mode = document.getElementById('mode-icon');
const video = document.getElementById('background-video');
const form = document.getElementById('login-form');

mode.addEventListener('click', () => {
    
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        video.removeAttribute('./assets/video/light mode clouds.mp4');
        video.setAttribute('src', './assets/video/dark mode clouds.mp4');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    video.removeAttribute('./assets/video/dark mode clouds.mp4');
    video.setAttribute('src', './assets/video/light mode clouds.mp4');
});

//Form Validation

function login() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user == "admin" && password == "adminpass") {
        alert('Success!');
    } else {
        alert("Invalid Credentials!");
    }
}
