import { useState, useEffect } from "react";

function ItemList() {
  const [items, setItems] = useState([]);

  // Load items from local storage on mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  // Update local storage whenever items change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Add a new item to the list
  function addItem(event) {
    event.preventDefault();
    const newItem = event.target.elements.item.value;
    if (newItem === "") return;
    setItems([...items, newItem]);
    event.target.reset();
  }

  // Render the item list
  const itemList = items.map((item, index) => <li key={index}>{item}</li>);

  // Render the component
  return (
    <div className="container">
      <h1>Item List</h1>
      <form onSubmit={addItem}>
        <div className="input-section">
          <input type="text" name="item" placeholder="Enter an item" />
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>{itemList}</ul>
    </div>
  );
}

export default ItemList;


// =========================
// Component calling

// import ItemList from './ItemList';

// function App() {
//   return <ItemList />;
// }

// export default App;
