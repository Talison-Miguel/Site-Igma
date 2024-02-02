import './style.scss'

import ambev from '../../assets/svgs/brands/ambev.svg'
import bayer from '../../assets/svgs/brands/bayer.svg'
import brasilprev from '../../assets/svgs/brands/brasilprev.svg'
import centauro from '../../assets/svgs/brands/centauro.svg'
import comgas from '../../assets/svgs/brands/comgas.svg'
import cvc from '../../assets/svgs/brands/cvc.svg'
import google from '../../assets/svgs/brands/google.svg'
import honda from '../../assets/svgs/brands/honda.svg'
import hsl from '../../assets/svgs/brands/hsl.svg'
import idb from '../../assets/svgs/brands/idb.svg'
import mrv from '../../assets/svgs/brands/mrv.svg'
import neoenergia from '../../assets/svgs/brands/neoenergia.svg'


export function Clients() {
    return (
        <section className='clients'>
            <p className='clientText'>Expressamos mais de 20 anos de experiência criando plataformas digitais para as maiores empresas do Brasil, impactando milhões de pessoas.</p>
            <div className='logotypes'>
                <img src={mrv} alt="logo mrv" />
                <img src={brasilprev} alt="logo brasilprev" />
                <img src={idb} alt="logo idb" />
                <img src={comgas} alt="logo comgas" />
                <img src={bayer} alt="logo bayer" />
                <img src={cvc} alt="logo cvc" />
                <img src={centauro} alt="logo centauro" />
                <img src={neoenergia} alt="logo neoenergia" />
                <img src={google} alt="logo google" />
                <img src={honda} alt="logo honda" />
                <img src={ambev} alt="logo ambev" />
                <img src={hsl} alt="logo hsl" />
            </div>
        </section>
    )
}