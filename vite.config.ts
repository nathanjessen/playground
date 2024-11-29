import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // If you want to use process.env in your code, you can define it here
    'process.env': {}
  }
});
