document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('click', (event)=>{
  console.log(event.to_s);
  event.preventDefault();
});
