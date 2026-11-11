import { Flex, Text, Popover, Portal } from "@chakra-ui/react";
import Image from "next/image";

export default function AboutDev() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Flex
          cursor="pointer"
          zIndex="max"
          position="fixed"
          bottom="calc(20px + env(safe-area-inset-bottom, 0px))"
          right="calc(20px + env(safe-area-inset-right, 0px))"
          alignItems="center"
          justifyContent="center"
          boxSize={{ base: "36px", md: "40px" }}
          borderRadius="full"
          bgColor="var(--link-hover)"
          overflow="hidden"
          css={{
            "& img": {
              transition: "filter 0.2s ease-in-out",
            },
            "&:hover img, &:active img": {
              filter: "brightness(0.8)",
            },
          }}
          transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
        >
          <Image
            src="/design/nirmal-clothing/Asset 6@300x.png"
            alt="Gabriela Nirmal Logo"
            width={40}
            height={40}
            style={{ pointerEvents: "none" }}
          />
        </Flex>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content
            zIndex={"tooltip"}
            bgColor="var(--link-hover)"
            borderRadius="2xl"
            bg="rgba(200, 200, 200, 0.2)"
            backdropFilter="blur(6px)"
          >
            <Popover.Body>
              <Popover.Title fontWeight="medium" letterSpacing="wide">
                ABOUT THE DEV
              </Popover.Title>
              <Text>
                Gabriela Nirmal created this website using React, Typescript, &
                Chakra UI
              </Text>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
