const list = document.querySelector('div#list');
const tasks = document.querySelector('ul#tasks');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('click', (event)=>{
  console.log(event.target);
  event.preventDefault();
});
