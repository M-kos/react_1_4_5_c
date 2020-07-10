import React from 'react';
import PropTypes from 'prop-types';

import TaskList from '../TaskList/taskList';
import Footer from '../Footer/footer';

import './main.css';

const Main = (props) => {
  const {
    tasks,
    toggleDone,
    onDeleted,
    editItem,
    toggleEdit,
    filter,
    onChangeFilter,
    clearCompleted,
    countDone,
  } = props;

  return (
    <section className="main">
      <TaskList
        tasks={tasks}
        toggleDone={toggleDone}
        onDeleted={onDeleted}
        editItem={editItem}
        toggleEdit={toggleEdit}
      />
      <Footer filter={filter} onChangeFilter={onChangeFilter} clearCompleted={clearCompleted} countDone={countDone} />
    </section>
  );
};

Main.defaultProps = {
  tasks: [],
  filter: '',
  countDone: 0,
  toggleDone: () => {},
  onDeleted: () => {},
  onChangeFilter: () => {},
  clearCompleted: () => {},
  editItem: () => {},
  toggleEdit: () => {},
};

Main.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  countDone: PropTypes.number,
  toggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  onChangeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
  editItem: PropTypes.func,
  toggleEdit: PropTypes.func,
};

export default Main;
