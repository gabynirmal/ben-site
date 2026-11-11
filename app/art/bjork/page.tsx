import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Bjork() {
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
                BJORK VECTOR ART
              </Heading>
              <Text
                as="p"
                textStyle={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                flexShrink={0}
              >
                2023 | Graphic Design
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              A practice exercise in Adobe Illustrator recreating Björk&apos;s
              iconic Post album cover using only the pen tool, as a study in
              vector illustration and precision drafting.
            </Text>
          </GridItem>
          <GridItem
            position="relative"
            colSpan={{ base: 1, md: 3 }}
            rowSpan={{ base: 1, md: 2 }}
            overflow="auto"
          >
            <Image
              src="/art/bjork/Homework3VectorArt.png"
              width={900}
              height={900}
              style={{ width: "100%", height: "auto", marginLeft: "auto" }}
              alt="Bjork vector art"
              loading="eager"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
