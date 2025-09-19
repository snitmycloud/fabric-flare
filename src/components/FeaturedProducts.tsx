import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 999,
      originalPrice: 1499,
      image: product1,
      rating: 4.5,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Elegant Summer Dress",
      price: 2499,
      originalPrice: 3299,
      image: product2,
      rating: 4.8,
      badge: "New"
    },
    {
      id: 3,
      name: "Classic Denim Jeans",
      price: 1799,
      originalPrice: 2399,
      image: product3,
      rating: 4.6,
      badge: "Sale"
    },
    {
      id: 4,
      name: "Kids Colorful Sneakers",
      price: 1299,
      originalPrice: 1799,
      image: product4,
      rating: 4.7,
      badge: "Popular"
    }
  ];

  return (
    <section className="bg-secondary/5 py-16 px-4" id="sale">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Best <span className="bg-hero-gradient bg-clip-text text-transparent">Deals</span> for You
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't miss out on our amazing offers and trending products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-secondary transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge 
                  className="absolute top-2 left-2 bg-secondary text-secondary-foreground"
                >
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 line-clamp-2">{product.name}</h4>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </Badge>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;