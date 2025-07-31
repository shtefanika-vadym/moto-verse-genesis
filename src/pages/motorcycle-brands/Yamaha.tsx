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

const Yamaha = () => {
  const models = [
    {
      name: "YZF-R1",
      category: "Supersport",
      engine: "998cc, 4 cilindri",
      power: "200 CP",
      price: "€17,200",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["IMU 6D", "Slide Control", "Launch Control"],
    },
    {
      name: "YZF-R7",
      category: "Supersport",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€8,800",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Quickshifter", "Traction Control", "Rider Modes"],
    },
    {
      name: "MT-09",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€9,500",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Quickshifter", "TCS", "Power Mode"],
    },
    {
      name: "MT-07",
      category: "Naked",
      engine: "689cc, 2 cilindri",
      power: "74.8 CP",
      price: "€7,500",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Assist & Slipper Clutch", "LED Lighting", "TFT Display"],
    },
    {
      name: "MT-03",
      category: "Naked",
      engine: "321cc, 2 cilindri",
      power: "42 CP",
      price: "€4,600",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["ABS", "Compact design", "Beginner-friendly"],
    },
    {
      name: "Tracer 9",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€12,000",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Rider Modes", "Cruise Control", "TFT Display"],
    },
    {
      name: "Tracer 7",
      category: "Sport Touring",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€9,200",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: [
        "Assist & Slipper Clutch",
        "Comfortable Ergonomics",
        "LED Lighting",
      ],
    },
    {
      name: "Ténéré 700",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€10,200",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["ABS", "Rally Mode", "LED Lighting"],
    },
    {
      name: "Ténéré 700 World Raid",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€13,000",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: [
        "Dual Fuel Tank",
        "Longer Travel Suspension",
        "Rally-inspired",
      ],
    },
    {
      name: "XSR900",
      category: "Retro",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€9,900",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Retro styling", "LED Lights", "Modern suspension"],
    },
    {
      name: "XSR700",
      category: "Retro",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€7,400",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Retro design", "Comfortable ride", "LED Lighting"],
    },
    {
      name: "VMAX",
      category: "Cruiser",
      engine: "1679cc, 4 cilindri",
      power: "200 CP",
      price: "€21,000",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Muscular styling", "Torque-heavy engine", "Cruiser comfort"],
    },
    {
      name: "V-Star 250",
      category: "Cruiser",
      engine: "249cc, 2 cilindri",
      power: "21.3 CP",
      price: "€4,000",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Low seat height", "Compact design", "Beginner-friendly"],
    },
    {
      name: "V-Star 650 Custom",
      category: "Cruiser",
      engine: "649cc, 2 cilindri",
      power: "40 CP",
      price: "€6,700",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Classic cruiser design", "Easy handling", "Comfortable seat"],
    },
    {
      name: "FJR1300",
      category: "Sport Touring",
      engine: "1298cc, 4 cilindri",
      power: "145 CP",
      price: "€14,500",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: [
        "Cruise Control",
        "Comfortable ergonomics",
        "Advanced electronics",
      ],
    },
    {
      name: "FZS1000",
      category: "Naked",
      engine: "998cc, 4 cilindri",
      power: "145 CP",
      price: "€9,200",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Powerful engine", "Sporty performance", "Comfortable ride"],
    },
    {
      name: "SR400",
      category: "Retro",
      engine: "399cc, 1 cilindru",
      power: "24.8 CP",
      price: "€5,000",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Classic styling", "Easy to ride", "Affordable"],
    },
    {
      name: "YFZ450R",
      category: "ATV",
      engine: "449cc, 4 cilindri",
      power: "44.7 CP",
      price: "€8,400",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Sporty handling", "Racing-inspired", "Durable suspension"],
    },
    {
      name: "Grizzly 700",
      category: "ATV",
      engine: "686cc, 4 cilindri",
      power: "44.8 CP",
      price: "€8,800",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["4WD", "Comfortable ride", "Heavy-duty build"],
    },
    {
      name: "Raptor 700R",
      category: "ATV",
      engine: "686cc, 4 cilindri",
      power: "49.6 CP",
      price: "€9,500",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: [
        "Sporty design",
        "Racing performance",
        "High ground clearance",
      ],
    },
    {
      name: "Wolverine X4",
      category: "SxS",
      engine: "847cc, 3 cilindri",
      power: "75.6 CP",
      price: "€16,500",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["4WD", "Off-road capabilities", "Comfortable seating"],
    },
    {
      name: "Wolverine X2",
      category: "SxS",
      engine: "847cc, 3 cilindri",
      power: "75.6 CP",
      price: "€15,200",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Off-road ready", "Tough build", "Roomy interior"],
    },
    {
      name: "PWT700",
      category: "SxS",
      engine: "686cc, 4 cilindri",
      power: "44.8 CP",
      price: "€12,500",
      image:
        "https://www.webbikeworld.com/wp-content/uploads/2022/12/2023-Yamaha-R1M.jpg",
      features: ["Compact design", "Efficient engine", "Reliable build"],
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
              Yamaha
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inovație și calitate japoneză în fiecare motocicletă, pentru
              pasionații adevărați
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

export default Yamaha;
