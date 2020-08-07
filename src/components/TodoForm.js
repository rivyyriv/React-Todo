import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({ item: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
