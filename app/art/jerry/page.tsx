import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Jerry() {
  return (
    <>
      <Box
        position="relative"
        h={{ base: "auto", md: "100dvh" }}
        style={{ paddingTop: "62px" }}
      >
        <Grid
          id="bs-art-cloud-crochet"
          templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
          templateRows={{ base: "auto", md: "repeat(2, 1fr)" }}
          py="20px"
          px={{ base: "4", md: "30px" }}
          gap={{ base: "16px", md: "30px" }}
          h={{ base: "auto", md: "100%" }}
          w="100%"
        >
          <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 1, md: 2 }}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
              gap={{ base: "4px", md: "16px" }}
              pb="15px"
            >
              <Heading
                size={{ base: "xl", md: "2xl" }}
                letterSpacing="wide"
                fontWeight="500"
                color="var(--emphasis)"
              >
                JERRY GARCIA TAPESTRY
              </Heading>
              <Text
                as="p"
                textStyle={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                flexShrink={0}
              >
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
          <GridItem
            position="relative"
            colSpan={{ base: 1, md: 3 }}
            rowSpan={{ base: 1, md: 2 }}
            overflow="auto"
          >
            <Image
              src="/art/jerry/JerryGarciaTapestry.png"
              width={900}
              height={900}
              style={{ width: "100%", height: "auto", marginLeft: "auto" }}
              alt="Jerry Garcia tapestry"
              loading="eager"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
