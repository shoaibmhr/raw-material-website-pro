const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center bg-primary">
                <span className="text-xs font-bold text-primary-foreground">RM</span>
              </div>
              <span className="text-lg font-bold tracking-tighter text-background">RawMart</span>
            </div>
            <p className="mt-3 text-sm text-background/50">
              Pakistan's leading B2B marketplace for industrial raw materials.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">Categories</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background">Steel & Iron</a></li>
              <li><a href="#" className="hover:text-background">Chemicals</a></li>
              <li><a href="#" className="hover:text-background">Timber & Wood</a></li>
              <li><a href="#" className="hover:text-background">Aggregates</a></li>
              <li><a href="#" className="hover:text-background">Polymers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">For Sellers</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background">Post Material</a></li>
              <li><a href="#" className="hover:text-background">Seller Dashboard</a></li>
              <li><a href="#" className="hover:text-background">Get Verified</a></li>
              <li><a href="#" className="hover:text-background">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background">Contact Us</a></li>
              <li><a href="#" className="hover:text-background">FAQs</a></li>
              <li><a href="#" className="hover:text-background">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-xs text-background/30">
          © 2026 RawMart. All rights reserved. Built for Pakistan's industrial sector.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
