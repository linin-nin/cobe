"use client"
import { Canvas, useLoader } from "@react-three/fiber"

const Cobe = () => {
  return (
    <div>
        <Canvas>
            <mesh>
                <sphereGeometry args={[1,32,32]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    </div>
  )
}

export default Cobe