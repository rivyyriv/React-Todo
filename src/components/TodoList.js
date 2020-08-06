import React from "react";

import Item from "./Todo";

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.tasks.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.tasks.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;
