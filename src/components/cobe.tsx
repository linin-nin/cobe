"use client"
import { Canvas, useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three'

const Cobe = () => {

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/public/16 amazing photos of Earth pinned from space by astronaut Karen Nyberg.jpeg",
    "/public/download (1).jpeg",
    "/public/download.jpeg"
  ])

  return (
    <div className="flex justify-center items-center">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight intensity={3.5} position={[1, 0, -.25]} />
          <mesh scale={2.5}>
              <sphereGeometry args={[1,32,32]} />
              <meshStandardMaterial map = {color} />
          </mesh>
        </Canvas>
    </div>
  )
}

export default Cobe