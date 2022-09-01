import { ReactComponent as BackGround } from '../svg/fignu5.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section8() {

  AOS.init();

  return (
    <>
      <div className="bg-invite relative flex-center">
        <BackGround className='w-auto svg-invite'/>
        <section className="container">
          <div className="flex-item-1 flex-center flex-column" data-aos='fade-up' data-aos-delay="200">
            <h5>NUCONTA</h5>
            <h2 className="mt-2">O melhor dos bancos digitais. Pra você.</h2>
            <p className="my-2">Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</p>
            <div className='mt-5'>
              <a href="#QueroSer" className="btn">Quero ser Nubank</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}