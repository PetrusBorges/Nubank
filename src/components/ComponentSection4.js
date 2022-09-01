import { ReactComponent as AppNubank } from '../svg/fignu2.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section4() {

  AOS.init();

  return (
    <section className="container">
      <div className="flex-item-1 p-5" data-aos='fade-up' data-aos-delay="200">
        <AppNubank/>
      </div>
      <div className="flex-item-1" data-aos='fade-up' data-aos-delay="400">
        <h5>Conta digital</h5>
        <h2 className="mt-2">Tudo pelo App.</h2>
        <p className="my-2">Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil. Pague suas contas, ajuste seu limite, bloqueie e desbloqueie o cartão quando quiser e acompanhe cada movimentação em tempo real. Tudo pelo aplicativo.</p>
        <ul className="list my-2">
          <li className="list-item bg-icon-mobile">
            <strong>Tudo na palma da sua mão</strong>
            <p>Conta digital. Você resolve tudo pelo App. Tudo.</p>
          </li>
          <li className="list-item bg-icon-time">
            <strong>Sem filas ou burocracias</strong>
            <p>Investimos no melhor suporte pra isso. Não tem filas. Economia de tempo.</p>
          </li>
          <li className="list-item bg-icon-config">
            <strong>Configure tudo no app</strong>
            <p>Toda a configuração e acesso aos novos recursos a um clique de distância.</p>
          </li>
        </ul>
        <div>
          <a href="#link" className="link">Segura e sem complicações</a>
        </div>
      </div>
    </section>
  )
}