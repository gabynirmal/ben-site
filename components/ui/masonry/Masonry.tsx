import { Grid, Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import MasonryItem from "./MasonryItem";

export default function Masonry({ db, folder }: { db: any[]; folder: string }) {
  const gallerySpacing = "30px";
  return (
    <Grid
      p={gallerySpacing}
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      columnGap={gallerySpacing}
      autoRows="10px"
      rowGap="0px"
    >
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

            {/* Dark overlay + title on hover */}
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
          </Box>
        </MasonryItem>
      ))}
    </Grid>
  );
}
