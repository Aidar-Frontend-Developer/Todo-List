import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

const Header = ({ title, todos }) => (
    <header>
        <Stats todos={todos} />
        <h1>{title}</h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default Header;
