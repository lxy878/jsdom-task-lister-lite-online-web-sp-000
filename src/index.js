document.addEventListener("DOMContentLoaded", () => {

  const tasks = document.querySelector('ul#tasks');
  const description = document.querySelector('input#new-task-description');
  const descriptions = [];

  document.addEventListener('submit', (event)=>{
    descriptions.push(description.value);
    tasks.innerHTML = listTask(descriptions);
    event.preventDefault();
  });

  document.addEventListener('click', (event)=>{
    console.log(event.target.name);
  });

});

function listTask(descriptions){
  let list = '';
  for(let description of descriptions){
    list += `<li>${description}<button>X</button></li>`;
  }
  return list;
}
