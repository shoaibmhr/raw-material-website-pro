import { Search, Phone, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-muted">
        <div className="container flex items-center justify-between py-1.5 text-xs text-muted-foreground">
          <span>Pakistan's #1 Raw Material Marketplace</span>
          <div className="flex items-center gap-4">
            <a href="tel:+923001234567" className="flex items-center gap-1 hover:text-foreground">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+92 300 123 4567</span>
            </a>
            <a href="#" className="hover:text-foreground">List Your Material</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-primary">
              <span className="text-sm font-bold text-primary-foreground">RM</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-foreground">RawMart</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#" className="hover:text-foreground">Steel & Metals</a>
            <a href="#" className="hover:text-foreground">Chemicals</a>
            <a href="#" className="hover:text-foreground">Timber</a>
            <a href="#" className="hover:text-foreground">Aggregates</a>
            <a href="#" className="hover:text-foreground">Polymers</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:flex">
            <Search className="h-4 w-4" />
            Search
          </button>
          <button className="bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary">
            Post Material
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground">Steel & Metals</a>
            <a href="#" className="hover:text-foreground">Chemicals</a>
            <a href="#" className="hover:text-foreground">Timber</a>
            <a href="#" className="hover:text-foreground">Aggregates</a>
            <a href="#" className="hover:text-foreground">Polymers</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
