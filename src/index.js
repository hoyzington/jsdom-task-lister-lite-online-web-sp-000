<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => addTask(e))
=======
document.addEventListener('submit', (e) => {
  e.preventDefault;
  let task = document.getElementById('')
>>>>>>> 06a9fb0fc133729fd7d5063e80400ef6445b7747
});

function addTask(e) {
  e.preventDefault()
  const task = document.getElementById('new-task-description')
  const ul = document.getElementById('tasks')
  const li = document.createElement('li')
  li.innerText = task.value
  ul.appendChild(li)
  e.target.reset()
}
