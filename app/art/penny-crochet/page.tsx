import Masonry from "@/components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import Link from "next/link";

export default function PennyCrochet() {
  const art = db.art;
  const thisProject = art.find((p) => p.link === "/art/penny-crochet");

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
          <GridItem colSpan={1} rowSpan={3}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl" letterSpacing="wide" fontWeight="500">
                CROCHET FLOWER CROWN
              </Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2023 | Crochet
              </Text>
            </Flex>

            <Text as="p" textStyle="md">
              A custom crocheted snood designed and made for my dog Penny. The
              project required drafting an original pattern fitted to her head,
              then separately constructing and attaching the bouquet of flowers
              and vines, about 30 hours of work in total. She wore it awkwardly.
            </Text>
          </GridItem>
          <GridItem rowSpan={3} position="relative">
            <Image
              src="/art/penny-crochet/Pennyfront.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Pennyfront"
              loading="eager"
            />
          </GridItem>{" "}
          <GridItem rowSpan={3} position="relative">
            <Image
              src="/art/penny-crochet/pennyleft1.png"
              fill
              style={{ objectFit: "cover" }}
              alt="pennyleft1"
              loading="eager"
            />
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Masonry db={thisProject?.gallery ?? []} folder="art" />
      </Box>
    </>
  );
}
