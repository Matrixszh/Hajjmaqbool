import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Collection",
      description: "Luxury residential development featuring contemporary design and sustainable materials.",
      image: interior1,
      category: "Residential"
    },
    {
      id: 2,
      title: "Urban Loft Series",
      description: "Sophisticated city living spaces that maximize comfort and style in urban environments.",
      image: interior2,
      category: "Commercial"
    },
    {
      id: 3,
      title: "Sustainable Homes",
      description: "Eco-friendly housing solutions that don't compromise on luxury or design excellence.",
      image: interior1,
      category: "Sustainable"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-luxury-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-luxury-darker mb-4">
            View Our Most Successful
          </h2>
          <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
            Each project tells a story of innovation, craftsmanship, and the perfect blend of form and function.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-luxury-gold text-luxury-darker px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-luxury-darker mb-3">{project.title}</h3>
                <p className="text-luxury-gray mb-4">{project.description}</p>
                <Button variant="ghost" className="text-luxury-blue hover:text-luxury-gold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-luxury-darker text-white hover:bg-luxury-dark px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;