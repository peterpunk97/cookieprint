const brands = [
    { image: '/img/logos/1.png', alt: 'Wispper' },
    { image: '/img/logos/2.png', alt: 'Demeter' },
    { image: '/img/logos/3.png', alt: 'Invernaderos' },
    { image: '/img/logos/4.png', alt: 'Vaca' },
    { image: '/img/logos/5.png', alt: 'Ayuntamiento' },
    { image: '/img/logos/6.png', alt: 'Arrieros' },
  ];
  
  export const Brands = () => {
    return (
      <div className="flex flex-col items-center gap-6 pt-16 pb-12">
        <h2 className="font-bold text-2xl">Empresas asociadas</h2>
  
        <p className="w-2/3 text-center text-sm md:text-base">
          Trabajamos de la mano con empresas y marcas más reconocidas de la región.
        </p>
  
        <div className="grid grid-cols-2 gap-20 mt-8 items-center md:grid-cols-6">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <img src={brand.image} alt={brand.alt} className="w-28" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  