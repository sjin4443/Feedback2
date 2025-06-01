const CACHE_NAME = 'arclight-cache-v1';
const urlsToCache = [
  '/OfflineTry3/ZambiaTestApp/index.html',
  '/OfflineTry3/ZambiaTestApp/script.js',
  '/OfflineTry3/ZambiaTestApp/style.css',
  '/OfflineTry3/ZambiaTestApp/manifest.json',
  '/OfflineTry3/ZambiaTestApp/videos/DirectOphthalmoscopy.mp4',
  '/OfflineTry3/ZambiaTestApp/images/logo.png',
  '/OfflineTry3/ZambiaTestApp/images/arclight_device.png',
  '/OfflineTry3/ZambiaTestApp/images/Summary.png',
  '/OfflineTry3/ZambiaTestApp/images/case1_eye.png',
  '/OfflineTry3/ZambiaTestApp/images/Anatomy1.png',
  '/OfflineTry3/ZambiaTestApp/images/Anatomy2.png',
  '/OfflineTry3/ZambiaTestApp/images/CaseStudy1.png',
  '/OfflineTry3/ZambiaTestApp/images/CaseStudy2.png',
  '/OfflineTry3/ZambiaTestApp/images/FrontOfEye.png',
  '/OfflineTry3/ZambiaTestApp/images/FundalReflex.png',
  '/OfflineTry3/ZambiaTestApp/images/Fundus.png',
  '/OfflineTry3/ZambiaTestApp/images/Glaucoma.png',
  '/OfflineTry3/ZambiaTestApp/images/Refract.png',
  '/OfflineTry3/ZambiaTestApp/images/HowToUse.png',
  '/OfflineTry3/ZambiaTestApp/images/Lens.png',
  '/OfflineTry3/ZambiaTestApp/images/Pupil.png',
  '/OfflineTry3/ZambiaTestApp/images/RedEye.png',
  '/OfflineTry3/ZambiaTestApp/images/Drum.png',
  '/OfflineTry3/ZambiaTestApp/images/Ear.png',
  '/OfflineTry3/ZambiaTestApp/images/EarAnatomy.png',
  '/OfflineTry3/ZambiaTestApp/images/EarChild.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
