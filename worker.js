const filesToCache = [
	"Virtual101.htm",
	"Virtual101.img",
	"VirtualXP.js",
	"VirtualXP.json",
	"VirtualXP.png",
	"VirtualXP.wasm",
	"VirtualXPBIOS.bin",
	"Virtual101FavIcon_512x512.png",
	"Virtual101FavIcon_512x512.png",
	"Virtual101FavIcon_512x512.png",
	"VirtualXPLoader.js",
	"VirtualXPShare.png",
	"vgabios-0.7a.bin"
];

const staticCacheName = "virtualxp-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});
