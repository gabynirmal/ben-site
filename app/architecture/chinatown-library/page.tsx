import GalleryMasonry from "@/components/ui/masonry/GalleryMasonry";
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
      <Box
        position="relative"
        w="100%"
        pt={{ base: "70px", md: "82px" }} // Safe spacing below your header
        pb="40px"
      >
        <Grid
          id="bs-arch-chinatown-library"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          templateRows={{ base: "auto", md: "repeat(4, minmax(0, 1fr))" }}
          px={{ base: "4", md: "30px" }}
          gap={{ base: "16px", md: "30px" }}
          w="100%"
        >
          {/* Image 1 */}
          <GridItem
            position="relative"
            h={{ base: "220px", md: "auto" }}
            minH={{ md: "150px" }}
            order={{ base: 2, md: 0 }}
            overflow="hidden"
            borderRadius="sm"
          >
            <Image
              src="/architecture/bpl-library/LibraryTopFloorView.png"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              alt="Library Top Floor View"
              loading="eager"
            />
          </GridItem>

          {/* Image 2 */}
          <GridItem
            position="relative"
            h={{ base: "220px", md: "auto" }}
            minH={{ md: "150px" }}
            order={{ base: 3, md: 0 }}
            overflow="hidden"
            borderRadius="sm"
          >
            <Image
              src="/architecture/bpl-library/LibrarySiteEntranceRender.png"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              alt="Library Site Entrance Render"
              loading="eager"
            />
          </GridItem>

          {/* Image 3 */}
          <GridItem
            position="relative"
            h={{ base: "260px", md: "auto" }}
            rowSpan={{ base: 1, md: 4 }}
            order={{ base: 4, md: 0 }}
            overflow="hidden"
            borderRadius="sm"
          >
            <Image
              src="/architecture/bpl-library/LibrarySitePlan.png"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              alt="Library Site Plan"
              loading="eager"
            />
          </GridItem>

          {/* Text Content */}
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            rowSpan={{ base: 1, md: 4 }}
            order={{ base: 1, md: 0 }}
          >
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
                THE STACKS: BOSTON CHINATOWN LIBRARY
              </Heading>
              <Text
                as="p"
                textStyle={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                flexShrink={0}
              >
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
                _active={{ color: "var(--link-hover)" }}
                transition="color 0.2s ease-in-out"
              >
                <FaMapPin />
                <Text
                  as="p"
                  textStyle={{ base: "md", md: "xl" }}
                  textDecoration="underline"
                  textDecorationThickness="1px"
                >
                  Chinatown, Boston, MA
                </Text>
              </Flex>
            </Link>
            <Text as="p" textStyle="md">
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
              children&apos;s section, and the quieter upper floors reserved for
              the main collection and reading areas.
              <br />
              <br />
              The structure is built almost entirely from Cross-laminated timber
              and glass, with concrete used only for the two cores anchored on
              either side of the central opening, housing the elevators and
              bathrooms. To maximize spatial efficiency, every wall and railing
              is lined with stacked bookshelves set behind UV-protective glass,
              unifying the interior storage system with the building&apos;s
              facade of clean, continuous horizontal lines.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <GalleryMasonry db={thisProject?.gallery} folder="architecture" />
    </>
  );
}
