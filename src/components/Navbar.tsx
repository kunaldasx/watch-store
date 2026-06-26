import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		"Collections",
		"Brands",
		"Men",
		"Women",
		"Gifting",
		"About",
	];

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
					isScrolled
						? "bg-background/90 backdrop-blur-md border-border/50 py-4 shadow-sm"
						: "bg-transparent py-6",
				)}
			>
				<div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden text-foreground"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Menu className="w-6 h-6" />
					</button>

					{/* Logo */}
					<a
						href="/"
						className="text-2xl md:text-3xl font-serif tracking-widest font-bold uppercase text-foreground"
					>
						TimeOne
					</a>

					{/* Desktop Links */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<a
								key={link}
								href={`#${link.toLowerCase()}`}
								className="text-sm font-medium tracking-wide text-foreground/80 hover:text-secondary transition-colors"
							>
								{link}
							</a>
						))}
					</div>

					{/* Icons */}
					<div className="flex items-center space-x-5">
						<button className="text-foreground hover:text-secondary transition-colors">
							<Search className="w-5 h-5" />
						</button>
						<button className="text-foreground hover:text-secondary transition-colors">
							<Heart className="w-5 h-5" />
						</button>
						<button className="text-foreground hover:text-secondary transition-colors relative">
							<ShoppingBag className="w-5 h-5" />
							<span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
								2
							</span>
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "-100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed inset-0 z-[60] bg-background flex flex-col"
					>
						<div className="p-6 flex justify-between items-center border-b border-border/50">
							<span className="text-2xl font-serif tracking-widest font-bold uppercase text-foreground">
								CHRONOS
							</span>
							<button onClick={() => setMobileMenuOpen(false)}>
								<X className="w-6 h-6 text-foreground" />
							</button>
						</div>
						<div className="flex flex-col p-6 space-y-6">
							{navLinks.map((link) => (
								<a
									key={link}
									href={`#${link.toLowerCase()}`}
									onClick={() => setMobileMenuOpen(false)}
									className="text-xl font-medium tracking-wide text-foreground hover:text-secondary transition-colors"
								>
									{link}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
