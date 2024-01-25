import React, {useState} from "react";

function Stock({stock, port, handleClick}) {
  const [inPortfolio, setInPortfolio] = useState(false)

  // function handleClick() {
  //   if(!inPortfolio) {
  //     // put in portfolio
  //   }
  //   else {
  //     // delete from portfolio
  //   }
  //   setInPortfolio(!inPortfolio)
  // }
  
  return (
    <div>
      <div onClick={() => handleClick(stock, inPortfolio, setInPortfolio)} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
