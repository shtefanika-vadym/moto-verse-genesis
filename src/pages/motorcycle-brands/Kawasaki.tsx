import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Kawasaki = () => {
  const models = [
    {
      name: "Ninja 500 SE",
      category: "Supersport",
      engine: "451cc, 2 cilindri",
      power: "≈45 CP",
      price: "€6,990", // e.g. from local listings
      features: ["ABS", "Sporty styling", "Lightweight"],
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/01/2022-Kawasaki-Ninja-400-ABS-KRT3-1536x1152-1.jpg",
    },
    {
      name: "Z650",
      category: "Supernaked",
      engine: "649cc, twin",
      power: "≈67 CP",
      price: "€8,500",
      features: ["Assist & Slipper Clutch", "TFT display", "A2-ready"],
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/01/2022-Kawasaki-Ninja-400-ABS-KRT3-1536x1152-1.jpg",
    },
    {
      name: "Z900 SE",
      category: "Supernaked",
      engine: "948cc, inline‑4",
      power: "≈140 CP",
      price: "€11,000",
      features: ["Brembo brakes", "Öhlins suspension", "Multiple riding modes"],
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/01/2022-Kawasaki-Ninja-400-ABS-KRT3-1536x1152-1.jpg",
    },
    {
      name: "Z650RS",
      category: "Modern Classic",
      engine: "649cc, twin",
      power: "≈68 CP",
      price: "€8,000",
      features: ["Retro styling", "LCD dashboard", "Commuter-friendly"],
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/01/2022-Kawasaki-Ninja-400-ABS-KRT3-1536x1152-1.jpg",
    },
    {
      name: "KLR650",
      category: "Adventure / Dual-Sport",
      engine: "652cc, single-cylinder",
      power: "≈44 CP",
      price: "€9,000",
      features: ["ABS", "Long-range tank", "Adventure touring"],
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/01/2022-Kawasaki-Ninja-400-ABS-KRT3-1536x1152-1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
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
              Legendara marcă japoneză, cunoscută pentru performanță
              excepțională și fiabilitate de neegalat
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {model.name}
                </CardTitle>
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
                    <span className="text-primary font-semibold">
                      {model.price}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-muted-foreground flex items-center"
                      >
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
