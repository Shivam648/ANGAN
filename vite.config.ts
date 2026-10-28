import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const siteUrl = (env.VITE_SITE_URL || "https://aangan.example").replace(
    /\/+$/,
    "",
  );

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "aangan-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("%SITE_URL%", siteUrl);
        },
      },
    ],
    build: {
      target: "es2022",
      cssCodeSplit: true,
      sourcemap: false,
    },
  };
});
