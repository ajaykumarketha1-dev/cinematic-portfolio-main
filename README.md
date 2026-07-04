# Shaik Abdulla — Cinematic Portfolio

A cinematic Next.js portfolio for Shaik Abdulla, Senior AEM Developer, focused on AEM Sites, AEM Forms, AEM Cloud Service migrations, and enterprise integrations.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Main content files

- `data/profile.json` - profile, experience, projects, links, and skills
- `data/content.json` - section labels, hero pills, and footer copy
- `public/assets/hero-portrait.png` - hero portrait (generated placeholder)
- `public/assets/about-portrait.png` - about section portrait (generated placeholder)
- `public/assets/footer-portrait.jpg` / `footer-mobile.jpg` - footer portraits (generated placeholders)
- `public/assets/about_me.mp4` / `footer-video.mp4` - looping ambient video (generated placeholders)

## Swapping in real photos/video

The portrait and video assets above are generated abstract placeholders (no real or fake photo of a person). To use real photos/video:

1. Replace the files in `public/assets/` with the same filenames, or
2. Update the `src` paths in `components/sections/HeroSection.jsx`, `AboutSection.jsx`, `PublicationsFooterSection.jsx`, and `VideoIntro.jsx`.

## Socials

`data/profile.json` currently has placeholder LinkedIn/GitHub URLs — update the `socials` array with real profile links before publishing.
