"use client";

import { Flex, Text, Grid, Icon, Popover, Portal } from "@chakra-ui/react";
import Image from "next/image";
import ContactLinks from "./ContactLinks";
import { useState, useEffect } from "react";
import { MdComputer } from "react-icons/md";

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

        <Popover.Root>
          <Popover.Trigger asChild>
            <Flex
              zIndex="banner"
              position="absolute"
              bottom="20px"
              right="20px"
              alignItems="center"
              justifyContent="center"
              boxSize="40px"
              borderRadius="full"
              bgColor="var(--link-hover)"
              _hover={{
                bgColor: "var(--foreground)",
                color: "var(--link-hover)",
              }}
              transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
            >
              <Icon boxSize="1.5rem">
                <MdComputer />
              </Icon>
            </Flex>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content zIndex={"banner"} bgColor="var(--link-hover)">
                <Popover.Body color="var(--background)">
                  <Popover.Title fontWeight="medium">
                    About The Dev
                  </Popover.Title>
                  <Text>
                    Gabriela Nirmal created this website with React, Typescript,
                    & Chakra UI
                  </Text>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
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
            Marxism consectetur pour-over, taiyaki etsy eiusmod paleo narwhal
            non offal tattooed. Mukbang chicharrones af gochujang palo santo
            poutine tousled gorpcore iPhone taxidermy lyft.
            <br />
            <br />
            Wolf messenger bag four dollar toast pinterest live-edge excepteur
            VHS stumptown af art party distillery raw denim id artisan. Kombucha
            selvage freegan laborum kitsch DIY food truck pork belly. Austin
            deserunt edison bulb whatever, iceland banjo in. Godard af quis,
            vice ugh shaman 8-bit laboris jianbing.
          </Text>
          <ContactLinks mt="6" />
        </Flex>
      </Grid>
    </>
  );
}
