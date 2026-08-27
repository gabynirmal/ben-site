export type FeaturedProject = {
  title: string;
  image: string;
  link: string;
  alt: string;
  folder: "architecture" | "design" | "art";
  colSpan?: number;
};

export const categoryLinks = [
  { label: "ARCHITECTURE", href: "/architecture" },
  { label: "DESIGN", href: "/design" },
  { label: "ART", href: "/art" },
  { label: "ABOUT", href: "/about" },
] as const;
