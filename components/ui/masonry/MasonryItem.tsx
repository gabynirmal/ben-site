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
  const [visible, setVisible] = useState(false);
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

    const images = el.querySelectorAll("img");
    let loaded = 0;
    if (images.length === 0) {
      calculateSpan();
    } else {
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
    }

    const resizeObserver = new ResizeObserver(calculateSpan);
    resizeObserver.observe(el);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          intersectionObserver.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    intersectionObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <GridItem rowSpan={rowSpan} colSpan={colSpan}>
      <div
        ref={itemRef}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {children}
      </div>
    </GridItem>
  );
}
