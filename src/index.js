document.addEventListener("DOMContentLoaded", () => {

  const tasks = document.querySelector('ul#tasks');
  const description = document.querySelector('input#new-task-description');
  const descriptions = [];

  document.addEventListener('submit', (event)=>{
    console.log(event.target);
    descriptions.push(description.value);
    tasks.innerHTML = listTask(descriptions);
    event.preventDefault();
  });

});

function listTask(descriptions){
  let list = '';
  for(let description of descriptions){
    list += `<li>${description}</li>`;
  }
  return list
}
