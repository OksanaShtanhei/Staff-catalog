import React, {useState} from 'react';

const List = ({filteredItems}) =>{
  const [id, setId] = useState(null)

    return (
      <div>    
        {filteredItems.map(el => (
          <div className="text-block" key={el.id} onClick={() => setId(el.id)}>
            <h3>{el.name}</h3>
            {el.id === id && 
            <div>
              <h5>{el.job}</h5>
              <p className="visible">{el.text}</p>
            </div>}
          </div>
        ))}
      </div>
    );
  }
  
  export default List;