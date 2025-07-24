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

const Apparel = () => {
  const apparelItems = [
    {
      name: "Alpinestars T-GP Plus R V3",
      brand: "Alpinestars",
      category: "Jachetă Moto",
      material: "Textil 600D + protecție CE",
      features: [
        "Protecții umeri/elboi",
        "Ventilație optimizată",
        "Material rezistent la abraziune",
      ],
      price: "€199",
      image:
        "https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/6F9D/CC1A/4B02/3D2A/3A2C/0E6F/6F6A/Alpinestars-T-GP-Plus-R-V3-Black-White-1.jpg",
    },
    {
      name: "Macna Cubes",
      brand: "Macna",
      category: "Jachetă Moto",
      material: "Textil cu membrane Raintex",
      features: [
        "Impermeabilă",
        "Ventilație reglabile",
        "Protecție în spate și umeri",
      ],
      price: "€229",
      image:
        "https://motoboom.ro/86699-large_default/jacheta-macna-cubes-negru.jpg",
    },
    {
      name: "SMRacer Racer Pro",
      brand: "SMRacer",
      category: "Jachetă Moto",
      material: "Piele de bovină + textil",
      features: [
        "Design sportiv",
        "Protecție completă CE",
        "Acoperire impermeabilă",
      ],
      price: "€349",
      image:
        "https://motoemotion.ro/51229-large_default/jacheta-moto-piele-smracer-racer-pro.jpg",
    },
    {
      name: "Alpinestars Stella SP-8",
      brand: "Alpinestars",
      category: "Mănuși Moto",
      material: "Piele de capră + neopren",
      features: ["Protecție articulații", "Bază elastică", "Palmă întărită"],
      price: "€129",
      image:
        "https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/61E4/4A92/5EF0/51C4/2DBB/0A0A/2BE4/FCF5/Alpinestars-SP-8-V3-Black-White.jpg",
    },
    {
      name: "Macna Top Gun",
      brand: "Macna",
      category: "Mănuși Moto",
      material: "Piele de capră + textil",
      features: [
        "Ventilație completă",
        "Protecție suplimentară articulații",
        "Grip excelent",
      ],
      price: "€89",
      image: "https://motoboom.ro/86699-large_default/manusi-macna-top-gun.jpg",
    },
    {
      name: "SMRacer Speed Pro",
      brand: "SMRacer",
      category: "Mănuși Moto",
      material: "Piele naturală + mesh",
      features: [
        "Protecție carbon",
        "Palmă antiderapantă",
        "Ventilație optimizată",
      ],
      price: "€89",
      image:
        "https://motoemotion.ro/58465-large_default/manusi-moto-piele-smracer-speed-pro.jpg",
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
              Haine Moto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Găsește jachete, mănuși și echipamente de protecție de la
              Alpinestars, Macna și SMRacer, create pentru confort și siguranță.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apparelItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {item.name}
                </CardTitle>
                <CardDescription>{item.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categorie:</span>
                    <span className="text-foreground">{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="text-foreground">{item.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
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

export default Apparel;
