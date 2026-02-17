# Portfolio Website

My personal portfolio built with vanilla JavaScript on the frontend and Express.js handling the backend. Nothing fancy—just a clean site to showcase my work and make it easy for people to reach out.

## Getting Started

Clone the repo, install dependencies, and run:

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser. The server runs on port 3000 by default, but you can change it with the `PORT` environment variable.

## What's Inside

**Frontend** is pure HTML, CSS, and vanilla JS—no frameworks, kept lightweight. The page is responsive and works well on mobile.

**Backend** is a simple Express server that:

- Serves the static files from the `public/` folder
- Handles contact form submissions via the `/api/contact` endpoint
- Returns a success/error response to the client

Right now, form submissions just log to the console. For production, you'd probably want to wire up actual email sending or save them to a database.

## Files You Might Want to Change

- **`public/index.html`** – Add your name, bio, projects, links. Pretty straightforward.
- **`public/css/style.css`** – Colors and fonts are in CSS variables at the top, easy to tweak.
- **`server.js`** – If you want to actually send emails or store contact form data, that's where you'd add it.

## Stack

- **Frontend:** HTML5, CSS3, JavaScript (no dependencies)
- **Backend:** Node.js, Express
- **Fonts:** DM Sans and JetBrains Mono from Google Fonts
