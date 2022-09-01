import { ReactComponent as Apple } from '../svg/appstore.svg'
import { ReactComponent as PlayStore } from '../svg/playstore.svg'
import { ReactComponent as IconCard } from '../svg/icon-card.svg'
import { ReactComponent as IconMobile } from '../svg/icon-mobile.svg'
import { ReactComponent as IconContactless } from '../svg/icon-contactless.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Section1() {

  AOS.init();

  return (
    <main className="container hero py-5">
      <div className="flex-item-1 py-3" data-aos='fade-up' data-aos-delay="200">
        <h1>Ser Nubank é reinventar sua vida financeira.</h1>
        <p className="my-2">Conta com rendimento acimada poupança, cartão de crédito sem anuidade e o melhor: resolva tudo pelo app.</p>
        <div className="flex-start">
          <a href="#Nubank" className="btn">Quero ser Nubank</a>
          <a href="#Apple"><Apple className='ml-1'/></a>
          <a href="#PlayStore"><PlayStore className='ml-1'/></a>
        </div>
      </div>
      <div className="flex-item-3 flex-center div-card py-4 mb-5" data-aos='fade-up' data-aos-delay="400">
        <IconCard className='icon-card-hero dropshadow'/>
        <IconMobile className='icon-mobile-hero dropshadow'/>
        <IconContactless className='icon-contactless-hero dropshadow'/>
        <div className='card'></div>
      </div>
    </main>
  )
}