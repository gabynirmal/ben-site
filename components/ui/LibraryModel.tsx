import React from "react";
import { useGLTF } from "@react-three/drei";

// Type your props cleanly using standard React element properties
export function LibraryModel(props: React.ComponentPropsWithoutRef<"group">) {
  // 1. Fetch the raw 3D scene from your public root directory
  const { scene } = useGLTF("/LibraryRenderedProto.final.glb");

  // 2. Render the scene graph inside a primitive wrapper passing down your props
  return <primitive object={scene} {...props} />;
}

// 3. CRUCIAL: Points React to the public static decoder to safely unpack Draco files
useGLTF.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
);

// 4. Preload the asset to optimize browser caching and network delivery
useGLTF.preload("/LibraryRenderedProto.final.glb");
