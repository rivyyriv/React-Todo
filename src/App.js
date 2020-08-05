import React from "react";
import ReactDOM from "react-dom";

import GroceryList from "./components/TodoList";
import ListForm from "./components/TodoForm";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries // same as === groceries: groceries
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
      groceries: this.state.groceries.map(item => {
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
      groceries: [...this.state.groceries, newItem]
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
