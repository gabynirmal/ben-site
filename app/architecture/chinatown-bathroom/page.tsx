import GalleryMasonry from "@/components/ui/masonry/GalleryMasonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import { FaMapPin } from "react-icons/fa";
import Link from "next/link";

export default function ChinatownBathroom() {
  const architecture = db.architecture;
  const thisProject = architecture.find(
    (p) => p.link === "/architecture/chinatown-bathroom",
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
          <GridItem position="relative" colSpan={1} rowSpan={2}>
            {" "}
            <Image
              src="/architecture/bpl-bathroom/BathroomPerspective.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="BathroomPerspective"
              loading="eager"
            />
          </GridItem>
          <GridItem position="relative" colSpan={1} rowSpan={2}>
            {" "}
            <Image
              src="/architecture/bpl-bathroom/BathroomPerspective3.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="BathroomPerspective3"
              loading="eager"
            />
          </GridItem>
          <GridItem rowSpan={4} position="relative">
            <Image
              src="/architecture/bpl-bathroom/BathroomPerspective2.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="BathroomPerspective2"
              loading="eager"
            />
          </GridItem>
          <GridItem colSpan={2} rowSpan={2}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl" letterSpacing="wide" fontWeight="500">
                THE CHINATOWN BACKYARD
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2026 | Public Bathroom & Community Garden
              </Text>
            </Flex>
            <Link
              href="https://maps.app.goo.gl/P7J1p7ck8cX9CxF37?g_st=i&utm_campaign=ac-im"
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
            <Text as="p" textStyle="md">
              Chinatown Backyard is a free, publicly funded community garden
              where residents can socialize, learn about local plants and
              ecosystems, and access public restrooms without any obligation to
              spend money.
              <br />
              <br />
              The two restroom structures are wrapped in stacked, curving panels
              that act as privacy screens angled so that occupants can see out,
              but passersby cannot see in. The front face of each structure is
              clad in glass brick, and a glass-and-steel dome crowns the roof,
              keeping users connected to the sky overhead.
              <br />
              <br />
              S-shaped dividers wrap around the two structures, continuing the
              language of the curving screen while guiding the flow of visitors
              across the site, linking the two structures and mediating movement
              from one side of the garden to the other.
            </Text>
          </GridItem>

          <GridItem position="relative" rowSpan={2} colSpan={2} />
        </Grid>
      </Box>

      <Box>
        <GalleryMasonry db={thisProject?.gallery} folder="architecture" />
      </Box>
    </>
  );
}
