import { ArrowRight } from "lucide-react";
import Facebook from "../assets/logos/facebook.svg";
import X from "../assets/logos/twitter.svg";
import Instagram from "../assets/logos/instagram.svg";

export function Footer() {
	return (
		<footer className="bg-card pt-20 pb-10 border-t border-border">
			<div className="container mx-auto px-6 md:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Brand Col */}
					<div className="lg:col-span-1">
						<a
							href="/"
							className="text-3xl font-serif tracking-widest font-bold uppercase text-foreground inline-block mb-6"
						>
							VISO
						</a>
						<p className="text-foreground/60 text-sm leading-relaxed mb-8 pr-4">
							The premier destination for luxury eyewear. Authorized retailer
							for the world's most prestigious designer frames.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
							>
								<img src={Instagram} className="w-4 h-4" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
							>
								<img src={Facebook} className="w-4 h-4" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
							>
								<img src={X} className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Links Col 1 */}
					<div>
						<h4 className="text-foreground font-medium uppercase tracking-wider text-sm mb-6">
							Explore
						</h4>
						<ul className="space-y-4">
							{[
								"New Arrivals",
								"Bestsellers",
								"Optical",
								"Sunglasses",
								"Reading Glasses",
								"Accessories",
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-foreground/60 hover:text-secondary text-sm transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Links Col 2 */}
					<div>
						<h4 className="text-foreground font-medium uppercase tracking-wider text-sm mb-6">
							Customer Care
						</h4>
						<ul className="space-y-4">
							{[
								"Contact Us",
								"Book an Appointment",
								"Frame Servicing",
								"Shipping & Returns",
								"FAQ",
								"Store Locator",
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-foreground/60 hover:text-secondary text-sm transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter Col */}
					<div>
						<h4 className="text-foreground font-medium uppercase tracking-wider text-sm mb-6">
							The VISO Club
						</h4>
						<p className="text-foreground/60 text-sm mb-6">
							Subscribe to receive updates on new arrivals, exclusive events,
							and eyewear editorials.
						</p>
						<form className="relative" onSubmit={(e) => e.preventDefault()}>
							<input
								type="email"
								placeholder="Email Address"
								className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground"
							/>
							<button
								type="submit"
								className="absolute right-0 top-0 bottom-0 px-4 text-foreground hover:text-secondary transition-colors"
							>
								<ArrowRight className="w-5 h-5" />
							</button>
						</form>
					</div>
				</div>

				<div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
					<p className="text-foreground/40 text-xs mb-4 md:mb-0">
						&copy; {new Date().getFullYear()} VISO. All rights reserved.
					</p>
					<div className="flex space-x-6">
						<a
							href="#"
							className="text-foreground/40 hover:text-foreground text-xs transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-foreground/40 hover:text-foreground text-xs transition-colors"
						>
							Terms of Service
						</a>
						<a
							href="#"
							className="text-foreground/40 hover:text-foreground text-xs transition-colors"
						>
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
