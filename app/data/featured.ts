import { architecture, design, personal } from "./index";

export type FeaturedProject = {
  title: string;
  image: string;
  link: string;
  alt: string;
  folder: "architecture" | "design" | "personal";
  colSpan?: number;
};

export const featuredProjects: FeaturedProject[] = [
  {
    ...architecture[3],
    folder: "architecture",
  },
  {
    ...architecture[1],
    folder: "architecture",
  },
  {
    ...design[0],
    folder: "design",
    colSpan: 2,
  },
  {
    ...design[1],
    folder: "design",
  },
  {
    ...personal[4],
    folder: "personal",
  },
  {
    ...personal[0],
    folder: "personal",
  },
];

export const categoryLinks = [
  { label: "ARCHITECTURE", href: "/architecture" },
  { label: "DESIGN", href: "/design" },
  { label: "PERSONAL", href: "/personal" },
  { label: "ABOUT", href: "/about" },
] as const;
