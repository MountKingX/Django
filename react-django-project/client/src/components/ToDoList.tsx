import React from 'react';
import ToDoItemEntry, { ToDoItem } from './ToDoItemEntry';

import './todolist.styles.scss';

type Props = {
    items: ToDoItem[];
};

const ToDoList = ({items} : Props) => {
  return (
    <div className="to-do-list">
      Total ToDoItems: {items.length}
      <ul>
        {
          items.map(each => <li><ToDoItemEntry key={each.id} item={each} /></li>)
        }
      </ul>
    </div>
  );
}

export default ToDoList;
