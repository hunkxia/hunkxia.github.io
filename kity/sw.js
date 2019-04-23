importScripts('/kity/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/kity/assets/158412a212b706174285.js",
    "revision": "6d5d923063776b3693c9eab5e1e5311b"
  },
  {
    "url": "/kity/assets/1c5006d9d069b473f380.js",
    "revision": "be1b84501e1d7c6fcc3fbf686e922683"
  },
  {
    "url": "/kity/assets/6af7e84cc93cc2aa6f2b.css",
    "revision": "992c8a0b79067bb64290b718079f2a16"
  },
  {
    "url": "/kity/assets/8f2b93e18d7bc34172e3.js",
    "revision": "307742cf1502ed26831dded42c6f553e"
  },
  {
    "url": "/kity/assets/a3b690ff86213ce2b5e2.js",
    "revision": "629b07dc0c2fa6fa6014f9e4d7cb8b81"
  },
  {
    "url": "/kity/assets/b7e6bbca699f7cd239af.js",
    "revision": "f26de1f5e0eb22b7543c3bc5efdfc9ca"
  },
  {
    "url": "/kity/assets/e112b995e59a40938727.js",
    "revision": "22f2d5f6841dd199615126464061c101"
  },
  {
    "url": "/kity/assets/ef64db489a6d84054600.css",
    "revision": "50785836f3c58ef647813fe5f6701aa6"
  }
], {
  "cacheId": "kity-demo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/kity/assets/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
