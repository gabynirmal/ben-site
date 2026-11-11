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
      <Box
        position="relative"
        h={{ base: "auto", md: "100dvh" }}
        style={{ paddingTop: "62px" }}
      >
        <Grid
          id="bs-arch-chinatown-bathroom"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          templateRows={{ base: "auto", md: "repeat(4, 1fr)" }}
          py="20px"
          px={{ base: "4", md: "30px" }}
          gap={{ base: "16px", md: "30px" }}
          h={{ base: "auto", md: "100%" }}
          w="100%"
        >
          <GridItem
            position="relative"
            colSpan={1}
            rowSpan={{ base: 1, md: 2 }}
            h={{ base: "220px", md: "auto" }}
            order={{ base: 2, md: 0 }}
          >
            <Image
              src="/architecture/bpl-bathroom/BathroomPerspective.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="BathroomPerspective"
              loading="eager"
            />
          </GridItem>
          <GridItem
            position="relative"
            colSpan={1}
            rowSpan={{ base: 1, md: 2 }}
            h={{ base: "220px", md: "auto" }}
            order={{ base: 3, md: 0 }}
          >
            <Image
              src="/architecture/bpl-bathroom/BathroomPerspective3.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="BathroomPerspective3"
              loading="eager"
            />
          </GridItem>
          <GridItem
            rowSpan={{ base: 1, md: 4 }}
            position="relative"
            h={{ base: "280px", md: "auto" }}
            order={{ base: 4, md: 0 }}
          >
            <Image
              src="/architecture/bpl-bathroom/BathroomPerspective2.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="BathroomPerspective2"
              loading="eager"
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            rowSpan={{ base: 1, md: 2 }}
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
                THE CHINATOWN BACKYARD
              </Heading>
              <Text
                as="p"
                textStyle={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                flexShrink={0}
              >
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

          <GridItem
            position="relative"
            rowSpan={{ base: 1, md: 2 }}
            colSpan={{ base: 1, md: 2 }}
            display={{ base: "none", md: "block" }}
          />
        </Grid>
      </Box>

      <Box>
        <GalleryMasonry db={thisProject?.gallery} folder="architecture" />
      </Box>
    </>
  );
}
