import './style.scss';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { InputText } from '../InputText';
import { Button } from '../Button';

import avatar from '../../assets/avatar/avatar.png'

export function MenuLogin({ classOpen, changeClass }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const excludedElementRef = useRef(null)
    const [isValid, setIsValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const imgRef = useRef(null)

    const handleNameChange = (value) => {
        setName(value);
        setIsError(false);
    };

    const isFormValid = () => {
        return name.trim() !== '' && email.trim() !== '';
    };

    const handlePasswordChange = (value) => {
        setEmail(value);
        setIsError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (isFormValid()) {
            setIsValid(!isValid)
            setDisabled(!disabled)
        } else {
            setIsError(true);
        }
    };
    
    useEffect(() => {
        const handleClick = (event) => {
            if (excludedElementRef.current && excludedElementRef.current.contains(event.target)) {
                return;
            }
            
            if(classOpen) {
                changeClass('')
            } 

            if(imgRef.current != null && event.target.tagName === 'IMG') {
                classOpen ? changeClass('') : changeClass('menuLoginOpen')
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [changeClass, classOpen]);


  return (
        <>
            {isValid ? <img src={avatar} alt="avatar" className='avatar' ref={imgRef}/> : ''}
            <form className={`menuLogin ${classOpen}`} onSubmit={handleSubmit} ref={excludedElementRef}>
                <h2>Login</h2>
                <InputText
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleNameChange}
                    classNameinvalid={isError ? 'errorInput' : ''}
                    spanError={isError ? 'errorSpan' : ''}
                    disabled={disabled}
                />
                <InputText
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    onChange={handlePasswordChange}
                    classNameinvalid={isError ? 'errorInput' : ''}
                    spanError={isError ? 'errorSpan' : ''}
                    disabled={disabled}
                />
                {isValid ? <Button text="Sair" type="submit" /> : <Button text="Entrar" type="submit" />}
                
            </form>
        </>
  );
}

MenuLogin.propTypes = {
  classOpen: PropTypes.string.isRequired,
  changeClass: PropTypes.func,
};

