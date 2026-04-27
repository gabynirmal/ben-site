"use client";

import { ChakraProvider, defaultSystem, ClientOnly } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ClientOnly>
        <ColorModeProvider {...props} />
      </ClientOnly>
    </ChakraProvider>
  );
}
