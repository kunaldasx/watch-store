import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard } from './ProductCard';
import { products } from './NewArrivals';

export function TrendingCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps'
  });

  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h3 className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Most Desired
        </h3>
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">Trending Now</h2>
      </div>

      <div className="pl-6 md:pl-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pr-6 md:pr-12 cursor-grab active:cursor-grabbing pb-8">
            {products.map((product) => (
              <div key={product.id} className="flex-[0_0_280px] sm:flex-[0_0_320px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
