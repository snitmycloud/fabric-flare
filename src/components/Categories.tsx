import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import menCollection from "@/assets/men-collection.jpg";
import womenCollection from "@/assets/women-collection.jpg";
import kidsCollection from "@/assets/kids-collection.jpg";

const Categories = () => {
  const categories = [
    {
      id: "men",
      title: "Men's Collection",
      description: "Casuals, Formals, and more.",
      image: menCollection,
      color: "primary"
    },
    {
      id: "women", 
      title: "Women's Collection",
      description: "Sarees, Kurtis, Western Wear.",
      image: womenCollection,
      color: "secondary"
    },
    {
      id: "kids",
      title: "Kids Collection", 
      description: "Cute, colorful, and comfy styles.",
      image: kidsCollection,
      color: "primary"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4" id="categories">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Shop by 
          <span className="bg-hero-gradient bg-clip-text text-transparent"> Category</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover our carefully curated collections designed for every style and occasion
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Card key={category.id} className="group overflow-hidden hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <Button 
                variant={index === 1 ? "secondary" : "default"}
                className="w-full group-hover:shadow-lg transition-shadow"
              >
                Explore Collection
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Categories;