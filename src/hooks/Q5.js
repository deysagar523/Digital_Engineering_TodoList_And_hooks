import React, { useReducer } from 'react';

const reducer=(state, action)=> {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

const Q5=()=> {
  const [items, dispatch] = useReducer(reducer, []);

  const handleAddItem = () => {
    const newItem = {
      id: Math.random(),
      name: `Item ${items.length + 1}`,
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}
export default Q5;