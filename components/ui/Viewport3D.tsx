"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { LibraryModel } from "./LibraryModel";
import { FreeFlyControls } from "./FreeFlyControls";
import { Environment } from "@react-three/drei";

function LibraryScene() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[12, 14, 8]} intensity={1.4} />
      <directionalLight position={[-8, 6, -4]} intensity={0.4} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Center>
          <LibraryModel scale={1.35} />
        </Center>
      </Suspense>
      <FreeFlyControls />
    </>
  );
}

export default function Viewport3D() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas camera={{ fov: 42 }} gl={{ antialias: true }}>
        <LibraryScene />
      </Canvas>
    </div>
  );
}
