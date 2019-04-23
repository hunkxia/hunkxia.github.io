importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0922513b7d534f6d747e.js",
    "revision": "b68e9b3787a1422cb87e14d0dc8580c1"
  },
  {
    "url": "/_nuxt/282e2ba76f9d5124addc.js",
    "revision": "adf1a7fff99c349f1456eedd79706bf3"
  },
  {
    "url": "/_nuxt/2ed84e3131225492c589.js",
    "revision": "0b706489f77f0e664eb5912a7748d888"
  },
  {
    "url": "/_nuxt/d1c93466d887bac59bbc.js",
    "revision": "6a4871c41875b9a15f211940e06ed7fb"
  },
  {
    "url": "/_nuxt/d23bb9e8f40bcf0d19ea.js",
    "revision": "c1f92590a2d12ad7b772276346a55e6b"
  },
  {
    "url": "/_nuxt/d5f7676417021987b313.js",
    "revision": "2c71a2e161a36ef864635d0ef3bddf93"
  }
], {
  "cacheId": "kity-demo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
