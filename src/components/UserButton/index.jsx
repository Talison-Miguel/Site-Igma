import './style.scss'

import PropTypes from 'prop-types';

import iconUser from '../../assets/svgs/iconUser.svg'

export function UserButton({ onClick }) {
    return (
        <button className='btnUser' onClick={onClick}>
            <img className="iconUser" src={iconUser} alt="Ícone de Usuário"/>
        </button>
    )
}

UserButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};