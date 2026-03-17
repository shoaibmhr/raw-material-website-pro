import steelImg from "@/assets/steel-rebar.jpg";
import chemicalsImg from "@/assets/chemicals.jpg";
import timberImg from "@/assets/timber.jpg";
import aggregatesImg from "@/assets/aggregates.jpg";
import polymersImg from "@/assets/polymers.jpg";
import aluminumImg from "@/assets/aluminum.jpg";

const categories = [
  { name: "Steel & Iron", count: "1,200+ listings", image: steelImg },
  { name: "Chemicals", count: "860+ listings", image: chemicalsImg },
  { name: "Timber & Wood", count: "540+ listings", image: timberImg },
  { name: "Aggregates", count: "380+ listings", image: aggregatesImg },
  { name: "Polymers & Resin", count: "290+ listings", image: polymersImg },
  { name: "Aluminum", count: "420+ listings", image: aluminumImg },
];

const CategoryGrid = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground">Browse by Category</h2>
          <p className="mt-1 text-muted-foreground">Find raw materials across all major industrial categories</p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative flex flex-col bg-background p-4 transition-colors hover:bg-foreground"
            >
              <div className="mb-3 aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-background">{cat.name}</span>
              <span className="mt-0.5 text-xs text-muted-foreground group-hover:text-background/60">{cat.count}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
