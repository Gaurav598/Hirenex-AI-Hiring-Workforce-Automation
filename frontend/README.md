# Hirynex frontend

Next.js interface for the Hirynex hiring and workforce prototype. See the [root README](../README.md) for architecture, backend setup, integration limits, and security notes.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to the FastAPI origin (default `http://127.0.0.1:8000`). Then run `npm ci`, `npm run dev`, and open `http://localhost:3000`.

Run `npx tsc --noEmit`, `npm run lint`, and `npm run build` before deployment.
