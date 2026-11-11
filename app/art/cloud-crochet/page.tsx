import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function CloudCrochet() {
  return (
    <>
      <Box
        position="relative"
        h={{ base: "auto", md: "100dvh" }}
        style={{ paddingTop: "62px" }}
      >
        <Grid
          id="bs-art-cloud-crochet"
          templateRows={{ base: "auto", md: "repeat(4, 1fr)" }}
          pb="20px"
          px={{ base: "4", md: "30px" }}
          gap={{ base: "16px", md: "30px" }}
          h={{ base: "auto", md: "calc(100dvh - 62px)" }}
          w="100%"
        >
          <GridItem
            rowSpan={{ base: 1, md: 3 }}
            h={{ base: "320px", md: "auto" }}
            minH={{ base: "320px", md: "0" }}
          >
            <Box position="relative" h="100%" w="100%">
              <Image
                src="/art/cloud-crochet/cloudnoback.png"
                alt="clouds"
                fill
                style={{ objectFit: "contain" }}
                loading="eager"
              />
            </Box>
          </GridItem>
          <GridItem rowSpan={1}>
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
                EYES OF THE WORLD
              </Heading>
              <Text
                as="p"
                textStyle={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                flexShrink={0}
              >
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
