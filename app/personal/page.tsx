"use client";

import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import Masonry from "@/components/ui/masonry/Masonry";
import { useState } from "react";

export default function Personal() {
  const personal = db.personal;
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {/* Header Image */}
      <Flex
        id="bs-home"
        position="absolute"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
      >
        <Image
          src="/personal/bottles/BottlesPainting.jpeg"
          alt="Photoshopped Image of Architectural Model"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease",
          }}
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Masonry db={personal} folder="personal" />
    </>
  );
}
