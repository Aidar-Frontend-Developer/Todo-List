import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

const Todo = ({ completed, id, onDelete, onStatusChange, title }) => (
    <div className={`todo${completed ? ' completed' : ''}`}>
        <Checkbox checked={completed} onChange={() => onStatusChange(id)} />

        <span className="todo-title">{title}</span>

        <Button className="delete icon" icon="delete" onClick={() => onDelete(id)} />
    </div>
)

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default Todo;
