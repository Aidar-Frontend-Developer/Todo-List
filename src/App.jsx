import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData,
        };
    }

    handleStatusChange = (id) => {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos });
    }

    handleDelete = (id) => {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    render() {
        const { title } = this.props;
        const { todos } = this.state;
        return (
            <main>
                <Header title={title} todos={todos} />

                <section className="todo-list">
                    {todos.map(todo =>
                        <Todo
                            completed={todo.completed}
                            id={todo.id}
                            key={todo.id}
                            onDelete={this.handleDelete}
                            onStatusChange={this.handleStatusChange}
                            title={todo.title}
                        />
                    )}
                </section>
            </main>
        )
    }
}

App.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    title: PropTypes.string,
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
