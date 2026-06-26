import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero.png";

export function HeroBanner() {
	const titleWords = "TIMELESS ELEGANCE".split(" ");
	const subtitleWords = "Redefining Luxury".split(" ");

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.3 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 40 },
		show: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 100, damping: 10 },
		},
	};

	return (
		<div className="relative w-full h-[100dvh] bg-background flex items-center overflow-hidden">
			{/* Background Image */}
			<motion.div
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 0.6 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="absolute inset-0 z-0"
			>
				<img
					src={heroImg}
					alt="Luxury Watch Close-up"
					className="w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
			</motion.div>

			{/* Content */}
			<div className="container mx-auto px-6 md:px-12 relative z-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="max-w-2xl"
				>
					<motion.div
						variants={item}
						className="mb-4 flex items-center space-x-4"
					>
						<span className="h-[1px] w-12 bg-secondary" />
						<p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold">
							The Chronos Collection
						</p>
					</motion.div>

					<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
						{titleWords.map((word, i) => (
							<motion.span
								key={i}
								variants={item}
								className="inline-block mr-4"
							>
								{word}
							</motion.span>
						))}
					</h1>

					<h2 className="text-xl md:text-3xl text-foreground/80 font-light mb-10">
						{subtitleWords.map((word, i) => (
							<motion.span
								key={i}
								variants={item}
								className="inline-block mr-2"
							>
								{word}
							</motion.span>
						))}
					</h2>

					<motion.div variants={item}>
						<button className="group relative inline-flex items-center justify-center bg-foreground text-background px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-secondary transition-all duration-300 overflow-hidden">
							<span className="relative z-10 flex items-center">
								Explore Collection
								<ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</span>
						</button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
