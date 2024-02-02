import { FormNewsletter } from '../FormNewsletter';
import './style.scss';

import celular1 from '../../assets/smartphones/celular1.png';
import celular2 from '../../assets/smartphones/celular2.png';
import celular3 from '../../assets/smartphones/celular3.png';
import celular4 from '../../assets/smartphones/celular4.png';
import celular5 from '../../assets/smartphones/celular5.png';
import celular6 from '../../assets/smartphones/celular6.png';
import celular7 from '../../assets/smartphones/celular7.png';
import celular8 from '../../assets/smartphones/celular8.png';
import celular9 from '../../assets/smartphones/celular9.png';
import celular10 from '../../assets/smartphones/celular10.png';
import celular11 from '../../assets/smartphones/celular11.png';
import celular12 from '../../assets/smartphones/celular12.png';
import { useEffect, useState } from 'react';

export function Newsletter() {
    const arrImages = [celular1, celular2, celular3, celular4, celular5, celular6, celular7, celular8, celular9, celular10, celular11, celular12]
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1024);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='newsletter'>
            <div className='newsletterContent'>
                <div className='newsletterText'>
                    <p className='pSubscribe'>Assine nossa newsletter</p>
                    <p className='pContentNewsletter'>Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada 15 dias.</p>
                </div>

                <FormNewsletter />
            </div>
            <div className='smartphoneAnimation'>
                {arrImages.map((image, index) => (
                    (index % 3 === 0) && (
                        <div className="imageGroup" key={index / 3}>
                            {[...arrImages.slice(index, index + 3), ...arrImages.slice(index, isMobile ? [] : index + 3)].map((img, i) => (
                                <img className='imageCell' key={i} src={img} alt='imagem de um celular' />
                            ))}
                        </div>
                    )
                ))}
            </div>
        </section>
    );
}