import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Motociclete = () => {
  const brands = [
    {
      name: "Kawasaki",
      description:
        "Legendara marcă japoneză, cunoscută pentru performanță și fiabilitate",
      models: ["Ninja ZX-10R", "Z900", "Versys 650"],
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/020/336/022/small_2x/kawasaki-logo-kawasaki-icon-free-free-vector.jpg",
      path: "/motociclete/kawasaki",
    },
    {
      name: "Yamaha",
      description:
        "Inovație și calitate japoneză în fiecare motocicletă. Performanță și aspect",
      models: ["YZF-R1", "MT-09", "Ténéré 700"],
      image:
        "data:image/png;base64,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",
      path: "/motociclete/yamaha",
    },
    {
      name: "CFMoto",
      description:
        "Motociclete moderne cu tehnologie avansată și prețuri competitive",
      models: ["NK 650", "MT 650", "Adventure 700"],
      image:
        "https://cfmotodealers.co.za/wp-content/uploads/2021/08/CFMOTO_logo_black_stacked_sRGB-1.png",
      path: "/motociclete/cfmoto",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Motociclete
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explorează gama noastră de motociclete de la cei mai respectați
            producători din lume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center bg-white ">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-48 object-contain rounded-t-lg mix-blend-multiply"
                  />
                </div>
                <CardTitle className="text-2xl text-center text-primary">
                  {brand.name}
                </CardTitle>
                <CardDescription className="text-center">
                  {brand.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">
                  Modele populare:
                </h4>
                <ul className="space-y-2 mb-6">
                  {brand.models.map((model, modelIndex) => (
                    <li
                      key={modelIndex}
                      className="text-muted-foreground flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {model}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-primary hover:shadow-glow"
                >
                  <Link to={brand.path}>Vezi Detalii</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motociclete;
