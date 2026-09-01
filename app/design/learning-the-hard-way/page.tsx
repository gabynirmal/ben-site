import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function LearningTheHardWay() {
  return (
    <>
      <Flex
        direction="column"
        position="relative"
        paddingTop="62px"
        h="100vh"
        px={{ base: "10", md: "30px" }}
      >
        <Flex justifyContent="space-between" pb="15px" py="20px" gap="100px">
          <Heading size="2xl" letterSpacing="wide" fontWeight="500">
            LEARNING THE HARD WAY
          </Heading>
          <Text as="p" textStyle="2xl" fontStyle="italic">
            2025
          </Text>
        </Flex>

        <Text as="p" textStyle="md">
          An editorial spread for Northeastern's student and faculty design
          magazine exploring the personal and collective implications of AI in
          academic settings. The piece reflects on how AI tools shape and
          potentially diminish the world's shared body of knowledge. A threshold
          image of myself overlaid with an ASCII rendering of the same portrait
          visualizes the blurring boundary between human and machine authorship.
        </Text>

        <Box flex={1} py="10" minH="0" display="flex">
          <Box position="relative" w="100%">
            <Image
              src="/design/learning-the-hard-way/fullSpread.png"
              alt="Learning The Hard Way Full Spread"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
