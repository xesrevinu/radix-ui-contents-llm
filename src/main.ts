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
  {
    name: "shadcn-ui",
    url: "https://github.com/shadcn/ui.git",
    resources: [
      {
        name: "shadcn-docs",
        include: "apps/www/content/docs/**/*.mdx",
      },
      {
        name: "shadcn-components",
        include: "apps/www/registry/default/**/*.tsx",
      },
      {
        name: "shadcn-blocks",
        include: "apps/www/registry/default/blocks/**/*.tsx",
      },
      {
        name: "shadcn-charts",
        include: "apps/www/registry/default/charts/**/*.tsx",
      },
      {
        name: "shadcn-examples",
        include: "apps/www/registry/default/examples/**/*.tsx",
      },
    ],
  },
];

run(SOURCES).catch(console.error);
