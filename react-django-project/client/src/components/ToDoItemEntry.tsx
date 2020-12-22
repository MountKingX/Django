import React from 'react';

export type ToDoItem = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

type Props = {
    item: ToDoItem;
};

const ToDoItemEntry = ({ item } : Props) => {
    const {id, title, description, completed} = item;
    return (
        <div className="to-do-item">
            <p>id: {id} | title: {title} | description: {description} | completed: {completed}.</p>
        </div>
    );
}

export default ToDoItemEntry;
