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

const CFMoto = () => {
  const models = [
    {
      name: "NK 650",
      category: "Naked",
      engine: "649cc, 2 cilindri",
      power: "61 CP",
      price: "€6,500",
      features: ["ABS", "Display TFT", "Suspenție reglabilă"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "MT 650",
      category: "Adventure",
      engine: "649cc, 2 cilindri",
      power: "61 CP",
      price: "€7,200",
      features: ["ABS", "Protecții", "Bagaje laterale"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "Adventure 700",
      category: "Adventure",
      engine: "692cc, 2 cilindri",
      power: "75 CP",
      price: "€8,500",
      features: ["ABS", "Tracțiune", "Suspensii lungi"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },

    {
      name: "300NK",
      category: "Naked",
      engine: "292.4cc, 1 cilindru",
      power: "27.4 CP",
      price: "€3,990",
      features: ["ABS", "LED lights", "Display digital"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "450NK",
      category: "Naked",
      engine: "449cc, 2 cilindri",
      power: "50 CP",
      price: "€5,490",
      features: ["Display TFT", "ABS", "Greutate redusă", "Look agresiv"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "700CL-X Sport",
      category: "Scrambler",
      engine: "693cc, 2 cilindri",
      power: "73 CP",
      price: "€8,290",
      features: [
        "ABS cornering",
        "Quickshifter",
        "Traction control",
        "Suspensii KYB",
      ],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "800NK",
      category: "Naked",
      engine: "799cc, 2 cilindri",
      power: "100 CP",
      price: "€10,290",
      features: [
        "3 moduri de rulare",
        "Display TFT 8''",
        "Bluetooth",
        "Cruise control",
      ],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "800MT Touring",
      category: "Adventure",
      engine: "799cc, 2 cilindri",
      power: "91 CP",
      price: "€11,990",
      features: [
        "Cruise control",
        "Quickshifter",
        "TFT 7''",
        "Moduri de rulare",
      ],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },

    {
      name: "CFORCE X4 450L",
      category: "ATV",
      engine: "450cc, 1 cilindru",
      power: "≈35 CP",
      price: "€5,404",
      features: ["4x4", "EFI", "Ideal pentru off‑road"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "CFORCE 600L Touring",
      category: "ATV",
      engine: "600cc, 1 cilindru",
      power: "≈40 CP",
      price: "–",
      features: ["Touring", "EPS", "Euro5+"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
    },
    {
      name: "CFORCE X5 520L",
      category: "ATV",
      engine: "500cc, 1 cilindru",
      power: "≈38 CP",
      price: "–",
      features: ["Versatil", "Tractor", "Off‑road"],
      image:
        "https://mcn-images.bauersecure.com/wp-images/188612/1440x960/cf-moto-800mt-touring-01.jpg?mode=max&quality=90&scale=down",
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
              CFMoto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Motociclete moderne cu tehnologie avansată, oferind o combinație
              perfectă între performanță și accesibilitate
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

export default CFMoto;
