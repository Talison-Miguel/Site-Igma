import './style.scss'

import imagehero from '../../assets/hero/Image.png'
import vectorHero from '../../assets/svgs/vectorHero.svg'
import logotipoIgma from '../../assets/svgs/logotipoIgma.svg'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css';

export function Hero() {
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
        <section className='hero' data-aos="fade-up">
            <div className='containerimg'>
                <img className='imgHero' src={imagehero} alt="" />
                <img className='vectorHero' src={vectorHero} alt="" />
            </div>
            <div className='contentHero'>
                <div className='igma'>
                    <h2 className='subtitleIgma'>Prazer, somos</h2>
                    <img src={logotipoIgma} alt="" />
                </div>
                <h1 className='titlecontent'>Acreditamos em um mundo onde experiências incríveis são essenciais.</h1>
                <p className='textcontent'>Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.</p>
            </div>
        </section>
    )
}