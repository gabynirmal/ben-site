import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import Masonry from "@/components/ui/masonry/Masonry";

export default function Personal() {
  const personal = db.personal;

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
          }}
          loading="eager"
        />
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Masonry db={personal} folder="personal" />
    </>
  );
}
