const MENU = document.getElementById('nav-menu');
const SUBMIT = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close_button');
const PORTFOLIO_BUTTON = document.getElementById('portfolio-navBar');
const IPHONE_BUTTON_V = document.getElementById('iphone_button');
const IPHONE_BUTTON_H = document.getElementById('iphone_button_2');
const IPHONE_SCRIN_V = document.getElementById('vertical_scrin');
const IPHONE_SCRIN_H = document.getElementById('horizontal_scrin');
const PORTFOLIO_IMG = document.getElementById('portfolio-img');
const SLIDER_SECTION = document.querySelector('.slider_transform');
const RIGHT_SLIDE = document.querySelector('.slider_block-right_arrow');
const LEFT_SLIDE = document.querySelector('.slider_block-left_arrow');
let direction;

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

PORTFOLIO_BUTTON.addEventListener('click', (event) => {
    PORTFOLIO_BUTTON.querySelectorAll('div').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

IPHONE_BUTTON_V.addEventListener('click', () => {
    if(IPHONE_SCRIN_V.classList.value.includes('hidden')) {
        IPHONE_SCRIN_V.classList.remove('hidden');
    } else {
        IPHONE_SCRIN_V.classList.add('hidden');
    }
}); 

IPHONE_BUTTON_H.addEventListener('click', () => {
    if(IPHONE_SCRIN_H.classList.value.includes('hidden')) {
        IPHONE_SCRIN_H.classList.remove('hidden');
    } else {
        IPHONE_SCRIN_H.classList.add('hidden');
    }
}); 

PORTFOLIO_IMG.addEventListener('click', (event) => {
    PORTFOLIO_IMG.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

RIGHT_SLIDE.addEventListener('click', () => {
    direction = -1;
    document.querySelector('.slider_block').style.justifyContent = 'flex-start';
    SLIDER_SECTION.style.transform = 'translate(-1020px)';   
    if(!IPHONE_SCRIN_H.classList.value.includes('hidden')) {
        IPHONE_SCRIN_H.classList.add('hidden');
    } 
    if(!IPHONE_SCRIN_V.classList.value.includes('hidden')) {
        IPHONE_SCRIN_V.classList.add('hidden');
    }
});

SLIDER_SECTION.addEventListener('transitionend', () => {
    if (direction === 1) {
        SLIDER_SECTION.prepend(SLIDER_SECTION.lastElementChild);
    } else {
        SLIDER_SECTION.appendChild(SLIDER_SECTION.firstElementChild);
    }
    
    SLIDER_SECTION.style.transition = 'none';
    SLIDER_SECTION.style.transform = 'translate(0)';
    setTimeout(() => {
        SLIDER_SECTION.style.transition = 'all 0.2s';
    })
  }, false);

LEFT_SLIDE.addEventListener('click', () => {
    direction = 1;
    SLIDER_SECTION.style.transform = 'translate(1020px)';
    if(!IPHONE_SCRIN_H.classList.value.includes('hidden')) {
        IPHONE_SCRIN_H.classList.add('hidden');
    }
    if(!IPHONE_SCRIN_V.classList.value.includes('hidden')) {
        IPHONE_SCRIN_V.classList.add('hidden');
    }
});

