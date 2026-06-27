import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
	id: number;
	name: string;
	brand: string;
	price: number;
	rating: number;
	badge?: string;
	image: string;
}

export function ProductCard({
	name,
	brand,
	price,
	rating,
	badge,
	image,
}: ProductCardProps) {
	const [isWishlisted, setIsWishlisted] = useState(false);

	const formattedPrice = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
	}).format(price);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			whileHover={{ y: -8 }}
			className="group flex flex-col bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
		>
			<div className="relative aspect-square overflow-hidden bg-white p-6 flex items-center justify-center">
				{badge && (
					<span className="absolute top-4 left-4 z-10 bg-background text-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 border border-border">
						{badge}
					</span>
				)}

				<button
					onClick={() => setIsWishlisted(!isWishlisted)}
					className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition-colors"
				>
					<motion.div whileTap={{ scale: 0.8 }}>
						<Heart
							className={cn(
								"w-4 h-4 transition-colors",
								isWishlisted ? "fill-accent text-accent" : "text-foreground",
							)}
						/>
					</motion.div>
				</button>

				<motion.img
					src={image}
					alt={name}
					className="w-full h-full object-contain filter drop-shadow-xl"
					transition={{ duration: 0.5 }}
				/>

				{/* Hover overlay CTA */}
				<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
					<button className="w-full py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wider text-xs hover:bg-secondary hover:text-secondary-foreground transition-colors">
						Shop Now
					</button>
				</div>
			</div>

			<div className="p-6 flex flex-col flex-grow">
				<div className="flex justify-between items-start mb-2">
					<span className="text-secondary text-xs font-semibold uppercase tracking-wider">
						{brand}
					</span>
					<div className="flex items-center space-x-1">
						<svg
							className="w-3 h-3 text-secondary fill-secondary"
							viewBox="0 0 20 20"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<span className="text-foreground/70 text-xs font-medium">
							{rating}
						</span>
					</div>
				</div>

				<h4 className="text-lg font-serif text-foreground mb-4 line-clamp-2 leading-tight">
					{name}
				</h4>

				<div className="mt-auto pt-4 border-t border-border/50">
					<span className="text-lg font-medium text-foreground tracking-wide">
						{formattedPrice}
					</span>
				</div>
			</div>
		</motion.div>
	);
}
