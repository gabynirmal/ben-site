"use client";

import { Grid, GridItem, Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface MahlerPosterItemProps {
  poster: string;
  i: number;
  pageLoaded: boolean;
  setMainImage: (poster: string) => void;
}

const MahlerPosterItem = ({
  poster,
  i,
  pageLoaded,
  setMainImage,
}: MahlerPosterItemProps) => {
  return (
    <Box
      transition="transform 0.3s ease-in-out"
      style={{
        animation: pageLoaded
          ? `scalePop 0.6s ease-in-out ${i * 150}ms`
          : "none",
      }}
      _hover={{ transform: "scale(1.1)" }}
    >
      <Image
        src={`/design/mahler-poster/${poster}`}
        width={900}
        height={900}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          cursor: "pointer",
        }}
        alt="Mahler Poster"
        loading="eager"
        onClick={() => setMainImage(poster)}
        unoptimized
      />
    </Box>
  );
};

export default function MahlerPoster() {
  const [mainImage, setMainImage] = useState("MahlerPoster3.jpg");
  const [pageLoaded, setPageLoaded] = useState(false);
  const posters = [
    "MahlerPoster.jpg",
    "MahlerPoster2.jpg",
    "MahlerPoster3.jpg",
    "MahlerPoster4.jpg",
    "MahlerPoster5.jpg",
    "MahlerPoster6.jpg",
    "MahlerPoster7.jpg",
    "MahlerPoster8.jpg",
    "MahlerPoster9.jpg",
    "MahlerPoster10.jpg",
    "MahlerPoster11.jpg",
    "MahlerPoster12.jpg",
  ];

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <Box position="relative" h="100vh" style={{ paddingTop: "62px" }}>
      <style jsx global>{`
        @keyframes scalePop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      <Grid
        id="bs-design-mahler-poster"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(4, 1fr)"
        py="20px"
        px={{ base: "10", md: "30px" }}
        gap="30px"
        h="100%"
        w="100%"
      >
        <GridItem colSpan={6}>
          <Grid templateColumns="repeat(6, 1fr)" gap="30px" alignItems="start">
            {posters.map((poster, i) => (
              <MahlerPosterItem
                key={poster}
                poster={poster}
                i={i}
                pageLoaded={pageLoaded}
                setMainImage={setMainImage}
              />
            ))}
          </Grid>
        </GridItem>

        <GridItem position="relative" colSpan={6} rowSpan={4}>
          <Image
            src={`/design/mahler-poster/${mainImage}`}
            fill
            style={{ objectFit: "contain" }}
            alt="Mahler Poster Large"
            loading="eager"
            unoptimized
          />
        </GridItem>

        <GridItem colSpan={4}>
          <Flex justifyContent="space-between" pb="15px">
            <Heading size="2xl" letterSpacing="wide" fontWeight="500">
              MAHLER POSTER
            </Heading>
            <Text as="p" textStyle="2xl" fontStyle="italic">
              2026 | Poster
            </Text>
          </Flex>
          <Text as="p" textStyle="md">
            An event poster for the Boston Symphony Orchestra balancing bold
            typography, imagery, and a considered grid layout.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
