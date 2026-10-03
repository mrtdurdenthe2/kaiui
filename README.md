# kaiui

This repository is the source of truth for Kai Wilson's UI style.

The written guide is in [docs/style-guide.md](docs/style-guide.md). The component reference is this site: the shadcn/ui component section, with each component rendered as a working example.

## Run

```bash
npm install
npm run dev
```

Open the local URL Vite prints. The gallery starts at `/components`.

## Type

The gallery uses Inter, the only family in the style guide. The shadcn nova preset ships Geist. Inter does not fight the components, so Geist is not used.

Component size, weight, and radius follow the shadcn nova components. The guide's 15px floor, three-size limit, and 24px radius fight those components, so the components keep the shadcn metrics.
