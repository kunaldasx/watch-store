import { products } from "@/constants/products";
import { ProductCard } from "./ProductCard";

export function NewArrivals() {
	return (
		<section id="brands" className="py-24 bg-background">
			<div className="container mx-auto px-6 md:px-12">
				<div className="flex flex-col md:flex-row justify-between items-end mb-12">
					<div>
						<h3 className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
							Curated Selection
						</h3>
						<h2 className="text-4xl md:text-5xl font-serif text-foreground">
							New Arrivals
						</h2>
					</div>
					<button className="mt-6 md:mt-0 text-foreground border-b border-secondary pb-1 hover:text-secondary transition-colors uppercase tracking-wider text-sm font-medium">
						View All Eyewear
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{products.slice(0, 4).map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
		</section>
	);
}
