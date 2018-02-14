import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, icon, onClick }) => (
    <button className={className} onClick={onClick}>
        <i className="material-icons">{icon}</i>
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
