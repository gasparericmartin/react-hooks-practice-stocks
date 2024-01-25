import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [stockDisplay, setStockDisplay] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filterVal, setFilterVal] = useState('Tech')
  const [sortVal, setSortVal] = useState('')
  

  function handleStockClick(stock, inPortfolio, setInPortfolio) {
    if(!portfolio.find((portStock) => portStock === stock)) {
      setPortfolio([...portfolio, stock])
      setInPortfolio(!inPortfolio)
      
    }    
  }

  function handlePortClick(stock, inPortfolio, setInPortfolio) {
    setPortfolio(portfolio.filter((portStock) => portStock.id !== stock.id))
  }
  
  function handleFilter(e) {
    setStockDisplay(stockList.filter((stock) => stock.type === e.target.value))
  }

  useState(() => {
    fetch('http://localhost:3001/stocks')
    .then((r) => r.json())
    .then((data) => {
      setStockList(data)
      setStockDisplay(data)
    })
  }, [])

  return (
    <div>
      <SearchBar
        stockDisplay={stockDisplay}
        setStockDisplay={setStockDisplay} 
        handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stockDisplay={stockDisplay}
            handleClick={handleStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio}
            handleClick={handlePortClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
