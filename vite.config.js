import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server:{
  //   port :2025
  // },
})
//you can change the port number to any other number you want, just make sure it's not being used by another application.