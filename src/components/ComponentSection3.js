import { ReactComponent as IconCash } from '../svg/icon-cash.svg'
import { ReactComponent as IconTransfer } from '../svg/icon-transfer.svg'
import { ReactComponent as IconCard } from '../svg/icon-card.svg'
import { ReactComponent as IconPhone } from '../svg/icon-phone.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section3() {

  AOS.init();

  return (
    <section className="container">
      <div className="best px-3 py-4" data-aos='fade-up' data-aos-delay="400">
        <div className="flex-item-auto">
          <h5>O melhor</h5>
          <h2>Por que Nubank?</h2>
        </div>
        <div className="best-item flex-item-auto">
          <IconCash className='icon w-auto'/>
          <p className='mt-2 bold'>Conta rende mais que a poupança</p>
        </div>
        <div className="best-item flex-item-auto">
          <IconTransfer className='icon w-auto'/>
          <p className='mt-2 bold'>Transferências e TEDs ilimitadas</p>
        </div>
        <div className="best-item flex-item-auto">
          <IconCard className='icon w-auto'/>
          <p className='mt-2 bold'>Conta e cartão 100% gratuitos</p>
        </div>
        <div className="best-item flex-item-auto">
          <IconPhone className='icon w-auto'/>
          <p className='mt-2 bold'>O melhor suporte 24h do Brasil</p>
        </div>
      </div>
    </section>
  )
}