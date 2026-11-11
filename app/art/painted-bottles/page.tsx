import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function PaintedBottles() {
  return (
    <>
      <Box
        position="relative"
        h={{ base: "auto", md: "100dvh" }}
        style={{ paddingTop: "62px" }}
      >
        <Grid
          id="bs-arch-chinatown-library"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          templateRows={{ base: "auto", md: "repeat(3, 1fr)" }}
          py="20px"
          px={{ base: "4", md: "30px" }}
          gap={{ base: "16px", md: "30px" }}
          h={{ base: "auto", md: "100%" }}
          w="100%"
        >
          <GridItem rowSpan={{ base: 1, md: 3 }}>
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
                PAINTED BOTTLES
              </Heading>
              <Text
                as="p"
                textStyle={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                flexShrink={0}
              >
                2023 | Painting
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              A personal still life painting in acrylic depicting two glass
              bottles with projected color, heavily inspired by the work of
              Janet Fish.
            </Text>
          </GridItem>
          <GridItem
            rowSpan={{ base: 1, md: 3 }}
            colSpan={{ base: 1, md: 2 }}
            overflow="auto"
          >
            <Image
              src="/art/bottles/BottlesPainting.jpeg"
              alt="Painted Bottles"
              loading="eager"
              width={900}
              height={900}
              style={{ width: "100%", height: "auto", marginLeft: "auto" }}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
