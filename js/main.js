const todoList = [];

function addToTodo() {
  todoList.push(todoInput.value);

  res.innerHTML = "";

  todoList.forEach((todo, i) => {
    res.innerHTML += `${i + 1}. ${todo}<br>`;
  });
}
console.log(todoList);

function filterList() {
  const searchText = todoInput.value.toLowerCase();
  const filteredList = todoList.filter((item) =>
    item.toLowerCase().includes(searchText)
  );

  res.innerHTML = "";

  if (filteredList.length === 0) {
    res.innerHTML = "can't find anything";
    return;
  }

  filteredList.forEach((todo, i) => {
    res.innerHTML += `${i + 1}. ${todo}<br>`;
  });
}
