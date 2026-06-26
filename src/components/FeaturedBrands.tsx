import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const brands = [
	"ROLEX",
	"PATEK PHILIPPE",
	"OMEGA",
	"TISSOT",
	"SEIKO",
	"CASIO",
	"TAG HEUER",
	"LONGINES",
	"BREITLING",
	"IWC",
];

export function FeaturedBrands() {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			dragFree: true,
			align: "start",
		},
		[
			AutoScroll({
				speed: 2.5, // lower = slower
				stopOnInteraction: false,
				stopOnMouseEnter: true,
				playOnInit: true,
			}),
		],
	);

	return (
		<section className="py-20 bg-card/50 border-y border-border/50 overflow-hidden">
			<div className="container mx-auto px-6 md:px-12 mb-10 text-center">
				<h3 className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-2">
					Official Retailer
				</h3>
				<h2 className="text-3xl font-serif text-foreground">Featured Brands</h2>
			</div>

			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex select-none">
					{brands.map((brand, idx) => (
						<div
							key={idx}
							className="flex-[0_0_auto] min-w-[200px] md:min-w-[300px] px-4"
						>
							<motion.div
								whileHover={{ scale: 1.05, y: -5 }}
								className="h-32 rounded-full border border-border/50 bg-background/50 flex items-center justify-center relative overflow-hidden group cursor-pointer"
							>
								{/* Shine effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

								<span className="text-lg md:text-xl font-serif font-medium tracking-wider text-foreground/70 group-hover:text-secondary transition-colors duration-300">
									{brand}
								</span>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
