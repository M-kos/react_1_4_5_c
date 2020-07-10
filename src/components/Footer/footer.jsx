import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/tasksFilter';

import './footer.css';

const Footer = (props) => {
  const { countDone, filter, onChangeFilter, clearCompleted } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{`${countDone} items left`}</span>
      <TasksFilter filter={filter} onChangeFilter={onChangeFilter} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  filter: '',
  countDone: 0,
  onChangeFilter: () => {},
  clearCompleted: () => {},
};

Footer.propTypes = {
  filter: PropTypes.string,
  countDone: PropTypes.number,
  onChangeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};

export default Footer;
