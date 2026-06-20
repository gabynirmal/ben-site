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
        overflow="hidden"
      >
        <Image
          src="/personal/jerry/JerryGarciaTapestry.png"
          alt="Jerry Garcia Crocheted Tapestry"
          fill
          style={{
            objectFit: "cover",
            transform: "scale(1.5)",
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
