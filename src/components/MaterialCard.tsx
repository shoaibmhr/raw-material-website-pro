import { Shield, MapPin } from "lucide-react";

interface MaterialCardProps {
  image: string;
  grade: string;
  price: string;
  unit: string;
  location: string;
  moq: string;
  supplier: string;
  verified?: boolean;
}

const MaterialCard = ({ image, grade, price, unit, location, moq, supplier, verified = false }: MaterialCardProps) => {
  return (
    <div className="group industrial-card">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={grade}
          className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <span className="spec-label">{grade}</span>
        <h3 className="mt-1 text-lg font-semibold text-foreground">
          {price} <span className="text-sm font-normal text-muted-foreground">/ {unit}</span>
        </h3>
        <div className="mt-1 flex items-center gap-1">
          <span className="text-sm text-muted-foreground">{supplier}</span>
          {verified && (
            <span className="inline-flex items-center gap-0.5 bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-accent">
              <Shield className="h-2.5 w-2.5" />
              Verified
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
          <span className="font-mono text-xs">MOQ: {moq}</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-foreground py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary">
        Contact Supplier
      </button>
    </div>
  );
};

export default MaterialCard;
