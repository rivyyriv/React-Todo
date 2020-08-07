import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import ListForm from "./components/TodoForm";
import "./components/Todo.css";


const tasks = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks 
    };
  }

  toggleItem = itemId => {
    console.log(itemId);
    
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

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
