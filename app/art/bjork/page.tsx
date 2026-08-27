import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Bjork() {
  return (
    <>
      <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
        <Grid
          id="bs-art-cloud-crochet"
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
                BJORK VECTOR ART
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2023 | Graphic Design
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              A practice exercise in Adobe Illustrator recreating Björk's iconic
              Post album cover using only the pen tool, as a study in vector
              illustration and precision drafting.
            </Text>
          </GridItem>
          <GridItem position="relative" colSpan={3} rowSpan={2} overflow="auto">
            <Image
              src="/art/bjork/Homework3VectorArt.png"
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
