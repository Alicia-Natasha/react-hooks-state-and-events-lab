import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items"; 

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="filter">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
