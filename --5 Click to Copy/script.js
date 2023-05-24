const coupon = document.querySelector('#coupon'),
      copy = document.querySelector('#copy')

const selectAndPaste = (e) => {
  e.preventDefault();
  coupon.select();
  document.execCommand('copy');
  copy.textContent = 'Copied!';

  setTimeout(() => {
    copy.textContent = 'copy!';
  }, 3000);
}

copy.addEventListener('click', selectAndPaste);
