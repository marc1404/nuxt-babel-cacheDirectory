import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
    build: {
        babel: {
            cacheDirectory: true
        }
    }
};

export default config;