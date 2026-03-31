import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: './tests', // Or wherever your tests are
  use: {
    baseURL: 'http://localhost:8080',
  },
});
