import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

export default class Timer extends Component {
  interval = undefined;

  state = {
    min: 0,
    sec: 0,
  };

  componentDidMount() {
    const { min, sec } = this.props;

    this.setState({
      min,
      sec,
    });
  }

  componentWillUnmount() {
    this.onPause();
  }

  onPlay = () => {
    let { min, sec } = this.state;

    if (sec > 0 || min > 0) {
      this.interval = setInterval(() => {
        sec -= 1;

        if (sec <= 0 && min > 0) {
          sec = 59;
          min -= 1;
        }

        if (sec <= 0 && min <= 0) {
          clearInterval(this.interval);
        }

        this.setState({ min, sec });
      }, 1000);
    }
  };

  onPause = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  addZero(time) {
    if (time < 10) {
      return `0${time}`;
    }

    return time;
  }

  render() {
    const { min, sec } = this.state;

    return (
      <span className="timer">
        <button type="button" aria-label="play" className="icon icon-play" onClick={this.onPlay} />
        <button type="button" aria-label="pause" className="icon icon-pause" onClick={this.onPause} />
        <span className="time">{`${this.addZero(min)}:${this.addZero(sec)}`}</span>
      </span>
    );
  }
}

Timer.defaultProps = {
  min: 0,
  sec: 0,
};

Timer.propTypes = {
  min: PropTypes.number,
  sec: PropTypes.number,
};
