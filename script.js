const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlink');
// const span = document.getElementsByClassName('bar')[2];

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('show');
}));
<<<<<<< HEAD


// popup
const array = [
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/1m1.png',
    desktopImage: 'img/first.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
=======
const array = [
  {
    mobileTopic: 'tonic',

    desktopTopic: 'tonic',

    mobileImage: 'img/Snapshoot Portfolio 1.png',

    desktopImage: 'img/new.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
<<<<<<< HEAD
    link: 'https://kingno3l.github.io/microverse_portfolio/',
    source: ' https://github.com/kingnoel/microverse_portfolio/',
  },
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/1m1.png',
    desktopImage: 'img/second.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
=======

    link: ' https://github.com/kingnoel/microverse_portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
  {
    mobileTopic: 'multi-post stories',

    desktopTopic: 'multi-post stories',

    mobileImage: 'img/Snapshoot Portfolio 1.png',

    desktopImage: 'img/new.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
<<<<<<< HEAD
    link: 'https://kingno3l.github.io/microverse_portfolio/',
    source: ' https://github.com/kingnoel/microverse_portfolio/',
  },
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/1m1.png',
    desktopImage: 'img/third.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
=======

    link: ' https://github.com/kingnoel/microverse_portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
  {
    mobileTopic: 'tonic',

    desktopTopic: 'facebook 360',

    mobileImage: 'img/Snapshoot Portfolio 1.png',

    desktopImage: 'img/new.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
<<<<<<< HEAD
    link: 'https://kingno3l.github.io/microverse_portfolio/',
    source: ' https://github.com/kingnoel/microverse_portfolio/',
  },
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/1m1.png',
    desktopImage: 'img/fourth.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
=======

    link: ' https://github.com/kingnoel/microverse_portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
  {
    mobileTopic: 'multi-post stories',

    desktopTopic: 'uber navigation',

    mobileImage: 'img/Snapshoot Portfolio 1.png',

    desktopImage: 'img/new.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
      1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
<<<<<<< HEAD
      link: 'https://kingno3l.github.io/microverse_portfolio/',
      source: ' https://github.com/kingnoel/microverse_portfolio/',
  },
];
const extra = document.querySelector('#extra');
const project = document.querySelectorAll('#expand');
=======

    link: ' https://github.com/kingnoel/microverse_portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
];

const extra = document.querySelector('#extra');
const project = document.querySelectorAll('#expand');

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
function display(main, i) {
  const play = `<div class="content">
      <div class="top">
        <h2 class="mobile">${main[i].mobileTopic}</h2>
        <h2 class="desktop">${main[i].desktopTopic}</h2>
        <ul>
<<<<<<< HEAD
          <li class="dark desktop cl">Uber</li>
=======
          <li class="dark desktop">Uber</li>
>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
          <li class="dark mobile">canopy</li>
          <li class="desktop">full Stack Dev</li>
          <li class="mobile">Back End Dev</li>
          <li class="desktop">2018</li>
          <li class="mobile">2015</li>
        </ul>
<<<<<<< HEAD
       </div>
=======
      </div>
>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
      <div class="image">
        <img src="${main[i].mobileImage}"  class="mobile"/>
        <img src="${main[i].desktopImage}" class="desktop"/>
      </div>
      <div class="bottom">
        <div class="words">
          <p class="desktop">
            ${main[i].desktopdesc}
          </p>
<<<<<<< HEAD
=======

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
          <p class="mobile">
            ${main[i].mobiledesc}
          </p>
        </div>
<<<<<<< HEAD
        <div class="other">
          <ul class="stack">
            <div class="stt">
            <li>html</li>
            <li>javascript</li>
            <li>css</li>
            </div>
            <li class="desktop">ruby </li>
            <li class="desktop">github</li>
            <li class="desktop">bootstrap</li>
          </ul>
          <div class="button">
            <a href="${main[i].link}" class="btn">
              see live
              <img src="img/seelive.png" alt="visit the website"/>
            </a>
            <a href="${main[i].source}" class="btn">
              see source
              <img src="img/seesource.png" alt=" see the sourcecode"/>
            </a>
          </div>
        </div>
        <img src="img/cancel.png" alt="To close panel" id="cancel-port"/>
      </div>`;
=======
         
        <div class="other">
          <ul class="stack">
            <li>html</li>
            <li>javascript</li>
            <li class="desktop">ruby </li>
            <li>css</li>
            <li class="desktop">github</li>
            <li class="desktop">bootstrap</li>
          </ul>
  
          <div class="button">
            <a href="${main[i].link}" class="btn">
              see live
              <img src="images/expand/seelive.png" alt="visit the website"/>
            </a>
            <a href="${main[i].source}" class="btn">
              see source
              <img src="images/expand/seesource.png" alt=" see the sourcecode"/>
            </a>
          </div>
        </div>
        
        

        <img src="img/cancel.png" alt="To close panel" id="cancel-port"/>
        
      </div>`;

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
  const lay = document.createElement('div');
  lay.classList.add('popup');
  lay.innerHTML = play;
  extra.appendChild(lay);
}
<<<<<<< HEAD
=======

>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
project.forEach((pro, index) => {
  pro.addEventListener('click', () => {
    const v = index;
    for (let i = 0; i < array.length; i += 1) {
      if (i === v) {
        display(array, i);
        const view = document.querySelector('.popup');
        view.classList.add('show');
        const canc = view.querySelector('#cancel-port');
        canc.addEventListener('click', () => {
          extra.removeChild(view);
        });
      }
    }
  });
});
<<<<<<< HEAD


// form validation
const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const msg = document.querySelector('form .message');
=======
const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const msg = document.querySelector('form .message');
const text = document.querySelector('textarea');
const namee = document.querySelector('input#name');
>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51

function showError(m) {
  msg.style.display = 'block';
  msg.innerText = m;
}

function showSuccess(mass) {
  msg.style.display = 'block';
  msg.style.color = 'white';
<<<<<<< HEAD
  msg.style.backgroundColor = '#ff6b00';
=======
  msg.style.backgroundColor = 'rgb(88, 51, 189)';
>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
  msg.innerText = mass;
}

function checkLowerCase(input) {
  if (input.value !== input.value.toLowerCase()) {
    showError('please write the email in lowercase');
  } else {
    showSuccess('Thank You.');
    form.submit();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkLowerCase(email);
<<<<<<< HEAD
=======
});

// START STORAGE

const valueInput = JSON.parse(localStorage.getItem('valueInput')) || [];

function addVale(userName, userEmail, userText) {
  valueInput.push({ userName, userEmail, userText });
  localStorage.setItem('valueInput', JSON.stringify(valueInput));
  return { userName, userEmail, userText };
}

function showNow({ userName, userEmail, userText }) {
  namee.value = userName;
  email.value = userEmail;
  text.value = userText;
}

valueInput.forEach(showNow);

form.addEventListener('change', (event) => {
  event.preventDefault();
  addVale(namee.value, email.value, text.value);
>>>>>>> 642fd05575ca90568dd8ac50958c760f9c225a51
});