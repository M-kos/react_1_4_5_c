import React, { Component } from 'react';

import Header from '../Header/header';
import Main from '../Main/main';

import './App.css';

export default class App extends Component {
  initialId = 100;

  state = {
    tasks: [
      {
        id: 1,
        description: 'Completed task',
        created: new Date('July 9, 2020 14:24:00'),
        isEdit: false,
        isDone: true,
      },
      {
        id: 2,
        description: 'Editing task',
        created: new Date('July 9, 2020 15:24:00'),
        isEdit: true,
        isDone: false,
      },
      {
        id: 3,
        description: 'Active task',
        created: new Date('July 9, 2020 15:55:00'),
        isEdit: false,
        isDone: false,
      },
    ],
    filter: 'all',
  };

  findIndex = (arr, id) => {
    return arr.findIndex((el) => el.id === id);
  };

  toggleDone = (id) => {
    this.changeProperty(id, 'isDone');
  };

  toggleEdit = (id) => {
    this.changeProperty(id, 'isEdit');
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const idx = this.findIndex(tasks, id);

      return {
        tasks: [...tasks.slice(0, idx), ...tasks.slice(idx + 1)],
      };
    });
  };

  addItem = (description) => {
    this.setState(({ tasks }) => {
      return {
        tasks: [
          ...tasks,
          {
            description,
            created: new Date(),
            isEdit: false,
            isDone: false,
            id: this.initialId + 1,
          },
        ],
      };
    });
  };

  onChangeFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  clearCompleted = () => {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter((task) => !task.isDone),
      };
    });
  };

  editItem = (id, value) => {
    this.changeProperty(id, 'description', value);
  };

  filterItems(arr, filter) {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((el) => !el.isDone);
      case 'completed':
        return arr.filter((el) => el.isDone);
      default:
        return arr;
    }
  }

  changeProperty(id, property, value = '') {
    this.setState(({ tasks }) => {
      const idx = this.findIndex(tasks, id);

      const oldItem = tasks[idx];
      const newItem = { ...oldItem, [property]: value || !oldItem[property] };

      return {
        tasks: [...tasks.slice(0, idx), newItem, ...tasks.slice(idx + 1)],
      };
    });
  }

  render() {
    const { tasks, filter } = this.state;
    const items = this.filterItems(tasks, filter);
    const countDone = tasks.filter((task) => !task.isDone).length;

    return (
      <div className="App">
        <Header addItem={this.addItem} />
        <Main
          tasks={items}
          toggleDone={this.toggleDone}
          onDeleted={this.deleteItem}
          filter={filter}
          onChangeFilter={this.onChangeFilter}
          clearCompleted={this.clearCompleted}
          countDone={countDone}
          editItem={this.editItem}
          toggleEdit={this.toggleEdit}
        />
      </div>
    );
  }
}
