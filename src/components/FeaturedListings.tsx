import MaterialCard from "./MaterialCard";
import steelImg from "@/assets/steel-rebar.jpg";
import chemicalsImg from "@/assets/chemicals.jpg";
import timberImg from "@/assets/timber.jpg";
import aggregatesImg from "@/assets/aggregates.jpg";
import polymersImg from "@/assets/polymers.jpg";
import aluminumImg from "@/assets/aluminum.jpg";
import cementImg from "@/assets/cement.jpg";

const listings = [
  { image: steelImg, grade: "Grade 60 Carbon Steel Rebar", price: "PKR 245,000", unit: "Ton", location: "Karachi, PK", moq: "5 Tons", supplier: "Amreli Steels", verified: true },
  { image: chemicalsImg, grade: "Caustic Soda Flakes 99%", price: "PKR 85,000", unit: "Ton", location: "Lahore, PK", moq: "2 Tons", supplier: "ICI Pakistan", verified: true },
  { image: timberImg, grade: "Kiln-Dried Deodar Wood", price: "PKR 4,200", unit: "CFT", location: "Peshawar, PK", moq: "100 CFT", supplier: "Northern Timber Co.", verified: false },
  { image: aluminumImg, grade: "6061-T6 Aluminum Sheet", price: "PKR 680,000", unit: "Ton", location: "Islamabad, PK", moq: "1 Ton", supplier: "Pak Aluminum", verified: true },
  { image: aggregatesImg, grade: "Crushed Stone 20mm", price: "PKR 3,800", unit: "Ton", location: "Rawalpindi, PK", moq: "10 Tons", supplier: "Margalla Quarry", verified: false },
  { image: polymersImg, grade: "HDPE Granules Virgin", price: "PKR 320,000", unit: "Ton", location: "Faisalabad, PK", moq: "3 Tons", supplier: "Engro Polymer", verified: true },
  { image: cementImg, grade: "OPC Grade 53 Cement", price: "PKR 1,250", unit: "Bag", location: "Hub, PK", moq: "500 Bags", supplier: "Lucky Cement", verified: true },
  { image: steelImg, grade: "MS Angle 50x50x6mm", price: "PKR 258,000", unit: "Ton", location: "Karachi, PK", moq: "2 Tons", supplier: "Peoples Steel", verified: false },
];

const FeaturedListings = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">Featured Listings</h2>
            <p className="mt-1 text-muted-foreground">Latest materials from verified suppliers across Pakistan</p>
          </div>
          <a href="#" className="hidden text-sm font-medium text-primary hover:underline sm:block">
            View All Listings →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((item, i) => (
            <MaterialCard key={i} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`h-10 w-10 text-sm font-medium transition-colors ${
                page === 1
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="ml-1 border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
