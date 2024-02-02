import './style.scss'

import { useEffect, useState } from 'react';

import LogoHeader from '../../assets/svgs/logoHeader.svg'
import { UserButton } from '../UserButton'

import AOS from 'aos'
import 'aos/dist/aos.css';
import { MenuLogin } from '../MenuLogin';

export function Header() {
    const [userButtonClicked, setUserButtonClicked] = useState(false);
    const [menuLoginClass, setMenuLoginClass] = useState('');

    const handleUserButtonClick = () => {
        setUserButtonClicked(!userButtonClicked);
    };
    
    function changeClass(classN) {
        setMenuLoginClass(classN);
    }

    useEffect(() => {
        setMenuLoginClass(userButtonClicked ? 'menuLoginOpen' : '');
    },[userButtonClicked])

    useEffect(() => {
        AOS.init({
            once: true, 
            offset: 0, 
            duration: 900, 
            easing: 'ease-in-out', 
            delay: 100, 
            anchorPlacement: 'top-bottom', 
        });
    }, [])

    return (
        <header className='header' data-aos="fade-down">
            <img className='logoHeader' src={LogoHeader} alt="" />
            <UserButton className="userButton" onClick={handleUserButtonClick}/>
            <MenuLogin classOpen={menuLoginClass} changeClass={changeClass}/>
        </header>
    )
}