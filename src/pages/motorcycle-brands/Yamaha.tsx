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

const images = import.meta.glob("/src/assets/yamaha/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const simplifiedImages: Record<string, string> = {};

Object.entries(images).forEach(([path, src]) => {
  const fileName =
    path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") || "";
  simplifiedImages[fileName] = src;
});

const Yamaha = () => {
  const models = [
    {
      name: "MT-03",
      category: "Naked",
      engine: "321cc, 2 cilindri",
      power: "42 CP",
      price: "€4,600",
      image: simplifiedImages["yamaha-mt-03-119737"],
      features: ["ABS", "Compact design", "Beginner-friendly"],
    },
    {
      name: "MT-07",
      category: "Naked",
      engine: "689cc, 2 cilindri",
      power: "74.8 CP",
      price: "€7,500",
      image: simplifiedImages["yamaha-mt-07-833903"],
      features: ["Assist & Slipper Clutch", "LED Lighting", "TFT Display"],
    },
    {
      name: "MT-09",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€9,500",
      image: simplifiedImages["yamaha-mt-09-211226"],
      features: ["Quickshifter", "TCS", "Power Mode"],
    },
    {
      name: "YZF-R1",
      category: "Supersport",
      engine: "998cc, 4 cilindri",
      power: "200 CP",
      price: "€17,200",
      image: simplifiedImages["yamaha-r1-race-068366"],
      features: ["IMU 6D", "Slide Control", "Launch Control"],
    },
    {
      name: "YZF-R7",
      category: "Supersport",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€8,800",
      image: simplifiedImages["yzf-r7"],
      features: ["Quickshifter", "Traction Control", "Rider Modes"],
    },
    {
      name: "Tracer 9",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€12,000",
      image: simplifiedImages["yamaha-tracer-9-912261"],
      features: ["Rider Modes", "Cruise Control", "TFT Display"],
    },
    {
      name: "Ténéré 700",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€10,200",
      image: simplifiedImages["yamaha-tenere-700-769009"],
      features: ["ABS", "Rally Mode", "LED Lighting"],
    },
    {
      name: "Ténéré 700 World Raid",
      category: "Adventure",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€13,000",
      image: simplifiedImages["yamaha-tenere-700-rally-102110"],
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
      image: simplifiedImages["yamaha-xsr900-156036"],
      features: ["Retro styling", "LED Lights", "Modern suspension"],
    },
    {
      name: "XSR700",
      category: "Retro",
      engine: "689cc, 2 cilindri",
      power: "73 CP",
      price: "€7,400",
      image: simplifiedImages["XSR700"],
      features: ["Retro design", "Comfortable ride", "LED Lighting"],
    },
    {
      name: "FJR1300",
      category: "Sport Touring",
      engine: "1298cc, 4 cilindri",
      power: "145 CP",
      price: "€14,500",
      image: simplifiedImages["yamaha-fjr1300-NEEDS_IMAGE"],
      features: [
        "Cruise Control",
        "Comfortable ergonomics",
        "Advanced electronics",
      ],
    },
    {
      name: "PW50",
      category: "Mini / Off-road",
      engine: "50cc, 1 cilindru",
      power: "? CP",
      price: "€1,800",
      image: simplifiedImages["yamaha-pw50-043425"],
      features: ["Beginner-friendly", "Compact", "Low seat"],
    },
    {
      name: "YZF-R125",
      category: "Supersport",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€5,000",
      image: simplifiedImages["yamaha-r125-009112"],
      features: ["A1 License", "Lightweight", "Sporty design"],
    },
    {
      name: "YZF-R3",
      category: "Supersport",
      engine: "321cc, 2 cilindri",
      power: "42 CP",
      price: "€6,200",
      image: simplifiedImages["yamaha-r3-413342"],
      features: ["ABS", "Compact", "Beginner-friendly"],
    },
    {
      name: "R6 Race",
      category: "Supersport",
      engine: "599cc, 4 cilindri",
      power: "120+ CP",
      price: "€13,500",
      image: simplifiedImages["yamaha-r6-race-731094"],
      features: ["Track-ready", "Aggressive riding", "No passenger seat"],
    },
    {
      name: "MT-125",
      category: "Naked",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€4,800",
      image: simplifiedImages["yamaha-mt-125-166469"],
      features: ["Lightweight", "Beginner-friendly", "LED Lights"],
    },
    {
      name: "MT-09 SP",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€11,500",
      image: simplifiedImages["yamaha-mt-09-sp-072231"],
      features: ["Upgraded suspension", "TFT", "Sport tuning"],
    },
    {
      name: "MT-07 Y-AMT Automat",
      category: "Naked",
      engine: "689cc, 2 cilindri",
      power: "74.8 CP",
      price: "€8,200",
      image: simplifiedImages["yamaha-mt-07-y-amt-automat-812434"],
      features: ["Automatic transmission", "LED Lighting", "Comfortable ride"],
    },
    {
      name: "MT-09 Y-AMT Automat",
      category: "Naked",
      engine: "889cc, 3 cilindri",
      power: "119 CP",
      price: "€10,800",
      image: simplifiedImages["yamaha-mt-09-y-amt-automat-836867"],
      features: ["Automatic gearbox", "Sporty design", "Quickshifter"],
    },
    {
      name: "Tracer 9 GT",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€13,500",
      image: simplifiedImages["yamaha-tracer-9-gt-325884"],
      features: ["Touring gear", "Electronic suspension", "Comfort seat"],
    },
    {
      name: "Tracer 9 GT Y-AMT Automat",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€14,200",
      image: simplifiedImages["yamaha-tracer-9-gt-y-amt-automat-607280"],
      features: ["Automatic gearbox", "TFT", "Heated grips"],
    },
    {
      name: "Tracer 9 GT Y-AMT Automat (v2)",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€14,400",
      image: simplifiedImages["yamaha-tracer-9-gt-y-amt-automat-903271"],
      features: ["Updated model", "Side cases", "Ride Modes"],
    },
    {
      name: "Tracer 9 Y-AMT",
      category: "Sport Touring",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€13,000",
      image: simplifiedImages["yamaha-tracer-9-y-amt-554448"],
      features: ["Semi-auto", "TFT screen", "Comfortable ergonomics"],
    },
    {
      name: "TT-R110",
      category: "Off-road",
      engine: "110cc, 1 cilindru",
      power: "8.5 CP",
      price: "€2,600",
      image: simplifiedImages["yamaha-tt-r110-264332"],
      features: ["Beginner dirt bike", "Electric start", "Manual clutch"],
    },
    {
      name: "TT-R50",
      category: "Off-road",
      engine: "50cc, 1 cilindru",
      power: "4.5 CP",
      price: "€2,000",
      image: simplifiedImages["yamaha-tt-r50-275806"],
      features: ["Perfect for kids", "Auto clutch", "Small size"],
    },
    {
      name: "WR250F",
      category: "Enduro",
      engine: "250cc, 4 cilindri",
      power: "39 CP",
      price: "€8,200",
      image: simplifiedImages["yamaha-wr250-f-280011"],
      features: ["Enduro focused", "Lightweight", "Reliable engine"],
    },
    {
      name: "WR450F",
      category: "Enduro",
      engine: "450cc, 4 cilindri",
      power: "56 CP",
      price: "€9,500",
      image: simplifiedImages["yamaha-wr450-f-935503"],
      features: ["Powerful 450", "Yamaha Power Tuner", "Trail ready"],
    },
    {
      name: "XSR125",
      category: "Retro",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€4,600",
      image: simplifiedImages["yamaha-xsr125-150077"],
      features: ["Retro style", "Lightweight", "Modern tech"],
    },
    {
      name: "XSR125 Legacy",
      category: "Retro",
      engine: "125cc, 1 cilindru",
      power: "15 CP",
      price: "€4,900",
      image: simplifiedImages["yamaha-xsr125-legacy-186268"],
      features: ["Special edition", "Spoke wheels", "Heritage colors"],
    },
    {
      name: "XSR900 GP",
      category: "Retro Sport",
      engine: "890cc, 3 cilindri",
      power: "119 CP",
      price: "€11,900",
      image: simplifiedImages["yamaha-xsr900-gp-992049"],
      features: ["Race fairing", "Retro MotoGP look", "Modern tech"],
    },
    {
      name: "YZ125",
      category: "Motocross",
      engine: "125cc, 2T",
      power: "34 CP",
      price: "€7,000",
      image: simplifiedImages["yamaha-yz125-755593"],
      features: ["2-stroke engine", "Lightweight", "High rev"],
    },
    {
      name: "YZ250",
      category: "Motocross",
      engine: "250cc, 2T",
      power: "49 CP",
      price: "€8,000",
      image: simplifiedImages["yamaha-yz250-467778"],
      features: ["Racing tuned", "Agile", "Powerful"],
    },
    {
      name: "YZ250F",
      category: "Motocross",
      engine: "250cc, 4T",
      power: "41 CP",
      price: "€8,500",
      image: simplifiedImages["yamaha-yz250-f-438008"],
      features: ["Fuel injection", "Balance performance", "Race ready"],
    },
    {
      name: "YZ450F",
      category: "Motocross",
      engine: "450cc, 4T",
      power: "59 CP",
      price: "€9,200",
      image: simplifiedImages["yamaha-yz450-f-482834"],
      features: ["High torque", "Tuned suspension", "Advanced electronics"],
    },
    {
      name: "YZ65",
      category: "Motocross",
      engine: "65cc, 2T",
      power: "16 CP",
      price: "€4,000",
      image: simplifiedImages["yamaha-yz65-709257"],
      features: ["Youth racing", "Manual gearbox", "Mini MX"],
    },
    {
      name: "YZ85",
      category: "Motocross",
      engine: "85cc, 2T",
      power: "25 CP",
      price: "€4,800",
      image: simplifiedImages["yamaha-yz85-159654"],
      features: ["MX8-ready", "Light chassis", "High-revving"],
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
                  <Link to={"/contact"}>Solicită Ofertă</Link>
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
