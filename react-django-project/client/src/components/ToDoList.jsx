import React from 'react';
import ToDoItem from './ToDoItem';

import './todolist.styles.css';

const ToDoList = ({ items }) => {
  return (
    <div className="to-do-list">
      Total ToDoItems: {items.length}
      <ul>
        {
          items.map(each => <li><ToDoItem key={each.id} item={each} /></li>)
        }
      </ul>
    </div>
  );
}

export default ToDoList;
