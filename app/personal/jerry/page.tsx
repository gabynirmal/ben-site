import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Jerry() {
  return (
    <>
      <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
        <Grid
          id="bs-personal-cloud-crochet"
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(2, 1fr)"
          py="20px"
          px={{ base: "10", md: "30px" }}
          gap="30px"
          h="100%"
          w="100%"
        >
          <GridItem colSpan={2} rowSpan={2}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl" letterSpacing="wide" fontWeight="500">
                JERRY GARCIA TAPESTRY
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2025 | Crochet
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              My most ambitious crochet project to date, a pixel art tapestry of
              Jerry Garcia, lead guitarist of the Grateful Dead, spanning nearly
              four feet wide and totaling over 90 hours of work across two
              years. After completing the piece, I tie-dyed the white background
              in true Grateful Dead fashion.
            </Text>
          </GridItem>
          <GridItem position="relative" colSpan={3} rowSpan={2} overflow="auto">
            <Image
              src="/personal/jerry/JerryGarciaTapestry.png"
              width={900}
              height={900}
              style={{ marginLeft: "auto" }}
              alt="clouds"
              loading="eager"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
