import { ReactComponent as AppStore } from '../svg/app-store.svg'
import { ReactComponent as GooglePlay } from '../svg/google-play.svg'
import { ReactComponent as LogoNuWhite } from '../svg/logonu-white.svg'
import { ReactComponent as Facebook } from '../svg/icon-facebook.svg'
import { ReactComponent as YouTube } from '../svg/icon-youtube.svg'
import { ReactComponent as Instagram } from '../svg/icon-instagram.svg'
import { ReactComponent as Twitter } from '../svg/icon-twitter.svg'

export default function Section9() {
  return (
    <footer>
      <section className="container flex-top">
        <div className="ml-4">
          <h4 className="color-white">Nubank</h4>
          <ul className="list mt-2 pt-2">
            <li><a href="#link">Sobre nós</a></li>
            <li><a href="#link">Carreiras</a></li>
            <li><a href="#link">Perguntas Frequentes</a></li>
            <li><a href="#link">Contato</a></li>
            <li><a href="#link">Imprensa</a></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="color-white">Produtos</h4>
          <ul className="list mt-2 pt-2">
            <li><a href="#link">Conta Digital</a></li>
            <li><a href="#link">Cartão de crédito</a></li>
            <li><a href="#link">Rewards</a></li>
            <li><a href="#link">Empréstimo</a></li>
            <li><a href="#link">Conta PJ</a></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="color-white">Fale conosco</h4>
          <ul className="list mt-2 pt-2">
            <li><a href="#link">0800 608 6236</a></li>
            <li><a href="#link">meajuda@nubank.com.br</a></li>
            <li><a href="#link">Atendimento 24h</a></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="color-white">Explore mais</h4>
          <ul className="list mt-2 pt-2">
            <li><a href="#link">Comunidade</a></li>
            <li><a href="#link">Blog</a></li>
            <li><a href="#link">Newsletter</a></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="color-white">Baixe o App</h4>
          <div className="mt-2 pt-2 flex-start">
          <a href='#link'><AppStore className="w-auto button-app"/></a>
          <a href='#link'><GooglePlay className="w-auto ml-2 button-app"/></a>
        </div>
        </div>
      </section>

      <section className="container flex-spacebetween py-3 border-top">
        <div className='flex-start'>
          <LogoNuWhite className='logo-footer'/>
          <p className="color-white ml-2">Nu Pagamentos S.A. 18.236.120/0001-58<br/>Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p>
        </div>
        <div className='flex-start'>
        <a href="#link"><Facebook className='icon-network mx-1'/></a>
        <a href="#link"><YouTube className='icon-network mx-1'/></a>
        <a href="#link"><Instagram className='icon-network mx-1'/></a>
        <a href="#link"><Twitter className='icon-network mx-1'/></a>
        </div>
      </section>
    </footer>
  )
}