import { ReactComponent as NubankCard } from '../svg/fignu3.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function section5() {

  AOS.init();

  return (
    <section className="container">
      <div className="flex-item-1" data-aos='fade-up' data-aos-delay="200">
        <h5>seu roxinho</h5>
        <h2 className="mt-2">Crédito e débito.</h2>
        <p className="my-2">Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também. Facilidade e segurança para você em mais de 30 milhões de estabelecimentos, além dos benefícios Mastercard.</p>
        <ul className="list my-2">
          <li className="list-item bg-icon-contactless">
            <strong>Tecnologia Contactless</strong>
            <p>Tecnologia de pagamento por aproximação. Mais agilidade no dia a dia.</p>
          </li>
          <li className="list-item bg-icon-card">
            <strong>Cartão virtual</strong>
            <p>Você pode gerar cartões virtuais no app para suas compras online. Mais segurança.</p>
          </li>
        </ul>
        <div>
          <a href="#link" className="link">Saiba mais</a>
        </div>
      </div>
      <div className="flex-item-1 p-3" data-aos='fade-up' data-aos-delay="400">
        <NubankCard/>
      </div>
    </section>
  )
}