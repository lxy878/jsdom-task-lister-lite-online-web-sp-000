const list = document.querySelector('div#list');
const tasks = document.querySelector('ul#tasks');
const description_list = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('click', (event)=>{
  // console.log(event.target);
  const description = document.querySelector('input#new-task-description');
  console.log(description.value);
  description_list.push(description.value)
  event.preventDefault();
});
