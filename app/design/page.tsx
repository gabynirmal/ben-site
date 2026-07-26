"use client";

import { Flex, IconButton, Icon } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import Masonry from "@/components/ui/masonry/Masonry";
import { TypeAnimation } from "react-type-animation";
import { FaChevronDown } from "react-icons/fa6";

export default function Design() {
  const design = db.design;
  const repeated = Array.from({ length: 1500 }).fill("DESIGN ").join("");
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
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
          loading="eager"
        />

        {/* Top left — types forward */}
        <TypeAnimation
          sequence={[repeated, 99999999]}
          speed={99}
          style={{
            fontSize: "16px",
            color: "var(--emphasis)",
            lineHeight: "1.4",
            letterSpacing: "2px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            position: "absolute",
            left: 0,
            width: "100%",
            top: "62px",
            height: "calc(100% - 62px)",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 10,
          }}
          cursor={false}
        />

        <Image
          src="/design/learning-the-hard-way/duotoneFaceNoBackground.png"
          alt="Photoshopped Image of Ben Smith"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
            zIndex: "60",
            pointerEvents: "none",
          }}
        />

        {/* Down Arrow Button */}
        <Flex
          position="absolute"
          bottom="10px"
          w="100%"
          justifyContent="center"
          zIndex={70}
        >
          <a href="#bs-masonry">
            <IconButton
              bg="transparent"
              color={"var(--foreground)"}
              _hover={{ color: "var(--link-hover)" }}
              aria-label="Scroll to projects"
            >
              <Icon boxSize="2rem">
                <FaChevronDown />
              </Icon>
            </IconButton>
          </a>
        </Flex>
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Flex id="bs-masonry">
        <Masonry db={design} folder="design" />
      </Flex>
    </>
  );
}
