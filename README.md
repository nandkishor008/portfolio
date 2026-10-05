# Nandkishor Kumar Pandit — Premium 3D Portfolio

A multi-page React + Vite portfolio with a premium dark visual system, React Three Fiber 3D scene, Framer Motion transitions, auto-sliding featured projects, responsive navigation and data-driven content.

## Pages

- `/` Home
- `/about`
- `/projects`
- `/projects/:slug`
- `/skills`
- `/experience`
- `/coding`
- `/freelance`
- `/contact`

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Build

```bash
npm run build
npm run preview
```

## Update your portfolio

Most content lives in:

- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/content.js`

Add internship details and certifications in `src/data/content.js` when you are ready. No page redesign is required.

## Resume

Place your final PDF at `public/resume.pdf` to activate the resume path in the profile data.

## Notes

The current version intentionally does not invent the name of your online internship or certification names because those details were not supplied. The UI is ready for them.


## Profile image

Add your photo as:

`public/profile.jpg`

The About page already has the professional profile-image frame and will automatically use the image. Until you add it, the site shows an intentional NK placeholder instead of a broken image.

## Theme

The visual system uses a deep black / burgundy / red palette with warm red lighting, software-engineering 3D terminal/monitor visuals, premium glass cards and restrained motion.


## Visual refinement V2

This version includes the full cinematic refinement in one build:

- software-engineering 3D workstation / code environment
- orbiting system architecture nodes
- cinematic hero HUD
- role auto-rotation
- page-to-page Framer Motion transitions
- premium product dashboard previews in project cards
- larger featured project treatment
- system architecture section on project detail pages
- process / engineering workflow section
- real-screenshot-ready folder: `public/project-screens/`

The product previews are intentionally original UI mockups, not fake "screenshots" of your deployed apps. When actual screenshots are available, they can be added to the screenshot folder without changing the overall design.


## Hero V4

The hero has been rebuilt around a software-architecture visualization rather than a generic monitor:
- central rotating API/server core
- UI / API / AUTH / DB / CLOUD / GIT nodes
- connected architecture lines
- moving data packets
- rotating system rings
- red/burgundy engineering lighting
- no floating HUD/card collisions

The hero copy is intentionally more descriptive and explains Nandkishor’s engineering focus, stack, current learning/internship status and problem-solving direction.
