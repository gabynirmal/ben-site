"use client";

import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";

export function FreeFlyControls({ speed = 10 }: { speed?: number }) {
  const { camera } = useThree();
  const move = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  useEffect(() => {
    camera.position.set(82.6, -60.2, 186.1);
    camera.rotation.set(0.237, 0.523, -0.121);
  }, [camera]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          move.current.forward = true;
          break;
        case "KeyS":
          move.current.backward = true;
          break;
        case "KeyA":
          move.current.left = true;
          break;
        case "KeyD":
          move.current.right = true;
          break;
        case "KeyR":
        case "Space":
          e.preventDefault();
          move.current.up = true;
          break;
        case "KeyF":
        case "ShiftLeft":
          move.current.down = true;
          break;
        case "KeyP":
          console.log(
            `position: [${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}]`,
          );
          console.log(
            `rotation: [${camera.rotation.x.toFixed(3)}, ${camera.rotation.y.toFixed(3)}, ${camera.rotation.z.toFixed(3)}]`,
          );
          break;
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          move.current.forward = false;
          break;
        case "KeyS":
          move.current.backward = false;
          break;
        case "KeyA":
          move.current.left = false;
          break;
        case "KeyD":
          move.current.right = false;
          break;
        case "KeyR":
        case "Space":
          e.preventDefault();
          move.current.up = false;
          break;
        case "KeyF":
        case "ShiftLeft":
          move.current.down = false;
          break;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  const forward = useRef(new THREE.Vector3());
  const right = useRef(new THREE.Vector3());
  const moveVec = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const m = move.current;

    camera.getWorldDirection(forward.current);
    forward.current.y = 0;
    forward.current.normalize();

    right.current.crossVectors(forward.current, camera.up).normalize();

    moveVec.current.set(0, 0, 0);
    if (m.forward) moveVec.current.add(forward.current);
    if (m.backward) moveVec.current.sub(forward.current);
    if (m.right) moveVec.current.add(right.current);
    if (m.left) moveVec.current.sub(right.current);
    if (m.up) moveVec.current.y += 1;
    if (m.down) moveVec.current.y -= 1;

    if (moveVec.current.lengthSq() > 0) {
      moveVec.current.normalize().multiplyScalar(speed * delta);
      camera.position.add(moveVec.current);
    }
  });

  return <PointerLockControls selector="#bs-canvas-trigger" />;
}
