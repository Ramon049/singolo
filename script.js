const MENU = document.getElementById('nav-menu');
const SUBMIT = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close_button');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

SUBMIT.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.getElementById('name').value && document.getElementById('email').value) {
        const subject = document.getElementById('subject').value.toString();
        const project = document.getElementById('project').value.toString();
        document.getElementById('res1').innerText = 'Письмо отправлено';

        if(subject) {
            document.getElementById('res2').innerText = 'Тема: ' + subject;
        } else {
            document.getElementById('res2').innerText = 'Без темы';
        }
        if(project) {
            document.getElementById('res3').innerText = 'Описание: ' + project;
        } else {
            document.getElementById('res3').innerText = 'Без описания';
        }

        document.getElementById('message_block').classList.remove('none');
        document.getElementById('message').classList.remove('none');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('res1').innerText = '';
    document.getElementById('res2').innerText = '';
    document.getElementById('res3').innerText = '';
    document.getElementById('message_block').classList.add('none');
    document.getElementById('message').classList.add('none');
});
