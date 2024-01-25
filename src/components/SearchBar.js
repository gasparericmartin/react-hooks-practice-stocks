import React from "react";

function SearchBar({stockDisplay, setStockDisplay, handleFilter}) {
  function handleSort(e) {
    if(e.target.value === 'Alphabetically') {
      const newDisplay = stockDisplay.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        if(nameA > nameB) {
          return 1
        }
        if(nameA < nameB) {
          return -1
        }

        return 0
      })

      setStockDisplay([...newDisplay])
    }
    else if(e.target.value === 'Price') {
      const newDisplay = stockDisplay.sort((a, b) => {
        if (a.price > b.price) {
          return 1
        }
        if (a.price < b.price) {
          return -1
        }

        return 0
      })

      setStockDisplay([...newDisplay])
    }
  }


  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
