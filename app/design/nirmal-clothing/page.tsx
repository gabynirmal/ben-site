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
    <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
      <style>{`
        @keyframes scalePop {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>

      <Grid
        id="bs-design-nirmal-clothing"
        templateColumns="repeat(6, minmax(0, 1fr))" // rows can shrink to fit available space
        templateRows="repeat(3, minmax(0, 1fr))" // rows can shrink to fit available space
        py="20px"
        px={{ base: "10", md: "30px" }}
        gap="30px"
        h="100%"
        w="100%"
      >
        {logos.map((logo, i) => (
          <GridItem
            key={logo}
            display="flex"
            transition="transform 0.3s ease-in-out, scale 0.3s ease-in-out"
            animation={pageLoaded ? "scalePop 0.6s ease-in-out" : "none"}
            animationDelay={`${i * 200}ms`}
            animationFillMode="both"
            _hover={{ scale: 1.1 }}
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

        <GridItem colSpan={2}>
          <Flex justifyContent="space-between" pb="15px">
            <Heading size="2xl" letterSpacing="wide" fontWeight="500">
              NIRMAL CLOTHING
            </Heading>
            <Text as="p" textStyle="2xl" fontStyle="italic">
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

        <GridItem position="relative" colSpan={4} rowSpan={4}>
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
