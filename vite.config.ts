import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => { 
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      react(), 
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      }
    },
    define: {
      ENV: {
        ZITADEL_CLIENT_ID: env.ZITADEL_CLIENT_ID,
        ZITADEL_AUTHORITY: env.ZITADEL_AUTHORITY,
        ZITADEL_REDIRECT_URI: env.ZITADEL_REDIRECT_URI,
        ZITADEL_LOGOUT_URI: env.ZITADEL_LOGOUT_URI,
      }
    }
  }
})
