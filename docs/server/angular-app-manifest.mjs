
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Git-Learn/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Git-Learn"
  },
  {
    "renderMode": 2,
    "route": "/Git-Learn/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 447, hash: '7e6bbad34955bbf484005a3c1f5203af24452b3cbe69ecae9abbd50d31e258f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '18d4d15c1428192fa2fa3c1e5e793ccf7b0c070aec8c7c6ce2756f09515df282', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2396, hash: '9e15279e2261240c7099ac12940dad59b0e088fa01a4a8429e0196dd0f3e8e4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 843, hash: '10c4885b805e86836cc26483ae520865096a4cfefb28dc62990bfbbfb5f96c5d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
