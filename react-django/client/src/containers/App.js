import React from 'react';
import ToDoList from '../components/ToDoList';

import { staticTodoItems } from '../constants/data';

import './app.styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>My React-Django App</h1>
        <ToDoList items={staticTodoItems} />
      </div>
    );
  }
}

export default App;
