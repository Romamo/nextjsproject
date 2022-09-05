import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({ key: 'css' });
}

  // return createCache({ key: 'mui-style', prepand: false });


