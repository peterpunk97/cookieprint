import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef } from 'react';

const brands = [
  { image: '/img/logos/1.png', alt: 'Wispper' },
  { image: '/img/logos/2.png', alt: 'Demeter' },
  { image: '/img/logos/3.png', alt: 'Invernaderos' },
  { image: '/img/logos/4.png', alt: 'Vaca' },
  { image: '/img/logos/5.png', alt: 'Ayuntamiento' },
  { image: '/img/logos/6.png', alt: 'Arrieros' },
  { image: '/img/logos/7.png', alt: 'UTM' },
  { image: '/img/logos/8.png', alt: 'ITSCH' },
  { image: '/img/logos/9.png', alt: 'CEB' },

];

export const Brands = () => {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 20 },
      },
      '(max-width: 767px)': {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 4, spacing: 20 },
  });

  // Autoplay effect
  useEffect(() => {
    if (slider) {
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 2000); // Cambia cada 2 segundos
    }
    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <div className="flex flex-col items-center gap-6 pt-16 pb-12">
      <h2 className="font-bold text-2xl">Empresas e instituciones asociadas</h2>

      <p className="w-2/3 text-center text-sm md:text-base">
        Trabajamos de la mano con empresas, marcas e instituciones más reconocidas de la región.
      </p>

      <div ref={sliderRef} className="keen-slider mt-8 w-full max-w-5xl">
        {brands.map((brand, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img src={brand.image} alt={brand.alt} className="w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};
