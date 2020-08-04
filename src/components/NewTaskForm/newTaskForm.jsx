import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    value: '',
    min: '',
    sec: '',
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value.trim(),
    });
  };

  onChangeTime = (event) => {
    const timeAtribute = event.target.getAttribute('data-time');

    this.setState({
      [timeAtribute]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { value, min, sec } = this.state;

    if (value) {
      const { addItem } = this.props;
      const minute = this.checkTime(min);
      const second = this.checkTime(sec);

      addItem({
        value,
        min: minute,
        sec: second,
      });

      this.setState({
        value: '',
        min: '',
        sec: '',
      });
    }
  };

  checkTime(time) {
    let checkedTime = parseFloat(time);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(time)) {
      checkedTime = 0;
    }

    if (checkedTime >= 60) {
      checkedTime = 59;
    }
    return checkedTime;
  }

  render() {
    const { value, min, sec } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onChange} value={value} />
        <input
          data-time="min"
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={this.onChangeTime}
          value={min}
        />
        <input
          data-time="sec"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={this.onChangeTime}
          value={sec}
        />
        <button aria-label="submit" type="submit" hidden />
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
