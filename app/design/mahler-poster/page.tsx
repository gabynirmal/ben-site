"use client";

import { Grid, GridItem, Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface MahlerPosterItemProps {
  poster: string;
  i: number;
  pageLoaded: boolean;
  setMainImage: (poster: string) => void;
  isActive: boolean;
}

const MahlerPosterItem = ({
  poster,
  i,
  pageLoaded,
  setMainImage,
  isActive,
}: MahlerPosterItemProps) => {
  return (
    <Box
      transition="transform 0.3s ease-in-out, opacity 0.2s ease-in-out"
      style={{
        animation: pageLoaded
          ? `scalePop 0.6s ease-in-out ${i * 150}ms`
          : "none",
      }}
      opacity={isActive ? 1 : 0.7}
      _hover={{ transform: "scale(1.1)", opacity: 1 }}
      _active={{ transform: "scale(1.05)", opacity: 1 }}
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
    <Box
      position="relative"
      h={{ base: "auto", md: "100dvh" }}
      style={{ paddingTop: "62px" }}
    >
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
        templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
        templateRows={{ base: "auto", md: "repeat(4, 1fr)" }}
        py="20px"
        px={{ base: "4", md: "30px" }}
        gap={{ base: "16px", md: "30px" }}
        h={{ base: "auto", md: "100%" }}
        w="100%"
      >
        <GridItem colSpan={{ base: 1, md: 6 }} order={{ base: 3, md: 0 }}>
          <Grid
            templateColumns={{
              base: "repeat(4, 1fr)",
              md: "repeat(6, 1fr)",
            }}
            gap={{ base: "10px", md: "30px" }}
            alignItems="start"
          >
            {posters.map((poster, i) => (
              <MahlerPosterItem
                key={poster}
                poster={poster}
                i={i}
                pageLoaded={pageLoaded}
                setMainImage={setMainImage}
                isActive={mainImage === poster}
              />
            ))}
          </Grid>
        </GridItem>

        <GridItem
          position="relative"
          colSpan={{ base: 1, md: 6 }}
          rowSpan={{ base: 1, md: 4 }}
          h={{ base: "420px", md: "auto" }}
          minH={{ base: "420px", md: "0" }}
          order={{ base: 2, md: 0 }}
        >
          <Image
            src={`/design/mahler-poster/${mainImage}`}
            fill
            style={{ objectFit: "contain" }}
            alt="Mahler Poster Large"
            loading="eager"
            unoptimized
          />
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 4 }} order={{ base: 1, md: 0 }}>
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
              MAHLER POSTER
            </Heading>
            <Text
              as="p"
              textStyle={{ base: "lg", md: "2xl" }}
              fontStyle="italic"
              flexShrink={0}
            >
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
