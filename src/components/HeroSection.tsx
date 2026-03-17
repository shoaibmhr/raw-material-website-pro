import { Search, MapPin, Package } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%)] via-[hsl(222,47%,11%,0.8)] to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tighter text-background sm:text-5xl lg:text-6xl">
            Source Industrial Raw Materials.{" "}
            <span className="text-primary">Direct from the Yard.</span>
          </h1>
          <p className="mt-4 text-lg text-background/60">
            4,200+ Tons of Steel, Chemicals, and Aggregates listed today.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex flex-col border border-background/20 bg-background sm:flex-row">
            <div className="search-segment flex flex-1 items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Material type, grade..."
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="search-segment flex flex-1 items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="search-segment flex flex-1 items-center gap-2">
              <Package className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Quantity (Tons)"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Search Materials
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-8">
            <div>
              <div className="text-2xl font-bold text-background">2,400+</div>
              <div className="text-xs text-background/50">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-background">18</div>
              <div className="text-xs text-background/50">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-background">50K+</div>
              <div className="text-xs text-background/50">Tons Traded Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
