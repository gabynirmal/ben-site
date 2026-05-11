import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function PaintedBottles() {
  return (
    <>
      <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
        <Grid
          id="bs-arch-chinatown-library"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          py="20px"
          px={{ base: "10", md: "30px" }}
          gap="30px"
          h="100%"
          w="100%"
        >
          <GridItem rowSpan={3}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl">Painted Bottles</Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2023 | Painting
              </Text>
            </Flex>

            <Text as="p" textStyle="xl">
              Tahini shakshuka tarot pull, tumeric hella sambas orange wine.
              Post-ironic thundercats supper club, garum whatever bikepacking
              live-edge echo park red light therapy blundstones. Organic kitsch
              thrifted air plant duck fat. Leggings health goth crochet van
              life. Indigo dye feeld vaporware biodynamic birkenstocks unicorn.
              Gatekeep blackbird spyplane marxism listening bar.
            </Text>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2} overflow="auto">
            <Image
              src="/personal/bottles/BottlesPainting.jpeg"
              alt="Library Site Plan"
              loading="eager"
              width={900}
              height={900}
              style={{ marginLeft: "auto" }}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
