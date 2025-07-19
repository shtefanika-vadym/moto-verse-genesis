import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Kawasaki = () => {
  const models = [
    {
      name: "Ninja ZX-10R",
      category: "Supersport",
      engine: "998cc, 4 cilindri",
      power: "200 CP",
      price: "€16,500",
      features: ["Kawasaki TRaction Control", "Quick Shifter", "ABS Cornering"]
    },
    {
      name: "Z900",
      category: "Naked",
      engine: "948cc, 4 cilindri",
      power: "125 CP",
      price: "€9,800",
      features: ["KTRC", "Power Mode", "ABS"]
    },
    {
      name: "Versys 650",
      category: "Adventure",
      engine: "649cc, 2 cilindri",
      power: "69 CP",
      price: "€8,200",
      features: ["ABS", "Ergo-Fit", "Kawasaki Assist & Clutch"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-muted-foreground hover:text-foreground">
            <Link to="/motociclete">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Motociclete
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Kawasaki
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Legendara marcă japoneză, cunoscută pentru performanță excepțională și fiabilitate de neegalat
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4 text-center">⚡</div>
                <CardTitle className="text-xl text-primary">{model.name}</CardTitle>
                <CardDescription>{model.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Motor:</span>
                    <span className="text-foreground">{model.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Putere:</span>
                    <span className="text-foreground">{model.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">{model.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Caracteristici:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  Solicită Ofertă
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kawasaki;