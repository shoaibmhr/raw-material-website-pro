import { Shield, Truck, FileCheck, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Verified Suppliers", desc: "Every supplier background-checked" },
  { icon: FileCheck, title: "Lab Reports", desc: "Certified material specifications" },
  { icon: Truck, title: "Logistics Support", desc: "Nationwide delivery network" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated procurement team" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-muted">
      <div className="container grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3 bg-muted px-6 py-6">
            <f.icon className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <div className="text-sm font-semibold text-foreground">{f.title}</div>
              <div className="text-xs text-muted-foreground">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
