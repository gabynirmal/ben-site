"use client";

import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PennyCrochet() {
  const [mainImage, setMainImage] = useState("Pennyfront.png");
  const [pageLoaded, setPageLoaded] = useState(false);
  const images = [
    "Pennyfront.png",
    "pennyleft1.png",
    "pennyleft2.png",
    "Pennyright1.png",
    "Pennyright2.png",
  ];

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <Box
      position="relative"
      h={{ base: "auto", md: "100dvh" }}
      style={{ paddingTop: "62px" }}
    >
      <style>{`
          @keyframes scalePop {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}</style>

      <Grid
        id="bs-art-penny-crochet"
        templateColumns={{
          base: "1fr",
          md: "repeat(6, minmax(0, 1fr))",
        }}
        templateRows={{ base: "auto", md: "minmax(0, 1fr)" }}
        py="20px"
        px={{ base: "4", md: "30px" }}
        gap={{ base: "16px", md: "30px" }}
        h={{ base: "auto", md: "100%" }}
        w="100%"
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap={{ base: "4px", md: "16px" }}
            pb="15px"
          >
            <Heading
              size={{ base: "xl", md: "2xl" }}
              letterSpacing="wide"
              fontWeight="500"
              color="var(--emphasis)"
            >
              CROCHET FLOWER CROWN
            </Heading>
            <Text
              as="p"
              textStyle={{ base: "lg", md: "2xl" }}
              fontStyle="italic"
              flexShrink={0}
            >
              2023 | Crochet
            </Text>
          </Flex>
          <Text as="p" textStyle="md" pb="30px">
            A custom crocheted snood designed and made for my dog Penny. The
            project required drafting an original pattern fitted to her head,
            then separately constructing and attaching the bouquet of flowers
            and vines, about 30 hours of work in total. She wore it awkwardly.
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(5, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            }}
            gap={{ base: "10px", md: "20px" }}
          >
            {images.map((img, i) => (
              <Box
                key={img}
                position="relative"
                aspectRatio={1}
                transition="transform 0.3s ease-in-out, opacity 0.2s ease-in-out"
                animation={pageLoaded ? "scalePop 0.6s ease-in-out" : "none"}
                animationDelay={`${i * 200}ms`}
                animationFillMode="both"
                opacity={mainImage === img ? 1 : 0.7}
                _hover={{ transform: "scale(1.1)", opacity: 1 }}
                _active={{ transform: "scale(1.05)", opacity: 1 }}
              >
                <Image
                  src={`/art/penny-crochet/${img}`}
                  fill
                  style={{ objectFit: "contain", cursor: "pointer" }}
                  alt="Penny crochet thumbnail"
                  loading="eager"
                  onClick={() => setMainImage(img)}
                />
              </Box>
            ))}
          </Grid>
        </GridItem>

        <GridItem
          position="relative"
          colSpan={{ base: 1, md: 4 }}
          h={{ base: "360px", md: "auto" }}
          minH={{ base: "360px", md: "0" }}
        >
          <Image
            src={`/art/penny-crochet/${mainImage}`}
            fill
            style={{ objectFit: "contain" }}
            alt="Penny crochet large"
            loading="eager"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
