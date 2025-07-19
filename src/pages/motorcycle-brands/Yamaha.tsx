import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Yamaha = () => {
  const models = [
    {
      name: "YZF-R1",
      category: "Supersport",
      engine: "998cc, 4 cilindri",
      power: "200 CP",
      price: "€17,200",
      features: ["IMU 6D", "Slide Control", "Launch Control"]
    },
    {
      name: "MT-09",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€9,500",
      features: ["Quickshifter", "TCS", "Power Mode"]
    },
    {
      name: "Ténéré 700",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€10,200",
      features: ["ABS", "Rally Mode", "LED Lighting"]
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
              Yamaha
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inovație și calitate japoneză în fiecare motocicletă, pentru pasionații adevărați
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4 text-center">🎯</div>
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

export default Yamaha;