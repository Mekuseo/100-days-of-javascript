const modal = document.querySelector('.modal'),
      btn = document.querySelector('.btn'),
      close = document.querySelector('.close');

const openEvent = () => {
  modal.classList.add('show');
}

const closeEvent = () => {
  modal.classList.remove('show');
}

btn.addEventListener('click', openEvent);
close.addEventListener('click', closeEvent);
modal.addEventListener('click', closeEvent);
