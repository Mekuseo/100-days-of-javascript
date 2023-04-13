const buttons = document.querySelectorAll('.btn');
const counter = document.querySelector('.count');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');

buttons.forEach(function(button){
  button.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('subtract')) {
      counter.innerHTML--;
      countColors();
    }else if (styles.contains('add')) {
      counter.innerHTML++;
      countColors();
    }else {
      counter.innerHTML = 0;
      countColors();
    }
  })
})

const countColors = () => {
  if(counter.innerHTML > 0) {
    counter.style.color = 'green';
  }else if (counter.innerHTML < 0) {
    counter.style.color = 'red';
  }else {
    counter.style.color = 'white';
  }
}
