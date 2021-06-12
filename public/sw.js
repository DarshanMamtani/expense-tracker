let cacheName = "expense-tracker";

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                cache.addAll([
                    '/index.html',
                    '/',
                    '/favicon.ico',
                    '/static/media/expense-tracer.d74db83f.jpg',
                    '/manifest.json',
                    '/logo192.png',
                    '/static/css/main.e5ba6f59.chunk.css',
                    '/static/js/2.c848336c.chunk.js',
                    '/static/js/main.14c9b8da.chunk.js'
                ])
            })
    )
});

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                if (res) {
                    return res;
                }
            })
    )
})