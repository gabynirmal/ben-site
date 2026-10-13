import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function OlmstedPamphlet() {
  return (
    <>
      <Box
        position="relative"
        w="100%"
        px={{ base: "10", md: "30px" }}
        style={{ paddingTop: "62px" }}
      >
        {/* Top Section: Locked to 100vh (minus navbar offset) */}
        <Grid
          id="bs-design-olmsted-pamphlet"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="30px"
          w="100%"
          h={{ base: "auto", md: "calc(100vh - 62px)" }}
          py="20px"
        >
          <GridItem colSpan={1} h="100%" display="flex" flexDirection="column">
            <Flex direction="column" gap="15px" pb="15px">
              <Heading
                size="2xl"
                letterSpacing="wide"
                fontWeight="500"
                color="var(--emphasis)"
              >
                FREDERICK LAW OLMSTED PARK PAMPHLET
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2026 | Z-Fold Pamphlet
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              A double-sided pamphlet exploring two of Frederick Olmsted's most
              celebrated works. One side covers Central Park, the other the
              Emerald Necklace, and when fully unfolded, the sheet reveals a
              larger informational spread on Olmsted himself. Careful attention
              was given to grid-based layout and compositional balance
              throughout, down to details like the "New York" header cropped
              slightly off the page edge to draw the reader inward.
            </Text>
          </GridItem>

          <GridItem
            position="relative"
            colSpan={2}
            h={{ base: "400px", md: "100%" }}
          >
            <Image
              src="/design/olmsted-pamphlet/leafletfolds.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Folded Leaflet"
              loading="eager"
            />
          </GridItem>
        </Grid>

        {/* Bottom Section: Stacked Full-Width Images (Appears below the fold on scroll) */}
        <Flex direction="column" gap="30px" w="100%" py="40px">
          <Box w="100%">
            <Image
              src="/design/olmsted-pamphlet/LeafletFinalback.png"
              width={1920} // Put the original image width here (or an arbitrary large width)
              height={1080} // Put the original image height here
              style={{ width: "100%", height: "auto" }} // Scale to full width while maintaining natural height
              alt="Olmsted Boston"
              loading="eager"
            />
          </Box>
          <Box w="100%">
            <Image
              src="/design/olmsted-pamphlet/LeafletFinalback.png"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
              alt="Olmsted Boston"
              loading="eager"
            />
          </Box>
          <Box w="100%">
            <Image
              src="/design/olmsted-pamphlet/LeafletFinalback.png"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
              alt="Olmsted Boston"
              loading="eager"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
