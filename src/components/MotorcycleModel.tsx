import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

const MotorcycleModel = () => {
  const groupRef = useRef<Group>(null);
  const wheelsRef = useRef<Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    // Rotate wheels
    wheelsRef.current.forEach((wheel) => {
      if (wheel) {
        wheel.rotation.x += 0.02;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Motorcycle body - simplified geometric representation */}
      
      {/* Main frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.3, 0.8]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Tank */}
      <mesh position={[0.5, 0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1.2]} />
        <meshPhongMaterial color="#ff6600" />
      </mesh>
      
      {/* Seat */}
      <mesh position={[-0.8, 0.3, 0]}>
        <boxGeometry args={[1, 0.2, 0.6]} />
        <meshPhongMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Handlebars */}
      <mesh position={[1.2, 1, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1]} />
        <meshPhongMaterial color="#333333" />
      </mesh>
      
      {/* Front wheel */}
      <mesh 
        ref={(el) => { if (el) wheelsRef.current[0] = el; }}
        position={[1.5, -0.5, 0]} 
        rotation={[0, 0, Math.PI / 2]}
      >
        <torusGeometry args={[0.7, 0.15, 8, 16]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Rear wheel */}
      <mesh 
        ref={(el) => { if (el) wheelsRef.current[1] = el; }}
        position={[-1.2, -0.5, 0]} 
        rotation={[0, 0, Math.PI / 2]}
      >
        <torusGeometry args={[0.7, 0.15, 8, 16]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Engine */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.2, 0.8, 0.8]} />
        <meshPhongMaterial color="#333333" />
      </mesh>
      
      {/* Exhaust pipe */}
      <mesh position={[-0.5, -0.2, 0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 2]} />
        <meshPhongMaterial color="#444444" />
      </mesh>
      
      {/* Headlight */}
      <mesh position={[1.4, 0.3, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshPhongMaterial color="#ffffff" emissive="#ffaa00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export default MotorcycleModel;