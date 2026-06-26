import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import giftingImg from "../assets/gifting.png";

export function Gifting() {
	return (
		<section
			id="gifting"
			className="relative h-[80vh] min-h-[600px] flex items-center"
		>
			<div className="absolute inset-0 z-0">
				<img
					src={giftingImg}
					alt="Luxury Watch Gifting"
					className="w-full h-full object-cover object-right md:object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
			</div>

			<div className="container mx-auto px-6 md:px-12 relative z-10">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="max-w-xl"
				>
					<h3 className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-4">
						The Perfect Gift
					</h3>
					<h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
						Give the Gift of Time
					</h2>
					<p className="text-lg text-foreground/80 font-light mb-10 leading-relaxed">
						Mark special milestones with a gift that endures. Our complimentary
						premium gifting service includes signature packaging and
						personalized engraving options.
					</p>
					<button className="bg-secondary text-secondary-foreground px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center">
						Shop Gifts <ArrowRight className="ml-2 w-4 h-4" />
					</button>
				</motion.div>
			</div>
		</section>
	);
}
