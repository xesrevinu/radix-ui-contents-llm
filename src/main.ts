import { run } from "./process.ts";
import type { RemoteSource } from "./types.ts";

const SOURCES: RemoteSource[] = [
  {
    name: "radix-website",
    url: "https://github.com/radix-ui/website.git",
    resources: [
      {
        name: "radix-docs",
        include: "data/primitives/docs/**/*.mdx",
      },
      {
        name: "radix-colors",
        include: "data/colors/docs/**/*.mdx",
      },
      {
        name: "radix-themes",
        include: "data/themes/docs/**/*.mdx",
      },
    ],
  },
];

run(SOURCES).catch(console.error);
