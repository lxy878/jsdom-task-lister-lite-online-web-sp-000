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
    if(event.target.nodeName === 'BUTTON'){

    }
  });

});

function listTask(descriptions){
  let list = '';
  for(let i=0; i<descriptions; i++){
    list += `<li>${descriptions[i]}<button id=${}>X</button></li>`;
  }
  return list;
}
