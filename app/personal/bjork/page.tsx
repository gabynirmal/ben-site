import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Bjork() {
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
              <Heading size="2xl">Bjork Vector Art</Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2023 | Graphic Design
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
          <GridItem position="relative" colSpan={3} rowSpan={2} overflow="auto">
            <Image
              src="/personal/bjork/Homework3VectorArt.png"
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
