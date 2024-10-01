// import type { StorybookConfig } from "@storybook-vue/nuxt";
import type { StorybookConfig } from "@storybook/vue3-vite";
import path from 'node:path'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-vue-slots',
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    config.css = {
      postcss: {
        plugins: [
          tailwind(),
          autoprefixer(),
        ],
      },
    };
    return config;
  },
  docs: {
    // autodocs: "tag",
  },
};
export default config;
