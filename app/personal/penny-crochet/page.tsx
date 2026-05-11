import Masonry from "@/components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../../data";
import Link from "next/link";

export default function PennyCrochet() {
  const personal = db.personal;
  const thisProject = personal.find(
    (p) => p.link === "/personal/penny-crochet",
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
          <GridItem colSpan={1} rowSpan={3}>
            <Flex justifyContent="space-between" pb="15px">
              <Heading size="2xl">Crochet Flower Crown</Heading>
              <Text as="p" textStyle="2xl" fontStyle="italic">
                2023 | Crochet
              </Text>
            </Flex>

            <Text as="p" textStyle="xl">
              Tahini shakshuka tarot pull, tumeric hella sambas orange wine.
              Post-ironic thundercats supper club, garum whatever bikepacking
              live-edge echo park red light therapy blundstones. Organic kitsch
              thrifted air plant duck fat. Leggings health goth crochet van
              life. Indigo dye feeld vaporware biodynamic birkenstocks unicorn.
              Gatekeep blackbird spyplane marxism listening bar.
            </Text>
          </GridItem>
          <GridItem rowSpan={3} position="relative">
            <Image
              src="/personal/penny-crochet/Pennyfront.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Pennyfront"
              loading="eager"
            />
          </GridItem>{" "}
          <GridItem rowSpan={3} position="relative">
            <Image
              src="/personal/penny-crochet/pennyleft1.png"
              fill
              style={{ objectFit: "cover" }}
              alt="pennyleft1"
              loading="eager"
            />
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Masonry db={thisProject?.gallery ?? []} folder="personal" />
      </Box>
    </>
  );
}
