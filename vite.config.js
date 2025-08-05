import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      constants: path.resolve(__dirname, 'src/constants'),
      app: path.resolve(__dirname, 'src/app'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      shared: path.resolve(__dirname, 'src/shared'),
      entities: path.resolve(__dirname, 'src/entities'),
      features: path.resolve(__dirname, 'src/features'),
      pages: path.resolve(__dirname, 'src/pages'),
      myRedux: path.resolve(__dirname, 'src/redux'),
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
});
