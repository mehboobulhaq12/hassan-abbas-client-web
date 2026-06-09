import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import printing from "@/assets/printing.jpg";
import graphicDesign from "@/assets/graphic-design.jpg";
import signsMedia from "@/assets/signs and media.png";
import showcaseImage from "@/assets/showcase-image.png";
import galleryPrint from "@/assets/gallery-1.jpg";
import signboardTexture from "@/assets/signboard-texture.jpg";

const PremiumServices = () => {
  const services = [
    {
      title: "Trade Shows Exhibits",
      image: signsMedia,
      description: "Custom booth graphics, display panels, backdrops, banners, and branded exhibit materials built to make your business stand out on a busy show floor."
    },
    {
      title: "Large Format Printing",
      image: printing,
      description: "High impact banners, posters, wall graphics, window graphics, vehicle graphics, and oversized prints produced with crisp color and durable materials."
    },
    {
      title: "Promotional Printing",
      image: graphicDesign,
      description: "Branded promotional materials for campaigns, events, giveaways, and local outreach, designed to keep your company visible after the first impression."
    },
    {
      title: "Marketing Printing",
      image: galleryPrint,
      description: "Flyers, brochures, posters, presentation materials, sales sheets, and campaign prints that help your team promote offers clearly and professionally."
    },
    {
      title: "Business Expo",
      image: showcaseImage,
      description: "Complete expo-ready print packages including signage, table displays, banners, handouts, branded graphics, and materials for business events."
    }
  ];

  return (
    <section id="print-services" className="w-full flex flex-col items-center justify-start py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${signboardTexture})`, backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
      <div className="max-w-3xl text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">
          Print Service
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          From event displays to everyday marketing materials, we produce print products that help businesses show up clearly in-store, on-site, and at every customer touchpoint.
        </p>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-8 md:px-12 relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 flex items-center justify-center bg-muted/40 dark:bg-muted/20 p-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-accent">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PremiumServices;
