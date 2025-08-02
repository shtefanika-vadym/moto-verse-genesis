import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TipuriMotociclism from "./pages/TipuriMotociclism";
import Motociclete from "./pages/Motociclete";
import CFMoto from "./pages/motorcycle-brands/CFMoto";
import Kawasaki from "./pages/motorcycle-brands/Kawasaki";
import Yamaha from "./pages/motorcycle-brands/Yamaha";
import Echipamente from "./pages/Echipamente";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Helmets from "./pages/echipamente-brands/Helmets";
import Gear from "./pages/echipamente-brands/Other";
import Apparel from "./pages/echipamente-brands/Haine";
import AboutUs from "./pages/Despre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tipuri-motociclism" element={<TipuriMotociclism />} />
          <Route path="/motociclete" element={<Motociclete />} />
          <Route path="/motociclete/cfmoto" element={<CFMoto />} />
          <Route path="/motociclete/kawasaki" element={<Kawasaki />} />
          <Route path="/motociclete/yamaha" element={<Yamaha />} />
          <Route path="/echipamente/casti" element={<Helmets />} />
          <Route path="/echipamente/haine" element={<Apparel />} />
          <Route path="/echipamente/manusi-boots" element={<Gear />} />
          <Route path="/echipamente" element={<Echipamente />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/despre-noi" element={<AboutUs />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
