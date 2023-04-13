const count = document.querySelector(".count");
const btn = document.querySelector(".btn");

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  let hex = Math.random().toString(16).slice(2, 8);
  count.innerHTML = `#${hex}`;
  document.body.style.backgroundColor = `#${hex}`;
})