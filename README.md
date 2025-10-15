# Radix UI & shadcn/ui Documentation Processor

This project processes and combines documentation from Radix UI and shadcn/ui sources, making them more accessible for LLM processing.

## Copyright Notice

All documentation content processed by this tool is the intellectual property of their respective owners:
- Radix UI documentation © Radix UI and contributors
- shadcn/ui documentation © shadcn and contributors

This project merely serves as a processing tool and does not claim any ownership of the content.

For the original documentation and license information, please visit:
- https://github.com/radix-ui/website
- https://github.com/shadcn/ui

## Features

- Processes and combines multiple documentation sources:
  - Radix UI documentation (Primitives, Colors, Themes)
  - shadcn/ui documentation and component examples
- Uses [yek](https://github.com/bodo-run/yek) for efficient file processing
- Calculates token counts for LLM processing

## Prerequisites

- Node.js 23
- pnpm
- [yek](https://github.com/bodo-run/yek) - A fast Rust-based tool for serializing text files

## Installation

1. Clone the repository:
```bash
git clone https://github.com/xesrevinu/radix-ui-contents-llm.git
cd radix-ui-contents-llm
```

2. Install dependencies:
```bash
pnpm install
```

3. Install yek:
```bash
# Unix-like Systems (macOS, Linux)
curl -fsSL https://bodo.run/yek.sh | bash
```

## Usage

Build all documentation:
```bash
pnpm run build
```

This will:
1. Process documentation from all sources
2. Generate statistics
3. Update this README with current statistics

<!-- STATS_START -->
## Documentation Statistics

### Summary

- Total Files: 8
- Total Size: 3.05 MB
- Total Tokens: 767,692

#### radix-docs

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/radix-docs.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/radix-docs.txt) | 466 kB | 124,161 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/radix-docs.txt) |

#### radix-colors

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/radix-colors.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/radix-colors.txt) | 43.9 kB | 12,367 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/radix-colors.txt) |

#### radix-themes

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/radix-themes.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/radix-themes.txt) | 286 kB | 77,900 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/radix-themes.txt) |

#### shadcn-docs

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/shadcn-docs.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/shadcn-docs.txt) | 376 kB | 113,042 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/shadcn-docs.txt) |

#### shadcn-components

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/shadcn-components.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/shadcn-components.txt) | 1.17 MB | 272,255 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/shadcn-components.txt) |

#### shadcn-blocks

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/shadcn-blocks.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/shadcn-blocks.txt) | 308 kB | 71,470 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/shadcn-blocks.txt) |

#### shadcn-charts

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/shadcn-charts.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/shadcn-charts.txt) | 208 kB | 52,849 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/shadcn-charts.txt) |

#### shadcn-examples

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/shadcn-examples.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/shadcn-examples.txt) | 187 kB | 43,648 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/shadcn-examples.txt) |


<!-- STATS_END -->

## Project Structure

```
radix-ui-contents-llm/
├── src/                 # Source code
│   └── process.ts      # Main processing logic
├── output/             # Processed documentation
├── sources/            # Documentation sources (submodules)
│   ├── radix-website/  # Radix UI website
│   └── shadcn-ui/      # shadcn/ui website and components
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Special thanks to:

The Radix UI team and community for their incredible work on Radix UI and its comprehensive documentation

## License

The processing tool is MIT licensed.

All documentation content remains under their original licenses and is owned by their respective copyright holders.
