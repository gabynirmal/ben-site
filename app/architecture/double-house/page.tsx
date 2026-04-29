import Masonry from "@/components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import Link from "next/link";

export default function DoubleHouse() {
  const architecture = db.architecture;
  const thisProject = architecture.find(
    (p) => p.link === "/architecture/double-house",
  );

  return (
    <>
      <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
        <Grid
          id="bs-arch-chinatown-bathroom"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(4, 1fr)"
          py="20px"
          px={{ base: "10", md: "30px" }}
          gap="30px"
          h="100%"
          w="100%"
        >
          <GridItem position="relative" rowSpan={2} colSpan={2}>
            <Image
              src="/architecture/double-house/FinalRefinedDHDrawings-10.png"
              fill
              style={{ objectFit: "cover", objectPosition: "center 10%" }}
              alt="Library Site Plan"
              loading="eager"
            />
          </GridItem>

          <GridItem rowSpan={3} position="relative">
            <Image
              src="/architecture/double-house/FinalRefinedDHDrawings-06.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Library Site Plan"
              loading="eager"
            />
          </GridItem>

          <GridItem colSpan={2}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl">The Compound</Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2025 | Double House
              </Text>
            </Flex>
            <Link
              href="https://maps.app.goo.gl/P7J1p7ck8cX9CxF37?g_st=i&utm_campaign=ac-im"
              target="_blank"
            ></Link>
            <Text as="p" textStyle="xl">
              Tahini shakshuka tarot pull, tumeric hella sambas orange wine.
              Post-ironic thundercats supper club, garum whatever bikepacking
              live-edge echo park red light therapy blundstones. Organic kitsch
              thrifted air plant duck fat. Leggings health goth crochet van
              life. Indigo dye feeld vaporware biodynamic birkenstocks unicorn.
              Gatekeep blackbird spyplane marxism listening bar.
            </Text>
          </GridItem>

          <GridItem colSpan={2} />
        </Grid>

        {/* Elevation anchored to bottom of this section */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="100%"
          h="100%"
          pointerEvents="none"
          zIndex="banner"
        >
          <Image
            src="/architecture/bpl-library/LibraryElevationDiagramNoBack.png"
            fill
            alt="Library Elevation Diagram"
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            loading="eager"
          />
        </Box>
      </Box>

      <Box pb="165px">
        <Masonry db={thisProject?.gallery ?? []} folder="architecture" />
      </Box>
    </>
  );
}
