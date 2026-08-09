"use client";

import { Grid, Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import MasonryItem from "./MasonryItem";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useMemo, useState } from "react";

export default function Masonry({ db, folder }: { db: any[]; folder: string }) {
  const gallerySpacing = "30px";
  const [index, setIndex] = useState(-1);

  const masonrySlides = useMemo(
    () =>
      db.map((project) => ({
        src: `/${folder}/${project.image}`,
        alt: project.alt,
      })),
    [db, folder],
  );

  return (
    <>
      <Grid
        p={gallerySpacing}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        columnGap={gallerySpacing}
        autoRows="10px"
        rowGap="0px"
      >
        {db.map((project, i) => (
          <MasonryItem
            key={project.image}
            colSpan={project.colSpan}
            link={project.link}
          >
            <Box
              position="relative"
              transform="scale(1)"
              transition="transform 0.4s ease-out"
              _hover={{
                "& .overlay": { opacity: 1 },
                ...(!project?.link && {
                  transform: "scale(1.06)",
                }),
              }}
              css={{ breakInside: "avoid" }}
              onClick={!project?.link ? () => setIndex(i) : undefined}
              cursor={!project?.link ? "pointer" : undefined}
            >
              <Image
                src={`/${folder}/${project.image}`}
                alt={project.alt}
                width={900}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
              />

              {project?.title && (
                <Box
                  className="overlay"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="blackAlpha.600"
                  opacity={0}
                  transition="opacity 0.3s ease"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  zIndex={1}
                >
                  <Heading
                    size="2xl"
                    fontWeight={500}
                    letterSpacing="wide"
                    color="white"
                    textAlign="center"
                    p="20px"
                  >
                    {project.title}
                  </Heading>
                </Box>
              )}
            </Box>
          </MasonryItem>
        ))}
      </Grid>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={masonrySlides}
        plugins={[Thumbnails, Zoom]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 60,
          imageFit: "contain",
          vignette: false,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .9)" },
          thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, .9)" },
        }}
      />
    </>
  );
}
