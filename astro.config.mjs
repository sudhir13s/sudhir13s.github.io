import {defineConfig} from 'astro/config';

// The deploy workflow sets these, so moving to a custom domain is a
// two-line change there and never touches the site code.
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
});
