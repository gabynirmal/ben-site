import Masonry from "@/components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import { FaMapPin } from "react-icons/fa";
import Link from "next/link";

export default function CavityWall() {
  const architecture = db.architecture;
  const thisProject = architecture.find(
    (p) => p.link === "/architecture/chinatown-library",
  );

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
              <Heading size="2xl">Masonry Wall Cavity</Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2026
              </Text>
            </Flex>

            <Text as="p" textStyle="xl">
              A technical construction document detailing a two-story brick
              veneer cavity wall system from foundation footing to green roof
              parapet, drawn at 3/4" = 1'-0" scale. The section documents the
              full building envelope assembly, including a waterproofed concrete
              foundation, two floors with distinct structural systems and
              interior finishes, and a sedum green roof, with an emphasis on
              drafting clarity, line weight hierarchy, and precise dimensioning.
            </Text>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2} overflow="auto">
            <Image
              src="/architecture/cavity-wall/FinalCavityWall.png"
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
