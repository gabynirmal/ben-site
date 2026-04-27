import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import ContactLinks from "./ContactLinks";

export default function About() {
  return (
    <>
      {/* Background Image */}
      <Flex position="absolute" top="0" left="0" w="100vw" h="100vh">
        <Image
          src="/photography/IMG_4243.JPG"
          alt="Image of Benjamin Smith on Mount Olympus"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
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
        <Flex flexDirection="column" pb="20px" justifyContent="flex-end">
          <Text as="p" textStyle="2xl" color="var(--background)">
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
