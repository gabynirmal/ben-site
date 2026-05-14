"use client";

import { Flex, Text, Grid, Icon, Popover, Portal } from "@chakra-ui/react";
import Image from "next/image";
import ContactLinks from "./ContactLinks";
import { useState, useEffect } from "react";
import AboutDev from "./AboutDev";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Background Image */}
      <Flex position="absolute" top="0" left="0" w="100vw" h="100vh">
        <Image
          src="/photography/IMG_4243.JPG"
          alt="Image of Benjamin Smith on Mount Olympus"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
          loading="eager"
        />
      </Flex>

      {/* Grid overlay */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap="40px"
        position="absolute"
        w="100%"
        h="100vh"
        p="10"
      >
        {/* First column - text */}
        <Flex
          flexDirection="column"
          pb="20px"
          justifyContent="flex-end"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "translateY(0)" : "translateY(20px)"}
          transition="opacity 0.6s ease, transform 0.6s ease"
        >
          <Text as="p" color="var(--background)">
            Hi, I’m Benjamin Smith, a third-year Architectural Studies and
            Design major at Northeastern University. I’m particularly interested
            in sustainable design and creating spaces that consider the needs of
            all living things. I believe green space plays a vital role in
            shaping meaningful and livable environments.
            <br />
            <br />
            Outside the studio, I enjoy caring for my growing plant collection
            and experimenting with interior design. I also taught myself how to
            crochet, which has become a creative outlet alongside my love for
            discovering new music.
          </Text>
          <ContactLinks mt="6" />
        </Flex>
      </Grid>
    </>
  );
}
