const list = document.querySelector('div#list');
const tasks = document.querySelector('ul#tasks');
const description = document.querySelector('input#new-task-description');
const description_list = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('submit', (event)=>{
  // console.log(event.target);
  description_list.push(description.value);
  list.innerHTML = `<li>${description_list[0]}</li>`;
  event.preventDefault();
});

function listTask(){
  for(let description of description_list){

  }
}
