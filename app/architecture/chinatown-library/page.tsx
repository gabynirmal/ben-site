import Masonry from "@/components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import { FaMapPin } from "react-icons/fa";
import Link from "next/link";

export default function ChinatownLibrary() {
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
          templateRows="repeat(4, 1fr)"
          py="20px"
          px={{ base: "10", md: "30px" }}
          gap="30px"
          h="100%"
          w="100%"
        >
          <GridItem position="relative" rowSpan={2}>
            <Image
              src="/architecture/bpl-library/LibraryTopFloorView.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Library Top Floor View"
              loading="eager"
            />
          </GridItem>

          <GridItem position="relative" rowSpan={2}>
            <Image
              src="/architecture/bpl-library/LibrarySiteEntranceRender.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Library Site Entrance Render"
              loading="eager"
            />
          </GridItem>

          <GridItem rowSpan={3} position="relative">
            <Image
              src="/architecture/bpl-library/LibrarySitePlan.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Library Site Plan"
              loading="eager"
            />
          </GridItem>

          <GridItem colSpan={2}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl">The Stacks: Boston Chinatown Library</Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2026 | Library
              </Text>
            </Flex>
            <Link
              href="https://maps.app.goo.gl/gPTHGG1vK18dAT6E8?g_st=i&utm_campaign=ac-im"
              target="_blank"
            >
              <Flex
                gap="6px"
                pb="15px"
                alignItems="center"
                color="var(--foreground)"
                _hover={{ color: "var(--link-hover)" }}
              >
                <FaMapPin />
                <Text
                  as="p"
                  textStyle="xl"
                  textDecoration="underline"
                  textDecorationThickness="1px"
                >
                  Chinatown, Boston, MA
                </Text>
              </Flex>
            </Link>
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
            loading="eager"
            style={{ objectFit: "contain", objectPosition: "bottom" }}
          />
        </Box>
      </Box>

      <Box pb="165px">
        <Masonry db={thisProject?.gallery ?? []} folder="architecture" />
      </Box>
    </>
  );
}
