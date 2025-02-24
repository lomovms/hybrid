import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';

let swiperThumbs, swiperGaller;

document.addEventListener('DOMContentLoaded', () => {

    // Слайдер превью (Thumbs)
    swiperThumbs = new Swiper('.mySwiper1', {
        modules: [FreeMode, Thumbs, Navigation],
        loop: true,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    // Основной слайдер с превью
    swiperGaller = new Swiper('.mySwiper2', {
        modules: [Thumbs, Navigation],
        loop: true,

        thumbs: {
            swiper: swiperThumbs,
        },
    });



});

// Экспортируем слайдеры
export { swiperThumbs, swiperGaller };