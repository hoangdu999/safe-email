import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // Biến lưu trữ đường dẫn cơ sở từ router home
    __HOME_BASE_URL__: JSON.stringify("/"),
  },
  plugins: [vue()],
});
