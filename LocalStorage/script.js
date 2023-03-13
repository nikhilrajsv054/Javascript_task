// Retrieve item list from local storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Initialize list
localStorage.setItem('items', JSON.stringify(itemsArray));
const itemList = document.getElementById('item-list');

// Render initial list
renderList();

// Add item to list
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addItem);

function addItem(event) {
  event.preventDefault();
  const newItem = document.getElementById('new-item').value;
  if (newItem === '') return;
  itemsArray.push(newItem);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  renderList();
  document.getElementById('new-item').value = '';
}

// Render item list
function renderList() {
  itemList.innerHTML = '';
  for (let i = 0; i < itemsArray.length; i++) {
    const li = document.createElement('li');
    li.innerText = itemsArray[i];
    itemList.appendChild(li);
  }
}
