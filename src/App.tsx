import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { FeaturedBrands } from "@/components/FeaturedBrands";
import { NewArrivals } from "@/components/NewArrivals";
import { Collections } from "@/components/Collections";
import { TrendingCarousel } from "@/components/TrendingCarousel";
import { BrandStory } from "@/components/BrandStory";
import { Gifting } from "@/components/Gifting";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroBanner />
      <FeaturedBrands />
      <NewArrivals />
      <Collections />
      <TrendingCarousel />
      <BrandStory />
      <Gifting />
      <Testimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
