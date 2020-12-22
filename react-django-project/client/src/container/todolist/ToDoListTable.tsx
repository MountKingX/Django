import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import TodoApi from '../../apis/TodoApi';
import { staticTodoItems } from '../../constants/data';
import { ToDoItem } from '../../components/ToDoItemEntry';

const headerKeys = ['Id', 'Title', 'Description', 'Completed?', 'Actions'];

type State = {
    items: ToDoItem[];
};

export class ToDoListTable extends React.Component<any, State> {

    state = {
        items: staticTodoItems,
    };

    componentDidMount() {
        TodoApi.get('')
            .then(response => {
                const data: ToDoItem[] = response.data;
                const newItems = [...this.state.items].concat(data);
                this.setState({ items: newItems });
            });
    }

    render() {
        const { items } = this.state;
        return (
            <div className='todolist-content py-2'>
                <Container>
                    <h3>Current ToDoItems</h3>
                    <hr/>
                    <Table
                        variant="light"
                        className='todolist-table'
                        striped
                        bordered
                        hover
                        responsive
                    >
                        <thead className="bg-dark text-white">
                        <tr>
                            {headerKeys.map(heading => {
                                return <td className="font-weight-bold" key={heading}>{heading}</td>;
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr className='todolist-table--item' key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.completed ? 'Yes' : 'No'}</td>
                                <td>
                                    <Button variant="primary">
                                        Edit it
                                    </Button>
                                    <Button variant="danger" className="ml-1">
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
