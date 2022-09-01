import People1 from '../img/people1.png'
import People2 from '../img/people4.png'
import People3 from '../img/people6.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section2() {

  AOS.init();

  return (
    <section className="container">
      <div className="flex-item-4 flex-column" data-aos='fade-up'>
        <h5>Para todos</h5>
        <h2 className="mt-2">Completo.</h2>
        <p className="my-2">Resolva seu dia a dia pelo celular. Sem filas, sem anuidade, sem tarifas abusivas. Cuide do seu dinheiro de um jeito simples. Somos eficientes para você usar seu dinheiro com o que realmente importa, sem tarifas de manutenção.</p>

        <ul className="list my-2">
          <li className="list-item bg-icon-check">
            <strong>100% gratuito.</strong>
            <p>Isso mesmo, você não paga nada para abrir sua conta.</p>
          </li>
          <li className="list-item bg-icon-check">
            <strong>Sem taxas ou cobranças.</strong>
            <p>Não se preocupe com taxas adicionais ou anuidades.</p>
          </li>
          <li className="list-item bg-icon-check">
            <strong>O melhor suporte de todos.</strong>
            <p>Segundo pesquisas, temos o melhor suporte pra você.</p>
          </li>
        </ul>

        <p>
          <a href="#link" className="link">Confira os benefícios</a>
        </p>
      </div>

      <div className="flex-item-3 mx-2 p-3" data-aos='fade-up' data-aos-delay="200">
        <img src={People1} alt="Pessoa"className='people1' />
      </div>
      
      <div className="flex-item-1 flex-column mx-2 my-3 p-3" data-aos='fade-up' data-aos-delay="400">
        <img src={People2} alt="Pessoa" className='people2 mx-2 my-2'/>
        <img src={People3} alt="Pessoa" className='people3 mx-2 my-2' />
      </div>
    </section>
  )
}