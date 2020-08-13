const list = document.querySelector('div#list');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('click', (event)=>{
  console.log(event.target);
  const tasks = document.querySelector('ul#tasks')
  event.preventDefault();
});
