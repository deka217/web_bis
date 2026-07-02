# Web BIS UI

Frontend UI for Web BIS, built with React and Vite.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The production build is generated in `dist/`.

## GitHub Pages Deploy

This project is configured for:

```txt
https://deka217.github.io/web_bis/
```

Deploy with:

```sh
npm run deploy
```

For production API requests, set `VITE_API_BASE_URL` before building, for example:

```sh
VITE_API_BASE_URL=https://your-backend-domain.com/api npm run build
```
