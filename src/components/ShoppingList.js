import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All");

  function handleCategoryChange(event) {
    // event.target.value will be the value selected by the user
    setCategory(event.target.value);
  }

  // we want to filter the items to only display the ones based on the selected category
  const chosenItem = items.filter((item) => {
    if (category === "All") return true;

    else return item.category === category;
  });
    
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {chosenItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
