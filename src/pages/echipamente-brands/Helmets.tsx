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

const Helmets = () => {
  const helmets = [
    {
      name: "ALPINESTARS Supertech M10",
      brand: "ALPINESTARS",
      type: "Off-Road",
      shell: "Carbon avansat",
      weight: "1260g ± 50g",
      price: "€599",
      features: [
        "MIPS system",
        "Ventilație avansată",
        "Interior lavabil",
        "Certificare ECE 22.06",
      ],
      image:
        "https://www.alpinestars.com/cdn/shop/files/8304022-155-FRONT.jpg?v=1698393206",
    },
    {
      name: "Scorpion EXO-R1 Air",
      brand: "Scorpion",
      type: "Sport / Cursă",
      shell: "TCT Ultra®",
      weight: "1380g",
      price: "€419",
      features: [
        "Pinlock inclus",
        "Interior KwikWick3",
        "Sistem Airfit",
        "Certificare ECE 22.06",
      ],
      image:
        "https://www.scorpionsports.eu/img/productos/2000/Exo-r1-air-carbon_640.png",
    },
    {
      name: "HJC RPHA 11",
      brand: "HJC",
      type: "Sport / Racing",
      shell: "Fibra compozită PIM+",
      weight: "1300g ± 50g",
      price: "€499",
      features: [
        "Ventilație excelentă",
        "Interior antibacterian",
        "Pinlock și vizieră fumurie incluse",
        "Certificare ECE 22.06",
      ],
      image:
        "https://hjchelmets.eu/wp-content/uploads/2021/12/RPHA11-Venom2-MC1.jpg",
    },
    {
      name: "AXXIS Draken S",
      brand: "AXXIS",
      type: "Street",
      shell: "ABS avansat",
      weight: "1450g",
      price: "€129",
      features: [
        "Vizieră anti-zgârieturi",
        "Interior complet detașabil",
        "Design sportiv",
        "Certificare ECE 22.05",
      ],
      image:
        "https://motoemotion.ro/60436-large_default/casca-integrala-axxis-draken-s.jpg",
    },
    {
      name: "Caberg Drift Evo",
      brand: "CABERG",
      type: "Sport Touring",
      shell: "Tricompozit (Kevlar, Carbon, Fibra de sticlă)",
      weight: "1350g ± 50g",
      price: "€369",
      features: [
        "Vizieră dublă (solar)",
        "Pinlock inclus",
        "Interior lavabil",
        "Certificare ECE 22.06",
      ],
      image:
        "https://www.caberg.it/wp-content/uploads/2021/01/Drift-Evo-Carbon-Sonic-red.jpg",
    },
    {
      name: "MT HELMETS Thunder 4 SV",
      brand: "MT HELMETS",
      type: "Touring",
      shell: "Policarbonat HIRP",
      weight: "1550g ± 50g",
      price: "€179",
      features: [
        "Ochelari de soare integrați",
        "Pinlock pregătit",
        "Design aerodinamic",
        "Certificare ECE 22.06",
      ],
      image:
        "https://mthelmet.com/storage/images/products/thunder-4-sv/t4sv-carbon-blue_3_720x720.jpg",
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
            <Link to="/echipamente">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Echipamente
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Căști Moto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Găsește casca ideală pentru stilul tău de condus — protecție,
              confort și performanță din partea brandurilor de top.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helmets.map((helmet, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <img
                    src={helmet.image}
                    alt={helmet.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {helmet.name}
                </CardTitle>
                <CardDescription>{helmet.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tip:</span>
                    <span className="text-foreground">{helmet.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Carcasă:</span>
                    <span className="text-foreground">{helmet.shell}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Greutate:</span>
                    <span className="text-foreground">{helmet.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">
                      {helmet.price}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {helmet.features.map((feature, featureIndex) => (
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

export default Helmets;
