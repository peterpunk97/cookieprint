import { PreparedProducts } from '../../interfaces';
import { CardProduct } from '../products/CardProduct';

interface Props {
  title: string;
  subtitle?: string;
  products: PreparedProducts[];
}

export const ProductGrid = ({ title, subtitle, products }: Props) => {
  return (
    <section className="my-28 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            name={product.name}
            price={product.price}
            colors={product.colors}
            img={product.images[0]}
            slug={product.slug}
            variants={product.variants}
          />
        ))}
      </div>
    </section>
  );
};
