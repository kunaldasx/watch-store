import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Vikram S.",
    watch: "Rolex Submariner",
    text: "The purchasing experience at Chronos was nothing short of extraordinary. Their expertise and attention to detail made acquiring my grail watch a memorable event.",
    rating: 5
  },
  {
    name: "Aarti M.",
    watch: "Omega Seamaster",
    text: "Impeccable service. The concierge helped me select the perfect anniversary gift for my husband. The packaging and presentation were absolutely stunning.",
    rating: 5
  },
  {
    name: "Rahul K.",
    watch: "Patek Philippe Nautilus",
    text: "As a collector, I value authenticity and provenance. Chronos provides both, along with a level of personalized service that is rare in today's retail landscape.",
    rating: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-secondary fill-secondary' : 'text-muted fill-muted'}`} 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h3 className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Client Voices
          </h3>
          <h2 className="text-4xl font-serif text-foreground">Excellence Recognized</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-card p-8 border border-border/50 rounded-sm hover:border-secondary/30 transition-colors"
            >
              <StarRating rating={review.rating} />
              <p className="text-foreground/80 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-medium text-foreground uppercase tracking-wide text-sm">{review.name}</p>
                <p className="text-secondary text-xs mt-1">Purchased {review.watch}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
