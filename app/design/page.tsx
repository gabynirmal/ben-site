"use client";

import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import Masonry from "@/components/ui/masonry/Masonry";
import { useState } from "react";

export default function Design() {
  const design = db.design;
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
          src="/design/learning-the-hard-way/duotoneFace.png"
          alt="Photoshopped Image of Ben Smith"
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
        <Image
          src="/design/learning-the-hard-way/duotoneFaceNoBackground.png"
          alt="Photoshopped Image of Ben Smith"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
            zIndex: "50",
            pointerEvents: "none",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Masonry db={design} folder="design" />
    </>
  );
}
