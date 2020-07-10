import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    value: '',
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value.trim(),
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { value } = this.state;

    if (value) {
      const { addItem } = this.props;

      addItem(value);

      this.setState({
        value: '',
      });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onChange} value={value} />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  addItem: () => {},
};

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
