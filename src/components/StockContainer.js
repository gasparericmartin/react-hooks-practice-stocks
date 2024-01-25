import React from "react";
import Stock from "./Stock";

function StockContainer({stockList}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((stock) => {
        return <Stock stock={stock} key={stock.id}/>
      })}
    </div>
  );
}

export default StockContainer;
