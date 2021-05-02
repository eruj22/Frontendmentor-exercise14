// form not working - check if email is correct

const form = document.querySelector('.join__cta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
});

function checkEmail() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        form.innerHTML = 'hi';
    } else if (!isEmail(emailValue)) {
        console.log('try');
    } else {

    }
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};