import Masonry from "../../../components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import { FaMapPin } from "react-icons/fa";
import Link from "next/link";

export default function MahlerPoster() {
  const design = db.design;
  const thisProject = design.find((p) => p.link === "/design/mahler-poster");

  return (
    <>
      <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
        <Grid
          id="bs-arch-chinatown-library"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(4, 1fr)"
          py="20px"
          px={{ base: "10", md: "30px" }}
          gap="30px"
          h="100%"
          w="100%"
        >
          <GridItem position="relative" rowSpan={4} colSpan={2}>
            <Image
              src="/design/mahler-poster/MahlerPoster3.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Library Top Floor View"
              loading="eager"
            />
          </GridItem>

          <GridItem position="relative" rowSpan={1}>
            <Image
              src="/architecture/bpl-library/LibrarySiteEntranceRender.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Library Site Entrance Render"
              loading="eager"
            />
          </GridItem>

          <GridItem colSpan={2} rowSpan={2}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl" letterSpacing="wide" fontWeight="500">
                MAHLER POSTER
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2025 | Graphic Design
              </Text>
            </Flex>
            <Link
              href="https://maps.app.goo.gl/gPTHGG1vK18dAT6E8?g_st=i&utm_campaign=ac-im"
              target="_blank"
            ></Link>
            <Text as="p" textStyle="md">
              An event poster for the Boston Symphony Orchestra balancing bold
              typography, imagery, and a considered grid layout.
            </Text>
          </GridItem>

          <GridItem colSpan={2} />
        </Grid>
      </Box>

      <Box pb="50px">
        <Masonry db={thisProject?.gallery ?? []} folder="architecture" />
      </Box>
    </>
  );
}
