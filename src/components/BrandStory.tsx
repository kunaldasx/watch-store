import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ value, label }: { value: number; label: string }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (isInView) {
			let start = 0;
			const end = value;
			const duration = 2000;
			const increment = end / (duration / 16);

			const timer = setInterval(() => {
				start += increment;
				if (start >= end) {
					setCount(end);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, 16);

			return () => clearInterval(timer);
		}
	}, [isInView, value]);

	return (
		<div ref={ref} className="text-center">
			<div className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-2">
				{count}
				{value >= 50 ? "K+" : "+"}
			</div>
			<div className="text-sm uppercase tracking-widest text-foreground/70 font-medium">
				{label}
			</div>
		</div>
	);
}

export function BrandStory() {
	return (
		<section id="about" className="py-32 relative bg-card overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

			<div className="container mx-auto px-6 md:px-12 relative z-10">
				<div className="max-w-3xl mx-auto text-center mb-20">
					<h3 className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-6">
						The VISO Legacy
					</h3>
					<h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-8">
						Curating the world's most exceptional eyewear since 1998.
					</h2>
					<p className="text-lg text-foreground/70 font-light leading-relaxed">
						We believe that eyewear is more than a tool for vision. It is a
						masterpiece of craftsmanship, a statement of personal style, and an
						intimate companion for life's defining moments.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-border/50">
					<AnimatedCounter value={200} label="Boutique Stores" />
					<AnimatedCounter value={1} label="Million Happy Customers" />
					<AnimatedCounter value={300} label="Frame Styles" />
				</div>
			</div>
		</section>
	);
}
