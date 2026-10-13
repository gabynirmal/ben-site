"use client";

import Masonry from "@/components/ui/masonry/Masonry";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as db from "../../data";

export default function PennyCrochet() {
  const art = db.art;
  const thisProject = art.find((p) => p.link === "/art/penny-crochet");

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
    <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
      <style>{`
          @keyframes scalePop {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}</style>

      <Grid
        id="bs-art-penny-crochet"
        templateColumns="repeat(6, minmax(0, 1fr))"
        templateRows="minmax(0, 1fr)"
        py="20px"
        px={{ base: "10", md: "30px" }}
        gap="30px"
        h="100%"
        w="100%"
      >
        <GridItem colSpan={2}>
          <Flex justifyContent="space-between" pb="15px">
            <Heading
              size="2xl"
              letterSpacing="wide"
              fontWeight="500"
              color="var(--emphasis)"
            >
              CROCHET FLOWER CROWN
            </Heading>
            <Text as="p" textStyle="2xl" fontStyle="italic">
              2023 | Crochet
            </Text>
          </Flex>
          <Text as="p" textStyle="md" pb="30px">
            A custom crocheted snood designed and made for my dog Penny. The
            project required drafting an original pattern fitted to her head,
            then separately constructing and attaching the bouquet of flowers
            and vines, about 30 hours of work in total. She wore it awkwardly.
          </Text>

          <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap="20px">
            {images.map((img, i) => (
              <Box
                key={img}
                position="relative"
                aspectRatio={1}
                transition="transform 0.3s ease-in-out, scale 0.3s ease-in-out"
                animation={pageLoaded ? "scalePop 0.6s ease-in-out" : "none"}
                animationDelay={`${i * 200}ms`}
                animationFillMode="both"
                _hover={{ scale: 1.1 }}
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

        <GridItem position="relative" colSpan={4}>
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
