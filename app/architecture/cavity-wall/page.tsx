import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function CavityWall() {
  return (
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
        gap={{ base: "16px", md: "0" }}
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
              MASONRY CAVITY WALL
            </Heading>
            <Text
              as="p"
              textStyle={{ base: "lg", md: "2xl" }}
              fontStyle="italic"
              flexShrink={0}
            >
              2026
            </Text>
          </Flex>

          <Text as="p" textStyle="md">
            A technical construction document detailing a two-story brick veneer
            cavity wall system from foundation footing to green roof parapet,
            drawn at 3/4&quot; = 1&apos;-0&quot; scale. The section documents
            the full building envelope assembly, including a waterproofed
            concrete foundation, two floors with distinct structural systems and
            interior finishes, and a sedum green roof, with an emphasis on
            drafting clarity, line weight hierarchy, and precise dimensioning.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 1, md: 3 }}
          colSpan={{ base: 1, md: 2 }}
          overflow="auto"
        >
          <Image
            src="/architecture/cavity-wall/FinalCavityWall.png"
            alt="Masonry Cavity Wall Drawing"
            loading="eager"
            width={900}
            height={900}
            style={{ width: "100%", height: "auto", marginLeft: "auto" }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
