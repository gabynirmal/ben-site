export type FeaturedProject = {
  title: string;
  image: string;
  link: string;
  alt: string;
  folder: "architecture" | "design" | "personal";
  colSpan?: number;
};

export const categoryLinks = [
  { label: "ARCHITECTURE", href: "/architecture" },
  { label: "DESIGN", href: "/design" },
  { label: "PERSONAL", href: "/personal" },
  { label: "ABOUT", href: "/about" },
] as const;
