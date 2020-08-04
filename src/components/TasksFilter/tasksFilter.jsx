import React from 'react';
import PropTypes from 'prop-types';

import './tasksFilter.css';

const TasksFilter = ({ filter, onChangeFilter }) => {
  const buttonsDescription = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];
  const buttons = buttonsDescription.map(({ name, label }) => {
    const className = name === filter ? 'selected' : '';

    return (
      <li key={name}>
        <button type="button" className={className} onClick={() => onChangeFilter(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
};

TasksFilter.defaultProps = {
  filter: '',
  onChangeFilter: () => {},
};

TasksFilter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default TasksFilter;
