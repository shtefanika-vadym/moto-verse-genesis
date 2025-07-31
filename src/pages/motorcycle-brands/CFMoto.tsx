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
      name: "ZEEHO C!TY SPORT '24",
      category: "Electric",
      engine: "Mid motor, tip motocicleta (L1e-B)",
      power: "Nu se specifică",
      price: "€2,990",
      features: ["Eligibil Rabla", "Inmatriculabil: Da"],
      availableFinancing: "Rate de la 414.64 RON",
    },
    {
      name: "CFMOTO 125NK ABS '25",
      category: "Naked",
      engine: "Monocilindric, 4 timpi, racit cu lichid",
      power: "15 CP",
      price: "€3,490",
      features: ["ABS", "Inmatriculabil: Da", "Eligibil Rabla"],
      availableFinancing: "Rate de la 483.14 RON",
    },
    {
      name: "CFMOTO 300NK ABS '25",
      category: "Naked",
      engine: "1 cilindru, 4 timpi, DOHC",
      power: "27 CP",
      price: "€3,690",
      features: ["ABS", "Inmatriculabil: Da", "Eligibil Rabla"],
      availableFinancing: "Rate de la 510.57 RON",
    },
    {
      name: "CFMOTO 300CL-X '25",
      category: "Heritage",
      engine: "1 cilindru, 4 timpi",
      power: "Nu se specifică",
      price: "€4,490",
      features: ["Inmatriculabil: Da", "Eligibil Rabla"],
      availableFinancing: "Rate de la 620.28 RON",
    },
    {
      name: "CFMOTO 450NK ABS '25",
      category: "Naked",
      engine: "2 cilindri 4 timpi DOHC",
      power: "40.5 CP",
      price: "€5,390",
      features: [
        "ABS",
        "Cruise Control",
        "Control derapaj",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 743.70 RON",
    },
    {
      name: "CFMOTO 450SR ABS '25",
      category: "Sport",
      engine: "2 cilindri 4 timpi DOHC",
      power: "Nu se specifică",
      price: "€5,790",
      features: [
        "ABS",
        "Cruise Control",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 798.56 RON",
    },
    {
      name: "CFMOTO 450MT '25",
      category: "Touring/Travel",
      engine: "2 cilindri",
      power: "Nu se specifică",
      price: "€5,990",
      features: [
        "ABS",
        "Cruise Control",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 825.98 RON",
    },
    {
      name: "CFMOTO 700CL-X Heritage '25",
      category: "Heritage",
      engine: "2 cilindri în linie, 4 timpi",
      power: "71.4 CP",
      price: "€6,290",
      features: [
        "ABS",
        "Cruise Control",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 867.13 RON",
    },
    {
      name: "CFMOTO 800MT Sport '25",
      category: "Touring/Travel",
      engine: "2 cilindri în linie, 4 timpi, DOHC",
      power: "95 CP",
      price: "€7,990",
      features: [
        "ABS",
        "Cruise Control",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 1,100.26 RON",
    },
    {
      name: "CFMOTO 675SR R '25",
      category: "Sport",
      engine: "3 cilindri în linie, 4 timpi, racit cu lichid",
      power: "Nu se specifică",
      price: "€7,990",
      features: [
        "ABS",
        "Cruise Control",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 1,100.26 RON",
    },
    {
      name: "CFMOTO 800MT Explore Edition '25",
      category: "Touring/Travel",
      engine: "2 cilindri în linie, 4 timpi",
      power: "Nu se specifică",
      price: "€9,990",
      features: [
        "ABS",
        "Cruise Control",
        "Inmatriculabil: Da",
        "Eligibil Rabla",
      ],
      availableFinancing: "Rate de la 1,374.53 RON",
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
