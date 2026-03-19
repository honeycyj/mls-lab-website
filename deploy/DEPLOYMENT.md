# Deployment Guide

## Overview

This project is a Vite + React single-page application using `react-router` with `BrowserRouter`.

That means every deployment target must support SPA fallback routing:

- direct visits to `/about` should return `index.html`
- the frontend router then decides which page to render

If this fallback is missing, refreshing or directly opening a child route will return `404`.

## Build Output

Build the site with:

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Netlify

Netlify preview/hosting is configured through:

```text
netlify.toml
```

Current behavior:

- publish directory: `dist`
- SPA fallback: all routes rewrite to `/index.html`

If you deploy through GitHub on Netlify, no extra rewrite setup should be necessary as long as `netlify.toml` is kept in the repo root.

## Nginx

An Nginx example config is provided here:

```text
deploy/nginx/mls-lab-website.conf
```

Key points in that config:

- serves the built `dist/` directory
- caches hashed assets aggressively
- uses `try_files $uri $uri/ /index.html;` for SPA routing

Typical steps:

1. Build locally or in CI with `npm run build`
2. Upload `dist/` to the server
3. Point Nginx `root` to the deployed `dist` directory
4. Reload Nginx

## Domain And HTTPS Notes

When switching to your own server:

1. Point the domain DNS to the server IP
2. Configure `server_name` in Nginx
3. Add HTTPS with Let's Encrypt or your preferred certificate provider
4. Keep the SPA fallback rule in the HTTPS server block too

If you use a reverse proxy or CDN in front of Nginx, make sure it does not override the SPA fallback behavior.

## Static Assets

Assets under `public/` are copied into the build output and should be served as static files.

This project currently relies on:

- images
- svg logos/icons
- favicon files
- video assets

Make sure your deployment target serves these files directly and does not rewrite them to `index.html`.

## Recommended Workflow

For now:

- use Netlify for quick preview deployments
- keep `netlify.toml` in the repo
- keep the Nginx template in `deploy/nginx/` for later migration

When moving fully to your own server:

- keep the frontend code unchanged
- replace only the hosting layer
- preserve the same SPA fallback behavior
