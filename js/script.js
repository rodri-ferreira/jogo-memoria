const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');


input.addEventListener('input', function({target}) {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '')
});


form.addEventListener('submit', function(e){
    e.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/games.html'
});