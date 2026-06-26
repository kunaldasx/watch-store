import { ProductCard } from "./ProductCard";

import rolexImg from "../assets/rolex-submariner.png";
import omegaImg from "../assets/omega-seamaster.png";
import tagImg from "../assets/tag-heuer-carrera.png";
import tissotImg from "../assets/tissot-prx.png";
import seikoImg from "../assets/seiko-presage.png";
import casioImg from "../assets/casio-gshock.png";

export const products = [
	{
		id: 1,
		name: "Submariner Date 41mm",
		brand: "Rolex",
		price: 850000,
		rating: 4.9,
		badge: "Bestseller",
		image: rolexImg,
	},
	{
		id: 2,
		name: "Seamaster Diver 300M",
		brand: "Omega",
		price: 520000,
		rating: 4.8,
		badge: "New Arrival",
		image: omegaImg,
	},
	{
		id: 3,
		name: "Carrera Chronograph",
		brand: "TAG Heuer",
		price: 280000,
		rating: 4.7,
		badge: "Trending",
		image: tagImg,
	},
	{
		id: 4,
		name: "PRX Powermatic 80",
		brand: "Tissot",
		price: 42000,
		rating: 4.9,
		badge: "Most Loved",
		image: tissotImg,
	},
	{
		id: 5,
		name: "Presage Cocktail Time",
		brand: "Seiko",
		price: 28500,
		rating: 4.6,
		badge: "New Arrival",
		image: seikoImg,
	},
	{
		id: 6,
		name: "G-Shock Full Metal",
		brand: "Casio",
		price: 12999,
		rating: 4.5,
		badge: "Trending",
		image: casioImg,
	},
];

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
						View All Watches
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
