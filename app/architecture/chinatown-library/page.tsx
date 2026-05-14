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
              This library was designed to address a critical challenge facing
              lower-income immigrant urban communities: the lack of green space
              and tree canopy. Green space is essential to the physical and
              mental health of urban residents, providing cooling relief in
              dense neighborhoods during summer heat, and offering third spaces
              for gathering and socializing.
              <br />
              <br />
              The design extends the adjacent pocket park, One Greenway Park, by
              dedicating the majority of the lot to open parkland and
              concentrating the building footprint in the upper left corner of
              the site, growing vertically rather than outward. Midway up the
              building, an outdoor green terrace divides the program into two
              zones: the active ground floors housing a café, lecture hall, and
              children's section, and the quieter upper floors reserved for the
              main collection and reading areas.
              <br />
              <br />
              The structure is built almost entirely from Cross-laminated timber
              and glass, with concrete used only for the two cores anchored on
              either side of the central opening, housing the elevators and
              bathrooms. To maximize spatial efficiency, every wall and railing
              is lined with stacked bookshelves set behind UV-protective glass,
              unifying the interior storage system with the building's facade of
              clean, continuous horizontal lines.
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
