import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Sketchbook() {
  return (
    <>
      <Box
        position="relative"
        h="100vh"
        paddingTop="62px"
        px={{ base: "10", md: "30px" }}
      >
        <Flex justifyContent="space-between" pb="15px" py="20px" gap="100px">
          <Heading size="2xl" letterSpacing="wide" fontWeight="500">
            SKETCHBOOK OF LANDSCAPE STUDIES AND SEMI-RELEVANT THOUGHTS AND
            ANECDOTES
          </Heading>
          <Text as="p" textStyle="2xl" fontStyle="italic">
            2025
          </Text>
        </Flex>

        <Text as="p" textStyle="md">
          A personal travel sketchbook documenting significant places through
          hand-drawn landscape studies paired with short written reflections.
          Typography is used experimentally throughout, with page numbers and
          location headings treated as compositional elements that accent rather
          than compete with the drawings.
        </Text>
        <iframe
          allowFullScreen={true}
          allow="clipboard-write"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/0d1c23cf02.html"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </Box>
    </>
  );
}
