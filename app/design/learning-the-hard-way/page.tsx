import { Flex, Heading, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function LearningTheHardWay() {
  return (
    <Box
      position="relative"
      h={{ base: "auto", md: "100dvh" }}
      style={{ paddingTop: "62px" }}
    >
      <Grid
        h={{ base: "auto", md: "100%" }}
        py="20px"
        px={{ base: "4", md: "30px" }}
        gap={{ base: "16px", md: "30px" }}
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        templateRows={{ base: "auto", md: "repeat(3, 1fr)" }}
      >
        <GridItem display="flex" flexDirection="column" gap="20px">
          <Flex flexDirection="column" gap={{ base: "4px", md: "0" }}>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              letterSpacing="wide"
              fontWeight="500"
              color="var(--emphasis)"
            >
              LEARNING THE HARD WAY
            </Heading>
            <Text
              as="p"
              textStyle={{ base: "lg", md: "2xl" }}
              fontStyle="italic"
            >
              2026 | Magazine Spread
            </Text>
          </Flex>

          <Text as="p" textStyle="md">
            An editorial spread for Northeastern&apos;s student and faculty
            design magazine exploring the personal and collective implications
            of AI in academic settings. The piece reflects on how AI tools shape
            and potentially diminish the world&apos;s shared body of knowledge.
            A threshold image of myself overlaid with an ASCII rendering of the
            same portrait visualizes the blurring boundary between human and
            machine authorship.
          </Text>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, md: 4 }}
          rowSpan={{ base: 1, md: 3 }}
          pb="20px"
          position="relative"
          h={{ base: "280px", md: "auto" }}
          minH={{ base: "280px", md: "0" }}
        >
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
