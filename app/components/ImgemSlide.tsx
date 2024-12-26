import styles from '../styles/ImagemSlide.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper'
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";

import banerprincipal from '../../public/img/Capa para Facebook Calçados Masculinos Estilo Minimalista em Cinza Preto.png'
import banersecundario from '../../public/img/Capa de Facebook Black Friday Moderno Branco e Preto.gif'
import banerterciario from '../../public/img/liste.png'

export default function ImagemSlide() {
    const imagem = [
        banerprincipal,
        banersecundario,
        banerterciario
    ]

    return (
        <div className={styles.slide_container}>
            <Swiper
            modules={[Pagination,Navigation]}
            pagination={{clickable: true}}
            navigation
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            >
            
                {imagem.map((image, index) => (
                    <SwiperSlide key={index} className={styles.slide_cada} >
                        <Image className={styles.imagem} src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}