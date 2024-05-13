// const selectOption = document.querySelectorAll('select');

// const updateTaskStatus = (id, status) => {
//   fetch(`/tracker/update/${id}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       status,
//       day: new Date().toISOString()
//     })
//   })
//   .then((res) => res.json())
//   .then((data) => { console.log(data); })
// }

// selectOption.forEach((select) => {
//   select.addEventListener('change', (e) => {
//     const taskId = select.getAttribute('data-id');
//     updateTaskStatus(taskId, select.value)
//   })
// })
