import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function EssenceOfBoston() {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
      templateRows={{ base: "auto 1fr", md: "repeat(3, 1fr)" }}
      paddingTop="62px"
      h="100vh"
      px={{ base: "10", md: "30px" }}
      gap="30px"
    >
      <GridItem
        colSpan={{ base: 1, md: 1 }}
        rowSpan={{ base: 1, md: 3 }}
        display="flex"
        flexDirection="column"
        gap="20px"
        pt="20px"
      >
        <Flex flexDirection="column">
          <Heading size="2xl" letterSpacing="wide" fontWeight="500">
            ESSENCE OF BOSTON
          </Heading>
          <Text as="p" textStyle="2xl" fontStyle="italic">
            2025 | Book
          </Text>
        </Flex>

        <Text as="p" textStyle="md">
          A pamphlet documenting the distinct smells of Boston through a
          cohesive, repeating design system. Every visual decision appears at
          least twice across the pages, creating consistency throughout, while
          experimental typography is woven into the layout as a recurring design
          element.
        </Text>
      </GridItem>

      <GridItem
        colSpan={{ base: 1, md: 4 }}
        rowSpan={{ base: 1, md: 3 }}
        mt={{ base: "0", md: "-2" }}
        h={{ base: "50vh", md: "100%" }}
      >
        <iframe
          allowFullScreen={true}
          allow="clipboard-write"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/c3ecf00031.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "auto",
          }}
        ></iframe>
      </GridItem>
    </Grid>
  );
}
