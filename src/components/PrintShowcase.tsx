import { ArrowUpRight, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRINT_SHOP_URL } from "@/lib/constants";
import printing from "@/assets/printing.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import showcaseImage from "@/assets/showcase-image.png";
import graphicDesign from "@/assets/graphic-design.jpg";

const printProducts = [
  {
    title: "Banners and Posters",
    description: "Large-format print for storefront promotions, events, trade shows, and everyday visibility.",
    image: printing,
    alt: "Large format printing for banners and posters",
  },
  {
    title: "Window Graphics and Vinyl",
    description: "Custom printed graphics that turn your windows into branded space customers notice instantly.",
    image: portfolio5,
    alt: "Custom window graphics and printed vinyl for business storefronts",
  },
  {
    title: "Storefront Branding Packages",
    description: "Printed panels, branded displays, and coordinated visual pieces that support your signage package.",
    image: showcaseImage,
    alt: "Storefront branding and printed display graphics",
  },
  {
    title: "Flyers, Menus, and Marketing Materials",
    description: "Business print essentials for restaurants, retail, service businesses, and local promotions.",
    image: graphicDesign,
    alt: "Printed flyers, menus, and branded marketing materials",
  },
];

const PrintShowcase = () => {
  return (
    <section id="print-shop" className="bg-gradient-to-b from-orange-50/70 via-white to-background px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-medium text-orange-600 shadow-soft">
            <Printer className="h-4 w-4" />
            Online Print Shop
          </div>
          <h2 className="mt-6 text-4xl font-bold text-orange-500 md:text-5xl lg:text-6xl">
            Order Print Products Online
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Looking for the Precision Signs print shop? Precision Media & Signs now offers a dedicated online print portal for banners, window graphics, flyers, menus, and branded marketing materials. Every item below links directly to our print ordering website.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="hero" size="lg" className="rounded-xl">
              <a href={PRINT_SHOP_URL} target="_blank" rel="noopener noreferrer">
                Print Now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {printProducts.map((product) => (
            <a
              key={product.title}
              href={PRINT_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-orange-100 bg-white/95 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hard"
              aria-label={`Open the print shop for ${product.title}`}
            >
              <div className="relative h-64 overflow-hidden bg-muted/30">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
                  Print Product
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-orange-600">
                  Open print.precisionsignsmedia.com
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintShowcase;
