import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/task';

import './taskList.css';

const TaskList = (props) => {
  const { tasks } = props;
  const taskComponents = tasks.map((task) => {
    return (
      <Task
        task={task}
        key={task.id}
        toggleDone={() => props.toggleDone(task.id)}
        onDeleted={() => props.onDeleted(task.id)}
        toggleEdit={() => props.toggleEdit(task.id)}
        editItem={props.editItem}
      />
    );
  });

  return <ul className="todo-list">{taskComponents}</ul>;
};

TaskList.defaultProps = {
  tasks: [],
  toggleDone: () => {},
  onDeleted: () => {},
  editItem: () => {},
  toggleEdit: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  toggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  editItem: PropTypes.func,
  toggleEdit: PropTypes.func,
};

export default TaskList;
