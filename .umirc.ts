import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
