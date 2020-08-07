import React from "react";

import Item from "./Todo";

const TodoList = props => {
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
