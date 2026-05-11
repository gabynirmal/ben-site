import { Flex, Text, Icon, Popover, Portal } from "@chakra-ui/react";
import { MdComputer } from "react-icons/md";
import Image from "next/image";

export default function AboutDev() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Flex
          zIndex="tooltip"
          position="fixed"
          bottom="20px"
          right="20px"
          alignItems="center"
          justifyContent="center"
          boxSize="40px"
          borderRadius="full"
          bgColor="var(--link-hover)"
          overflow="hidden"
          css={{
            "& img": {
              transition: "filter 0.2s ease-in-out",
            },
            "&:hover img": {
              filter: "brightness(0.9)",
            },
          }}
          transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
        >
          <img
            src="/dev/GNSage.png"
            alt="Gabriela Nirmal Logo"
            width={40}
            height={40}
            style={{ pointerEvents: "none" }}
          />
        </Flex>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content zIndex={"tooltip"} bgColor="#afaf9d">
            <Popover.Body color="var(--background)">
              <Popover.Title fontWeight="medium">About The Dev</Popover.Title>
              <Text>
                Gabriela Nirmal created this website with React, Typescript, &
                Chakra UI
              </Text>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
