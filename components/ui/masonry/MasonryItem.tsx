"use client";

import { useState, useRef, useEffect } from "react";
import { GridItem } from "@chakra-ui/react";

export default function MasonryItem({
  children,
  colSpan = 1,
}: {
  children: React.ReactNode;
  colSpan?: number;
}) {
  const [rowSpan, setRowSpan] = useState(1);
  const ROW_HEIGHT = 10;
  const GAP = 30;
  const itemRef = useRef<HTMLDivElement>(null);

  const calculateSpan = () => {
    if (itemRef.current) {
      const height = itemRef.current.getBoundingClientRect().height;
      setRowSpan(Math.ceil((height + GAP) / ROW_HEIGHT));
    }
  };

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    // Wait for all images inside to load
    const images = el.querySelectorAll("img");
    let loaded = 0;
    if (images.length === 0) {
      calculateSpan();
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) calculateSpan();
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) calculateSpan();
        });
      }
    });

    const observer = new ResizeObserver(calculateSpan);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <GridItem rowSpan={rowSpan} colSpan={colSpan}>
      <div ref={itemRef}>{children}</div>
    </GridItem>
  );
}
