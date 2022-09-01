import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section6() {

  AOS.init();

  return (
    <>
      <section className="box">
        <h5>Depoimentos</h5>
        <h2 className="mt-2">Todos amam o roxinho</h2>
      </section>
      <section className="container-swiper">
        <div className="swiper-container" data-aos='fade-up' data-aos-delay="200">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
              <SwiperSlide className="swiper-slide">
                <div className="photo-profile photo-1"></div>
                <h4 className="my-1">Jorge Silva</h4>
                <p className="my-1">Prático, fácil, virtual, sem taxas, eu adoro!</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="photo-profile photo-2"></div>
                <h4 className="my-1">Anna Keller</h4>
                <p className="my-1">A facilidade em investir principalmente para quem não tem noção de investimentos, isso foi fantástico!</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="photo-profile photo-3"></div>
                <h4 className="my-1">Gabriela Shuzz</h4>
                <p className="my-1">Atendimento excelente, aplicativo com ótimo design, mas muito marketing para pouco serviço oferecido!</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="photo-profile photo-4"></div>
                <h4 className="my-1">Lia Vieira</h4>
                <p className="my-1">Gosto muito do Nubank, das facilidade em todos os produtos, é um atendimento que atende todas minha necessidades rapidamente!</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="photo-profile photo-5"></div>
                <h4 className="my-1">Lucas Almeida</h4>
                <p className="my-1">A experiência com eles é incrivel quanto ao banco digital... só uso o cartão de crédito deles praticamente. Muito bom!</p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="photo-profile photo-6"></div>
                <h4 className="my-1">Marcela Solsa</h4>
                <p className="my-1">Ótimo fazer TEDs ilimitadas e gratuitas, pagar contas e todo saldo já rende automaticamente!</p>
              </SwiperSlide>
          </Swiper>
        </div>
          <div className="button-next"></div>
          <div className="button-prev"></div>
      </section>
    </>
  )
}