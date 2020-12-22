import { ToDoItem } from '../components/ToDoItemEntry';

// for front-end test only
// no long be used when finish the setup of api
export const staticTodoItems: ToDoItem[] = [
    {
        id: 11,
        title: "Go to Market",
        description: "Buy ingredients to prepare dinner",
        completed: true
    },
    {
        id: 12,
        title: "Study",
        description: "Read Algebra and History textbook for upcoming test",
        completed: false
    },
    {
        id: 13,
        title: "Sally's books",
        description: "Go to library to rent sally's books",
        completed: true
    },
    {
        id: 14,
        title: "Article",
        description: "Write article on how to use django with react",
        completed: false
    }
];
