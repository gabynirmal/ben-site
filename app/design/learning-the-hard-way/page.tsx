import { Flex, Heading, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function LearningTheHardWay() {
  return (
    <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
      <Grid
        h="100%"
        py="20px"
        px={{ base: "10", md: "30px" }}
        gap="30px"
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <GridItem display="flex" flexDirection="column" gap="20px">
          <Flex flexDirection="column">
            <Heading
              size="2xl"
              letterSpacing="wide"
              fontWeight="500"
              color="var(--emphasis)"
            >
              LEARNING THE HARD WAY
            </Heading>
            <Text as="p" textStyle="2xl" fontStyle="italic">
              2026 | Magazine Spread
            </Text>
          </Flex>

          <Text as="p" textStyle="md">
            An editorial spread for Northeastern's student and faculty design
            magazine exploring the personal and collective implications of AI in
            academic settings. The piece reflects on how AI tools shape and
            potentially diminish the world's shared body of knowledge. A
            threshold image of myself overlaid with an ASCII rendering of the
            same portrait visualizes the blurring boundary between human and
            machine authorship.
          </Text>
        </GridItem>

        <GridItem colSpan={4} rowSpan={3} pb="20px" position="relative">
          <Image
            src="/design/learning-the-hard-way/fullSpread.png"
            alt="Learning The Hard Way Full Spread"
            fill
            style={{ objectFit: "contain" }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
