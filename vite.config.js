import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Me habilita este plugin para darle soporte con Vite a React.js
  plugins: [react()],
  // Me permite modificar el puerto del servidor de desarrollo.
  server: {
    port: 3030,
  },
  // Me permite modificar el puerto del servidor pre-productivo que me ofrece Vite, luego de correr el build.
  preview: {
    port: 4270,
  },
  // Me permite personalizar la generación de los procesos vinculados para producción referente al build.
  build: {
    // Acelerar el proceso de compilación de los archivos cuando generas el build
    incremental: true,
    // Habilitar un trabajo en conjunto con Babel, para el manejo correcto del versionado de tu JS moderno a la versión que necesite el navegador.
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }, 
    // Habilitar la aceleración de compilación de tu código de TS hacia JS.
    /*typescript: {
      tsconfig: "./tsconfig.json",
    },*/
    // Habilitar una caché para optimizar el compilado de los recursos que caen en dist.
    cache: true,
    // Habilitar la opción de compresión optimizada para minimizar el tamaño de los archivos generados.
    minify: true,
  }
});
