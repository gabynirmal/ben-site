import Masonry from "@/components/ui/masonry/Masonry";
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
          <GridItem position="relative" colSpan={2}>
            {" "}
            <Flex
              h="100%"
              w="100"
              bgColor="var(--emphasis)"
              color="var(--background)"
              justifyContent="center"
              alignItems="center"
            >
              TBD
            </Flex>
          </GridItem>
          <GridItem rowSpan={3} position="relative">
            <Flex
              h="100%"
              w="100"
              bgColor="var(--emphasis)"
              color="var(--background)"
              justifyContent="center"
              alignItems="center"
            >
              TBD
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl">The Chinatown Backyard</Heading>
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
            <Text as="p" textStyle="xl">
              Tahini shakshuka tarot pull, tumeric hella sambas orange wine.
              Post-ironic thundercats supper club, garum whatever bikepacking
              live-edge echo park red light therapy blundstones. Organic kitsch
              thrifted air plant duck fat. Leggings health goth crochet van
              life. Indigo dye feeld vaporware biodynamic birkenstocks unicorn.
              Gatekeep blackbird spyplane marxism listening bar.
            </Text>
          </GridItem>

          <GridItem position="relative" rowSpan={2} colSpan={2} />
        </Grid>

        {/* Bathroom of this section */}
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
            src="/architecture/bpl-bathroom/NoBackbathroomFront.png"
            fill
            alt="Library Elevation Diagram"
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
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
