const list = document.querySelector('div#list');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('click', (event)=>{
  console.log(event.target);
  event.preventDefault();
});
