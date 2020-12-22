import React from 'react';
import { ToDoListTable } from './ToDoListTable';

import './todolistPage.styles.scss';

const ToDoListPage: React.FunctionComponent<any> = () => {
  return (
    <div id="todolist-page">
      <ToDoListTable />
    </div>
  );
};

export default ToDoListPage;
