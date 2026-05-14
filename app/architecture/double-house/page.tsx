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
          templateRows="repeat(3, 1fr)"
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
              This compound explores the concept of multi-family living by
              designing two distinct homes around the personalities and needs of
              their occupants — a solitary astronomer and a pair of twins.{" "}
              <br />
              <br />
              The Astronomer's House comfortably fits a single resident across
              two floors. The ground level contains a kitchenette, living room,
              office, and full and half bathrooms, while the top floor functions
              as both a primary bedroom and a personal observatory. The
              observatory volume rotates around the central stair core, allowing
              the astronomer to track any part of the night sky. When rotated,
              it opens onto a rooftop terrace above the first floor.
              <br />
              <br /> The Twin House is organized around a single governing idea:
              perfect bilateral symmetry. The double-height foyer announces this
              immediately upon entry, dramatizing the two separate but mirrored
              paths of circulation through the home. The ground floor holds a
              kitchen, living and dining room, and a private sunken garden at
              the rear, oriented north to favor plants that thrive in indirect
              light. Upstairs, the two bedrooms are exactly symmetrical, meeting
              at a shared bathroom at the end of the hall. Though there was
              space for two, a single shared bathroom felt more true to the
              spirit of the house.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Masonry db={thisProject?.gallery ?? []} folder="architecture" />
      </Box>
    </>
  );
}
