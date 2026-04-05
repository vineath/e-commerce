import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   port :2025
  // },
})
//you can change the port number to any other number you want, just make sure it's not being used by another application.