'use client'
import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import createGlobe from 'cobe';
import * as THREE from 'three'


const Earth: React.FC = () => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

     // Initialize three.js scene
     const scene = new THREE.Scene();
     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
     renderer.setSize(600, 600);


    let phi = 0;
    console.log("this Ref value :", canvasRef.current)
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [1, 0.5, 3],
      markerColor: [0.1, 0.1, 1],
      glowColor: [1, 1, 2],
      opacity:1,
      offset: [0,0],
      markers: [
      ],
      onRender: (state: Record<string, any>) => {

        state.phi = phi;
        phi += 0.03;
      },
    });

    // Set up mouse controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

      // Set up camera
      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Update controls
        controls.update();
  
        // Render scene
        renderer.render(scene, camera);
      };
  
      animate();
  

    return () => {
      globe.destroy();
      controls.dispose();
    };
  }, []);

  return (
    <div className="App flex items-center justify-center z-[10] cursor-pointer ">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: '1' }}
      />
    </div>
  );
};

export default Earth
