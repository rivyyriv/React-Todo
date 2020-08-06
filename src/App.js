import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import ListForm from "./components/TodoForm";
import "./components/Todo.css";


const tasks = [];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      tasks // same as === tasks: tasks
    };
  }

  // Class methods to update state
  toggleItem = itemId => {
    console.log(itemId);
    // In the grocery array, find the item that was clicked
    // (looking for the item with itemId)
    // Toggle the purchased field on that item
    // Return all other items untouched
    this.setState({
      // Build a new state object each time!
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            // return the item with purchased field toggled
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  // Class method to add a grocery item
  addItem = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Tasks</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
