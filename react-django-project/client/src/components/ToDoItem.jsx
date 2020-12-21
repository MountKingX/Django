import React from 'react';

const ToDoItem = ({ item }) => {
  const { id, title, description, completed } = item;
  return (
    <div className="to-do-item">
      <p>id: {id} | title: {title} | description: {description} | completed: {completed}.</p>
    </div>
  );
}

export default ToDoItem;
