import React from "react";
import Stock from "./Stock";

function StockContainer({stockDisplay, handleClick}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockDisplay.map((stock) => {
        return <Stock 
                  stock={stock} 
                  key={stock.id}
                  handleClick={handleClick}/>
      })}
    </div>
  );
}

export default StockContainer;
