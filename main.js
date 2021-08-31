const openBtn = document.querySelector('img.menu');
const closeBtn = document.querySelector('i.fas.fa-times');
const menu = document.querySelector('.opened-menu');


const openMenu = () => {
  menu.classList.add('active');
}

const closeMenu = () => {
  menu.classList.remove('active');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);