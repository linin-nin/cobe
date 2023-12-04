"use client"
import { Canvas, useLoader } from "@react-three/fiber"
import { Mesh } from 'three'

const Cobe = () => {
  return (
    <div className="flex justify-center items-center">
        <Canvas>
            <mesh scale={2.5}>
                <sphereGeometry args={[1,32,32]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    </div>
  )
}

export default Cobe