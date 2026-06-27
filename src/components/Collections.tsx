import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import mensImg from "../assets/mens-collection.png";
import womensImg from "../assets/womens-collection.png";

export function Collections() {
	return (
		<section id="collections" className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
				{/* Men's Collection */}
				<div className="relative group overflow-hidden h-[50vh] md:h-auto">
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="absolute inset-0 z-0"
					>
						<img
							src={mensImg}
							alt="Optical Collection"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
					</motion.div>

					<div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16">
						<h3 className="text-3xl md:text-5xl font-serif text-white mb-4">
							Optical
							<br />
							Collection
						</h3>
						<button className="inline-flex items-center text-white uppercase tracking-widest text-sm font-medium hover:text-secondary transition-colors w-max">
							Discover <ArrowRight className="ml-2 w-4 h-4" />
						</button>
					</div>
				</div>

				{/* Women's Collection */}
				<div className="relative group overflow-hidden h-[50vh] md:h-auto">
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="absolute inset-0 z-0"
					>
						<img
							src={womensImg}
							alt="Sun Collection"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
					</motion.div>

					<div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16">
						<h3 className="text-3xl md:text-5xl font-serif text-white mb-4">
							Sun
							<br />
							Collection
						</h3>
						<button className="inline-flex items-center text-white uppercase tracking-widest text-sm font-medium hover:text-secondary transition-colors w-max">
							Discover <ArrowRight className="ml-2 w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
