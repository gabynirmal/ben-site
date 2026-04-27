import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";

export default function Design() {
  const design = db.design;
  const gallerySpacing = "30px";
  return (
    <>
      {/* Header Image */}
      <Flex
        id="bs-home"
        position="absolute"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
      >
        <Image
          src="/design/learning-the-hard-way/duotoneFace.png"
          alt="Photoshopped Image of Ben Smith"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          loading="eager"
        />
        <Image
          src="/design/learning-the-hard-way/duotoneFaceNoBackground.png"
          alt="Photoshopped Image of Ben Smith"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
            zIndex: "50",
            pointerEvents: "none",
          }}
          loading="eager"
        />
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Box
        p={gallerySpacing}
        css={{
          columnCount: 3,
          columnGap: gallerySpacing,
        }}
      >
        {design.map((project) => (
          <Box
            position="relative"
            overflow="hidden"
            _hover={{ "& .overlay": { opacity: 1 } }}
            key={project.link}
            mb={gallerySpacing}
            css={{ breakInside: "avoid" }}
          >
            <Image
              src={`/design/${project.image}`}
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
              <Heading size="2xl" color="white" textAlign="center" p="20px">
                {project.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
