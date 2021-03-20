import React, {useState, useEffect} from 'react';
import data from './data';
import List from './List';
import './App.css';

const App = () =>{
  const [filteredItems, setFilteredItems] = useState(data)
  const btn = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  const filterHandler = (e) =>{
    e.preventDefault()
    if(e.target.value === "all"){
      setFilteredItems(data.filter(el => el))
    }
    else{
      setFilteredItems(data.filter(el => el.name[0] === e.target.value))
    }
  }
  return (
    <div className="App">
      <div className="button-container">
        {btn.map(el => {
          return <button key={Math.random()} onClick={filterHandler} value={el}>{el}</button>
        })}
        <button className="all" onClick={filterHandler} value="all">all</button>
      </div>
      <List 
         filteredItems={filteredItems}
        />
    </div>
  );
}


export default App;
