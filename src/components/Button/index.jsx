import './style.scss'

import PropTypes from 'prop-types';

export function Button({ text, type }) {
    return (
        <button className='btnNewsletter' type={type}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};