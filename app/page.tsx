import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Flex
        id="bs-home"
        position="absolute"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
      >
        <Image
          src="/architecture/photoshop-collage-large.png"
          alt="Photoshopped Image of Architectural Model"
          fill
          style={{ objectFit: "cover" }}
          loading="eager"
        />
      </Flex>
    </>
  );
}
