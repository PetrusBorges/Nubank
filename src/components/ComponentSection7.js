import { ReactComponent as LogoNu } from '../svg/fignu4.svg'
import { ReactComponent as AppStore } from '../svg/app-store.svg'
import { ReactComponent as GooglePlay } from '../svg/google-play.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section7() {

  AOS.init();

  return (
    <section className="container">
      <div className="flex-item-1" data-aos='fade-up' data-aos-delay="200">
        <h5>faça sua conta</h5>
        <h2 className="mt-2">Baixe. É gratuito.</h2>
        <p className="my-2">Vamos lá, junte-se aos mais de 20 milhões que escolheram o Nubank. Conte com o banco digital que mais cresce no Brasil. É de graça. É para todos. Clique e baixe o App.</p>
        <div className="flex-start">
          <a href='#link'><AppStore className="w-auto button-app"/></a>
          <a href='#link'><GooglePlay className="w-auto ml-2 button-app"/></a>
        </div>
      </div>
      <div className="flex-item-1 p-3" data-aos='fade-up' data-aos-delay="400">
        <LogoNu/>
      </div>
    </section>
  )
}