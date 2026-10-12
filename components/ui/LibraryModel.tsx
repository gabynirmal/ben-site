import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function LibraryModel(props: React.ComponentPropsWithoutRef<"group">) {
  const { scene } = useGLTF("/LibraryRenderedProto.final.glb");

  // useMemo runs synchronously right when the scene is available, catching production load states!
  const processedScene = useMemo(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          if (mat.name === "Plastic") {
            mat.transparent = true;
            mat.opacity = 0.5;
            mat.needsUpdate = true; // Tells Three.js to immediately compile transparency channel changes
          }
        });
      }
    });
    return scene;
  }, [scene]);

  return <primitive object={processedScene} {...props} />;
}

// 3. CRUCIAL: Points React to the public static decoder to safely unpack Draco files
useGLTF.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
);

// 4. Preload the asset to optimize browser caching and network delivery
useGLTF.preload("/LibraryRenderedProto.final.glb");
