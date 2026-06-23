"use client";

import { Grid, GridItem, Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import MasonryItem from "./MasonryItem";
import Description from "../description/Description";
import { useState, useRef, useEffect } from "react";

const ROW_HEIGHT = 10;

export default function Masonry({
  db,
  folder,
  projectInfo,
}: {
  db: any[];
  folder: string;
  projectInfo?: any;
}) {
  const gallerySpacing = "30px";
  const descRef = useRef<HTMLDivElement>(null);
  const [rowSpan, setRowSpan] = useState(45);

  useEffect(() => {
    if (!descRef.current) return;

    const calculate = () => {
      const height = descRef.current!.getBoundingClientRect().height;
      setRowSpan(Math.ceil(height / ROW_HEIGHT) + 2);
    };

    calculate();

    const observer = new ResizeObserver(calculate);
    observer.observe(descRef.current);
    return () => observer.disconnect();
  }, [projectInfo]);

  return (
    <Box>
      <Grid
        pt={gallerySpacing}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        columnGap={gallerySpacing}
        autoRows={`${ROW_HEIGHT}px`}
      >
        {projectInfo && (
          <GridItem colSpan={2} rowSpan={rowSpan}>
            <Box ref={descRef} pr={gallerySpacing}>
              <Description db={projectInfo} location={projectInfo.location} />
            </Box>
          </GridItem>
        )}
        {db.map((project) => (
          <MasonryItem
            key={project.image}
            colSpan={project.colSpan}
            link={project.link}
          >
            <Box
              position="relative"
              overflow="hidden"
              _hover={{ "& .overlay": { opacity: 1 } }}
              css={{ breakInside: "avoid" }}
            >
              <Image
                src={`/${folder}/${project.image}`}
                alt={project.alt}
                width={900}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {project.title !== undefined && (
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
    </Box>
  );
}
