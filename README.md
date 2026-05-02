# katonazoli.hu

Personal brand site for Katona Zoli — Hotel Tech & Guest Journey Specialist.

Built with Next.js 16 (App Router), Tailwind CSS v4, and Resend for the contact form. White + deep-teal accent, with a black hero band that matches the portrait's background.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts + global metadata
│   ├── page.tsx          # composes the single-page sections
│   ├── globals.css       # theme tokens (colors, fonts)
│   └── api/contact/      # contact form endpoint (Resend)
└── components/
    ├── Hero.tsx
    ├── Mission.tsx
    ├── Vision.tsx
    ├── About.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Things to do before going live

1. **Drop your portrait photo at `public/portrait.jpg`** (the hero references this path).
2. **Edit the About section** in `src/components/About.tsx` with your real bio.
3. **Tweak the Mission and Vision** in their components — they're a starting draft.
4. **Set up Resend** for the contact form:
   - Copy `.env.example` to `.env.local`
   - Get an API key at https://resend.com/api-keys
   - For sending from your own domain, verify `katonazoli.hu` in Resend
5. **Deploy to Vercel**: `vercel --prod` (or connect the repo at vercel.com).
6. **Point the domain**: in Vercel, add `katonazoli.hu` as a custom domain and update DNS.

## Theme tokens

Defined in `src/app/globals.css`:

- `bg-background` `#FFFFFF` — pure white
- `text-foreground` `#0F0F0F` — near-black
- `bg-accent` / `text-accent` `#0E5C68` — deep teal
- `text-muted` `#6B6B6B`
- `border-line` `#ECECEC`
- `bg-hero-bg` `#0A0A0A` / `text-hero-fg` `#FAF7F2` — black hero band tokens
- `font-display` Instrument Serif (headings)
- `font-sans` Inter (body)

The hero (`Hero.tsx`) uses a black band that mirrors the portrait's dark background. The portrait is composited with `mix-blend-mode: lighten` and a radial mask so dark pixels merge into the black and the face appears to float in it.
