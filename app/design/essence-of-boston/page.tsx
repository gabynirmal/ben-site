import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function EssenceOfBoston() {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(3, 1fr)"
      paddingTop="62px"
      h="100vh"
      px={{ base: "10", md: "30px" }}
    >
      <GridItem>
        <Flex justifyContent="space-between" pb="15px" py="20px" gap="100px">
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
      <GridItem colSpan={4} rowSpan={3} mt="-2">
        <iframe
          allowFullScreen={true}
          allow="clipboard-write"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/c3ecf00031.html"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </GridItem>
    </Grid>
  );
}
