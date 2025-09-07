import { Card } from "@/components/ui/card";

const showcaseItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    description: "Modern Staircase Design"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    description: "Contemporary Kitchen Space"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    description: "Luxury Bedroom Interior"
  }
];

const ShowcaseGallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGallery;
