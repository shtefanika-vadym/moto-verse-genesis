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

const Gear = () => {
  const gearItems = [
    {
      name: "Alpinestars SMX-6 V2",
      brand: "Alpinestars",
      category: "Încălțăminte",
      material: "Microfibră durabilă",
      features: [
        "Protecții TPU",
        "Talpă anti-alunecare",
        "Ventilație laterală",
      ],
      price: "€259",
      image:
        "https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/5F3F/98C0/C59E/A896/FADC/0A0C/6D01/E9BA/Alpinestars-SMX-6-V2-Motorcycle-Boots-Black-White-1.jpg",
    },
    {
      name: "Alpinestars SMX-1 R V2",
      brand: "Alpinestars",
      category: "Încălțăminte",
      material: "Microfibră + plasă 3D",
      features: ["Design low-cut", "Zone flexibile", "Protectie călcâi/gleznă"],
      price: "€179",
      image:
        "https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/61A5/86AC/344F/3590/CFDA/0A0A/2BAE/B4A4/Alpinestars-SMX-1-R-V2-Black-White.jpg",
    },
    {
      name: "Alpinestars SP-8 V3",
      brand: "Alpinestars",
      category: "Mănuși",
      material: "Piele de capră + piele sintetică",
      features: [
        "Protectie articulatii",
        "Palmă întărită",
        "Ventilație perforată",
      ],
      price: "€89",
      image:
        "https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/61E4/4A92/5EF0/51C4/2DBB/0A0A/2BE4/FCF5/Alpinestars-SP-8-V3-Black-White.jpg",
    },
    {
      name: "Macna Catch Mesh",
      brand: "Macna",
      category: "Mănuși",
      material: "Textil + piele sintetică",
      features: [
        "Ventilație completă",
        "Protecție soft TPR",
        "Grip bun în palmă",
      ],
      price: "€49",
      image:
        "https://motoboom.ro/86699-large_default/manusi-macna-catch-mesh-negru.jpg",
    },
    {
      name: "SMRacer GPX",
      brand: "SMRacer",
      category: "Mănuși",
      material: "Piele naturală + carbon",
      features: ["Protecții dure", "Design sportiv", "Palmă antiderapantă"],
      price: "€69",
      image:
        "https://motoemotion.ro/51229-large_default/manusi-moto-piele-smracer-gpx.jpg",
    },
    {
      name: "SMRacer Track Evo",
      brand: "SMRacer",
      category: "Încălțăminte",
      material: "Piele sintetică",
      features: [
        "Slider de protecție",
        "Întărituri la gleznă",
        "Închidere velcro",
      ],
      price: "€139",
      image:
        "https://motoemotion.ro/58465-large_default/cizme-moto-sport-smracer-track-evo.jpg",
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
              Încălțăminte & Mănuși Moto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ghete și mănuși moto de calitate de la branduri de top precum
              Alpinestars, Macna și SMRacer – pentru protecție și stil la
              fiecare drum.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gearItems.map((item, index) => (
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

export default Gear;
