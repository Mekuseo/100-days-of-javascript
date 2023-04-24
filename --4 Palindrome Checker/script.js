const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const str = input.value;
  const strLower = str.toLowerCase();
  const strArr = strLower.split("");
  const strArrRev = strArr.reverse();
  const strRev = strArrRev.join("");

  if (strLower === strRev) {
    result.innerHTML = "This is a palindrome";
    result.style.color = "green";
  } else {
    result.innerHTML = "This is not a palindrome";
    result.style.color = "red";
  }
});