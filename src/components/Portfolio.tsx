import { useState } from "react";
import ExpandableGallery from "@/components/ui/gallery-animation";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolioHealthquest from "@/assets/portfolio-healthquest.jpg";
import portfolioPylonSign from "@/assets/portfolio-pylon-sign.jpg";
import portfolioBrothersBusinessCenter from "@/assets/portfolio-brothers-business-center.jpg";
import portfolioBuildingNumber from "@/assets/portfolio-building-number.jpg";
import portfolioBoostMobile from "@/assets/portfolio-boost-mobile.jpg";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const portfolioImages = [
    {
      url: portfolio1,
      title: "The Grove Wine & Whiskey",
      desc: "Premium storefront signage with professional installation",
    },
    {
      url: portfolio2,
      title: "Esther's Cajun Café",
      desc: "Eye catching dimensional lettering with LED lighting",
    },
    {
      url: portfolio3,
      title: "RoadTrac Convenience Store",
      desc: "Complete exterior branding and signage solution",
    },
    {
      url: portfolio4,
      title: "Kroger Pharmacy Monument",
      desc: "Large scale monument signage with tenant panels",
    },
    {
      url: portfolio5,
      title: "Window Graphics Display",
      desc: "Vibrant window graphics for retail locations",
    },
    {
      url: portfolio6,
      title: "Interior LED Signage",
      desc: "Custom LED displays for indoor applications",
    },
    {
      url: portfolio7,
      title: "Montessori School Signage",
      desc: "Professional educational facility signage",
    },
    {
      url: portfolio8,
      title: "Arabisca Café",
      desc: "Dimensional logo and branding installation",
    },
    {
      url: portfolio9,
      title: "Arabisca Exterior Signage",
      desc: "Exterior restaurant signage with dimensional brand elements",
    },
    {
      url: portfolioHealthquest,
      title: "HealthQuest Infusion Center",
      desc: "Large exterior dimensional lettering and storefront sign installation",
    },
    {
      url: portfolioPylonSign,
      title: "Multi-Tenant Pylon Sign",
      desc: "High-rise tenant panel updates and exterior sign service",
    },
    {
      url: portfolioBrothersBusinessCenter,
      title: "Brothers Business Center V",
      desc: "Monument directory panels with tenant branding and leasing information",
    },
    {
      url: portfolioBuildingNumber,
      title: "Building Number Signage",
      desc: "Clean unit number signage for apartment and commercial properties",
    },
    {
      url: portfolioBoostMobile,
      title: "Boost Mobile Storefront",
      desc: "Retail storefront signage with window graphics and branded print displays",
    },
  ];

  const featuredImages = portfolioImages.slice(0, 8);

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of signage projects across Texas. From storefront signs to monument displays, 
            each project showcases our commitment to quality and attention to detail.
          </p>
        </div>
        
        {/* Expandable Gallery */}
        <div className="px-4 md:px-0">
          <ExpandableGallery images={featuredImages} className="w-full" />
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            aria-expanded={showAll}
            aria-controls="all-portfolio-images"
          >
            {showAll ? "Show Featured Images" : "View All Images"}
          </button>
        </div>

        {showAll && (
          <div id="all-portfolio-images" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((image) => (
              <article key={image.title} className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{image.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{image.desc}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
