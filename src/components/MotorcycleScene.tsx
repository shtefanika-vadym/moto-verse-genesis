import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import MotorcycleModel from "./MotorcycleModel";

const MotorcycleScene = () => {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas className="bg-transparent">
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#ff6600"
          castShadow
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6600" />
        
        <Suspense fallback={null}>
          <MotorcycleModel />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
      
      {/* Subtle loading indicator - removed to show the 3D scene immediately */}
    </div>
  );
};

export default MotorcycleScene;