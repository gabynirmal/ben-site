import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function CloudCrochet() {
  return (
    <>
      <Box position="relative" h="100vh">
        <Grid
          id="bs-personal-cloud-crochet"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(4, 1fr)"
          paddingBottom="20px"
          px={{ base: "10", md: "30px" }}
          gap="30px"
          h="100%"
          w="100%"
        >
          <GridItem position="relative" colSpan={4} rowSpan={3}>
            <Image
              src="/personal/cloud-crochet/cloudnoback.png"
              fill
              style={{ objectFit: "cover" }}
              alt="clouds"
              loading="eager"
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl" letterSpacing="wide" fontWeight="500">
                EYES OF THE WORLD
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2023 | Crochet
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              A crocheted interpretation of the Grateful Dead song of the same
              name, constructed as a surrealist and psychedelic piece. The
              project required developing an original pattern for perfectly
              round forms and multi-colored eyes, totaling over 20 hours of
              work.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
