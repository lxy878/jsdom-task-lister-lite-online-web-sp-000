const list = document.querySelector('div#list');
const tasks = document.querySelector('ul#tasks');
const description_list = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('submit', (event)=>{
  // console.log(event.target);
  const description = document.querySelector('input#new-task-description');
  description_list.push(description.value);
  event.preventDefault();
});
