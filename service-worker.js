/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "18eaf807ee3f2959db1ede263e584e6c"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.88c11dbd.css",
    "revision": "86e8662e9450332933ca800d0d3d66da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5785f490.js",
    "revision": "5057569dc9815077ee7d2239c288f873"
  },
  {
    "url": "assets/js/11.7227b195.js",
    "revision": "7da992d204bda4cc463737d90c32fab0"
  },
  {
    "url": "assets/js/12.14093f47.js",
    "revision": "82ae2832a81ab95ad8a57eaee51dbbac"
  },
  {
    "url": "assets/js/13.b797f22a.js",
    "revision": "66acaad5a75aadc7c40d2732d6b34b55"
  },
  {
    "url": "assets/js/14.8659bc4f.js",
    "revision": "4310b95ff07aa30cdc6b9b0997122ace"
  },
  {
    "url": "assets/js/15.538d89e1.js",
    "revision": "cfe567f03214c50de966d72b6253054d"
  },
  {
    "url": "assets/js/16.30c18765.js",
    "revision": "3158040d43e6e12095653c4ab61e7f3b"
  },
  {
    "url": "assets/js/17.87042842.js",
    "revision": "4f2b1e0bea2432be65961a26104bc315"
  },
  {
    "url": "assets/js/18.73f3a0c4.js",
    "revision": "6217d4eecf8f50115520d5d48e74ef8f"
  },
  {
    "url": "assets/js/19.dd853956.js",
    "revision": "3cf6b86d2d714ff29d45bafee68ee8da"
  },
  {
    "url": "assets/js/2.8f4699e6.js",
    "revision": "d2f5f24249ac8ddd7ff685d95196f4b8"
  },
  {
    "url": "assets/js/20.ce47b1f8.js",
    "revision": "88dbd1c593e5cb8cd0d75c25ce35020e"
  },
  {
    "url": "assets/js/21.d1b3da7b.js",
    "revision": "3973bd8e751a0aeb8f30ab3b69727741"
  },
  {
    "url": "assets/js/22.bcdc0a6a.js",
    "revision": "3cd3abb7300185fb2e951822df968cc6"
  },
  {
    "url": "assets/js/23.d2bc9b88.js",
    "revision": "f89906e200cd4523cb17572747a12f0a"
  },
  {
    "url": "assets/js/24.444bbff6.js",
    "revision": "57c44533c991894fed00233ba3b74c9a"
  },
  {
    "url": "assets/js/26.87ff770b.js",
    "revision": "78f4e8b74647795453feb067e07475f5"
  },
  {
    "url": "assets/js/3.ef99bf8e.js",
    "revision": "17124352913d5e75858d752c264f9b4f"
  },
  {
    "url": "assets/js/4.7de2c992.js",
    "revision": "90773e0bf4d6aedee55e1e07f94825f3"
  },
  {
    "url": "assets/js/5.8b0efd2b.js",
    "revision": "c9beef560d0921ec782fc523cb380eac"
  },
  {
    "url": "assets/js/6.1585fc73.js",
    "revision": "f0306f9ae855a5709fc912bdfb73d3e8"
  },
  {
    "url": "assets/js/7.abc7cb49.js",
    "revision": "092f44f9b407c40b73864c16ea45c86b"
  },
  {
    "url": "assets/js/8.d18348f2.js",
    "revision": "66bf12cafa81a9fa5719be210656ce33"
  },
  {
    "url": "assets/js/9.cce8dc66.js",
    "revision": "216a81c2270a5b232cdc9ed63a7ba71c"
  },
  {
    "url": "assets/js/app.61a270e1.js",
    "revision": "6ebf33b57b9f271945f3d4cff7177f92"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d76cab93f35e124df9c1e98c228e8d9a"
  },
  {
    "url": "design/index.html",
    "revision": "a33b93cf873759d9c6cab04852edf05a"
  },
  {
    "url": "index.html",
    "revision": "8db9aa581fd30061649ee6c312285c9d"
  },
  {
    "url": "intro/index.html",
    "revision": "de585a0cbe1a537a7b5919b174eee73c"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "67bea623da40faec8c911bf594b7c2e7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2ea9a22d8fb26fa8199d29fb04b42a22"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "dbd87514c7f6c0098daca93df709215c"
  },
  {
    "url": "software/index.html",
    "revision": "94b8d8d0f4493658713fb257652f3d36"
  },
  {
    "url": "test/index.html",
    "revision": "abba1b51b6af11a69dc5a822aeb6ee27"
  },
  {
    "url": "use cases/index.html",
    "revision": "e3b1a8860d1a754bb0101c195dd55263"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
