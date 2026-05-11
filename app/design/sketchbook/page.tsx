import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Sketchbook() {
  return (
    <>
      <Box position="relative" h="100vh" paddingTop="62px">
        <iframe
          allowFullScreen={true}
          allow="clipboard-write"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/0d1c23cf02.html"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
        ;
      </Box>
    </>
  );
}
