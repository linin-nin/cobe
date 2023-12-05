"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// import './styles.css';

export default function App() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00aaff });
    const globe = new THREE.Mesh(geometry, material);

    scene.add(globe);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.x += 0.005;
      globe.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up resources here if needed
    };
  }, []);

  return (
    <div className="App">
      <h1>Simple WebGL Globe</h1>
      <canvas ref={canvasRef} />
    </div>
  );
}
