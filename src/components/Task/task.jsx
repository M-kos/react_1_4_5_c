import React from 'react';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

const Task = (props) => {
  const { toggleDone, toggleEdit, onDeleted, task } = props;
  const { description, created, id, isEdit, isDone } = task;
  let className = '';

  if (isEdit) {
    className = 'editing';
  }

  if (isDone) {
    className = 'completed';
  }

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      props.toggleEdit();
    }
  };

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isDone} onChange={toggleDone} />
        <label>
          <span className="description">{description}</span>
          <span className="created">{`created ${formatDistance(created, new Date(), {
            includeSeconds: true,
          })} ago`}</span>
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" onClick={toggleEdit} />
        <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={() => onDeleted(id)} />
      </div>
      {isEdit && (
        <input
          type="text"
          className="edit"
          value={description}
          onChange={(event) => props.editItem(id, event.target.value)}
          onKeyPress={pressEnter}
        />
      )}
    </li>
  );
};

Task.defaultProps = {
  task: {},
  toggleDone: () => {},
  onDeleted: () => {},
  toggleEdit: () => {},
  editItem: () => {},
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    isEdit: PropTypes.bool,
    isDone: PropTypes.bool,
  }),
  toggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  toggleEdit: PropTypes.func,
  editItem: PropTypes.func,
};

export default Task;
