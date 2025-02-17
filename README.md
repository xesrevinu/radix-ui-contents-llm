# Radix UI Documentation Processor

This project processes and combines documentation from various Radix UI sources, making them more accessible for LLM processing.

## Copyright Notice

All documentation content processed by this tool is the intellectual property of Radix UI and its contributors. This project merely serves as a processing tool and does not claim any ownership of the content.

For the original documentation and license information, please visit:
- https://github.com/radix-ui/website
- https://github.com/radix-ui/primitives

## Features

- Processes and combines multiple documentation sources:
  - Official Radix UI documentation from the website
  - Primitives documentation
  - Colors and Themes documentation
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

- Total Files: 3
- Total Size: 772 kB
- Total Tokens: 208,079

#### radix-docs

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/radix-docs.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/radix-docs.txt) | 443 kB | 118,159 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/radix-docs.txt) |

#### radix-colors

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/radix-colors.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/radix-colors.txt) | 43.8 kB | 12,324 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/radix-colors.txt) |

#### radix-themes

| File | Size | Tokens | Raw |
| --- | --- | --- | --- |
| [output/radix-themes.txt](https://github.com/xesrevinu/radix-ui-contents-llm/blob/main/output/radix-themes.txt) | 285 kB | 77,596 | [Raw](https://raw.githubusercontent.com/xesrevinu/radix-ui-contents-llm/main/output/radix-themes.txt) |


<!-- STATS_END -->

## Project Structure

```
radix-ui-contents-llm/
├── src/                 # Source code
│   └── process.ts      # Main processing logic
├── output/             # Processed documentation
├── sources/            # Documentation sources (submodules)
│   ├── website/       # Radix UI website
│   └── primitives/    # Radix UI primitives
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
