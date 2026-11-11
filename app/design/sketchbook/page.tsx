import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";

export default function Sketchbook() {
  return (
    <Box
      position="relative"
      h={{ base: "auto", md: "100dvh" }}
      style={{ paddingTop: "62px" }}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        templateRows={{ base: "auto", md: "repeat(3, 1fr)" }}
        h={{ base: "auto", md: "calc(100dvh - 62px)" }}
        px={{ base: "4", md: "30px" }}
        py="20px"
        gap={{ base: "16px", md: "30px" }}
      >
        <GridItem display="flex" flexDirection="column" gap="20px">
          <Flex flexDirection="column" gap={{ base: "4px", md: "0" }}>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              letterSpacing="wide"
              fontWeight="500"
              color="var(--emphasis)"
            >
              SKETCHBOOK OF LANDSCAPE STUDIES AND SEMI-RELEVANT THOUGHTS AND
              ANECDOTES
            </Heading>
            <Text
              as="p"
              textStyle={{ base: "lg", md: "2xl" }}
              fontStyle="italic"
            >
              2025 | Book
            </Text>
          </Flex>

          <Text as="p" textStyle="md">
            A personal travel sketchbook documenting significant places through
            hand-drawn landscape studies paired with short written reflections.
            Typography is used experimentally throughout, with page numbers and
            location headings treated as compositional elements that accent
            rather than compete with the drawings.
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 4 }}
          rowSpan={{ base: 1, md: 3 }}
          h={{ base: "65dvh", md: "auto" }}
          minH={{ base: "420px", md: "0" }}
        >
          <iframe
            allowFullScreen={true}
            allow="clipboard-write"
            className="fp-iframe"
            title="Sketchbook flipbook"
            src="https://heyzine.com/flip-book/0d1c23cf02.html"
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
