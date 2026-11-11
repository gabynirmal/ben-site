"use client";

import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NirmalClothing() {
  const [mainImage, setMainImage] = useState("Asset 1@300x.png");
  const [pageLoaded, setPageLoaded] = useState(false);
  const logos = [
    "Asset 1@300x.png",
    "Asset 2@300x.png",
    "Asset 3@300x.png",
    "Asset 5@300x.png",
    "Asset 11@300x.png",
    "Asset 9@300x.png",
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
        id="bs-design-nirmal-clothing"
        templateColumns={{
          base: "repeat(3, minmax(0, 1fr))",
          md: "repeat(6, minmax(0, 1fr))",
        }}
        templateRows={{ base: "auto", md: "repeat(3, minmax(0, 1fr))" }}
        py="20px"
        px={{ base: "4", md: "30px" }}
        gap={{ base: "16px", md: "30px" }}
        h={{ base: "auto", md: "100%" }}
        w="100%"
      >
        {logos.map((logo, i) => (
          <GridItem
            key={logo}
            display="flex"
            transition="transform 0.3s ease-in-out, opacity 0.2s ease-in-out"
            animation={pageLoaded ? "scalePop 0.6s ease-in-out" : "none"}
            animationDelay={`${i * 200}ms`}
            animationFillMode="both"
            opacity={mainImage === logo ? 1 : 0.7}
            _hover={{ transform: "scale(1.1)", opacity: 1 }}
            _active={{ transform: "scale(1.05)", opacity: 1 }}
            order={{ base: 3, md: 0 }}
          >
            <Image
              src={`/design/nirmal-clothing/${logo}`}
              width={900}
              height={900}
              style={{
                objectFit: "contain",
                cursor: "pointer",
                clipPath: "circle(50%)",
              }}
              alt="Nirmal Clothing Logo"
              loading="eager"
              onClick={() => setMainImage(logo)}
            />
          </GridItem>
        ))}

        <GridItem colSpan={{ base: 3, md: 2 }} order={{ base: 1, md: 0 }}>
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
              NIRMAL CLOTHING
            </Heading>
            <Text
              as="p"
              textStyle={{ base: "lg", md: "2xl" }}
              fontStyle="italic"
              flexShrink={0}
            >
              2026 | Logo
            </Text>
          </Flex>
          <Text as="p" textStyle="md">
            A logo designed for a small crochet business and custom fashion
            brand, balancing simplicity and detail to remain legible at small
            scales like a social media profile picture while incorporating a
            crochet hook, needle, and thread.
          </Text>
        </GridItem>

        <GridItem
          position="relative"
          colSpan={{ base: 3, md: 4 }}
          rowSpan={{ base: 1, md: 4 }}
          h={{ base: "320px", md: "auto" }}
          minH={{ base: "320px", md: "0" }}
          order={{ base: 2, md: 0 }}
        >
          <Image
            src={`/design/nirmal-clothing/${mainImage}`}
            fill
            style={{ objectFit: "contain" }}
            alt="Nirmal Clothing Large Logo"
            loading="eager"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
