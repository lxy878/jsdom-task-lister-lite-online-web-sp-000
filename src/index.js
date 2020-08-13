const tasks = document.querySelector('ul#tasks');
const description = document.querySelector('input#new-task-description');
const descriptions = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('submit', (event)=>{
  // console.log(event.target);
  description_list.push(description.value);
  tasks.innerHTML = listTask();
  event.preventDefault();
});

function listTask(){
  let descriptions = '';
  for(let description of description_list){
    descriptions += `<li>${description}</li>`;
  }
  return descriptions
}
