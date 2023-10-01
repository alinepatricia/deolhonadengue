const staticDengue = "olha-dengue-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "./public/images/mosquito.png.png",
  "./public/images/mosquito1.png.jpg",
  "./public/images/perguntas.png.png",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })