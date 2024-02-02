import { useState } from 'react';
import './style.scss';
import { InputText } from '../InputText';
import { Button } from '../Button';

export function FormNewsletter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);

    const handleNameChange = (value) => {
        setName(value);
        setIsError(false); 
    };

    const isFormValid = () => {
        return name.trim() !== '' && email.trim() !== '';
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        setIsError(false); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            console.log('Nome:', name);
            console.log('Email:', email);
        } else {
        setIsError(true); 
        }
    };

    return (
        <form className={`formNewsletter ${isError ? 'error' : ''}`} onSubmit={handleSubmit}>
            <InputText
                type="text"
                name="name"
                placeholder="Nome"
                onChange={handleNameChange}
                classNameinvalid={isError ? 'errorInput' : ''}
                spanError={isError ? 'errorSpan' : ''}
            />
            <InputText
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleEmailChange}
                classNameinvalid={isError ? 'errorInput' : ''}
                spanError={isError ? 'errorSpan' : ''}
            />
            <Button text="Assinar Newsletter" type="submit" />
        </form>
    );
}
