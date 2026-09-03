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

type GalleryItem = {
  image: string;
  alt: string;
  colSpan?: number;
  link?: string;
  title?: string;
};

export default function GalleryMasonry({
  db,
  folder,
}: {
  db?: any;
  folder: string;
}) {
  const gallerySpacing = "30px";
  const [index, setIndex] = useState(-1);

  const groups = useMemo<[string, GalleryItem[]][]>(() => {
    if (!db || Array.isArray(db)) return [];
    return Object.entries(db).filter(
      (entry): entry is [string, GalleryItem[]] => Array.isArray(entry[1]),
    );
  }, [db]);
  const { flatItems, groupOffsets } = useMemo(() => {
    let offset = 0;
    const offsets: number[] = [];
    const flat: GalleryItem[] = [];
    groups.forEach(([, items]) => {
      offsets.push(offset);
      flat.push(...items);
      offset += items.length;
    });
    return { flatItems: flat, groupOffsets: offsets };
  }, [groups]);

  const masonrySlides = useMemo(
    () =>
      flatItems.map((project) => ({
        src: `/${folder}/${project.image}`,
        alt: project.alt,
      })),
    [flatItems, folder],
  );

  if (groups.length === 0) return null;

  return (
    <Box pb={gallerySpacing} p={gallerySpacing}>
      {groups.map(([groupName, items], groupIdx) => (
        <Box key={groupName} pt={groupIdx > 0 ? "30px" : ""}>
          <Heading size="lg" fontWeight={500} textTransform="uppercase">
            {groupName.replace(/([A-Z])/g, " $1")}
          </Heading>

          <Grid
            pt={"15px"}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            columnGap={gallerySpacing}
            autoRows="10px"
            rowGap="0px"
          >
            {items.map((project, i) => {
              const globalIndex = groupOffsets[groupIdx] + i;
              return (
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
                      ...(!project?.link && { transform: "scale(1.06)" }),
                    }}
                    css={{ breakInside: "avoid" }}
                    onClick={
                      !project?.link ? () => setIndex(globalIndex) : undefined
                    }
                    cursor={!project?.link ? "pointer" : undefined}
                  >
                    <Image
                      src={`/${folder}/${project.image}`}
                      alt={project.alt}
                      width={900}
                      height={900}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </Box>
                </MasonryItem>
              );
            })}
          </Grid>
        </Box>
      ))}

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
    </Box>
  );
}
