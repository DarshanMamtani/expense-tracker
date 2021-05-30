let cacheName = "expense-tracker";

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                cache.addAll([
                    '/static/js/bundle.js',
                    '/static/js/main.chunk.js',
                    '/static/js/0.chunk.js',
                    '/static/js/vendors~main.chunk.js',
                    '/index.html',
                    '/',
                    'favicon.ico',
                    '/static/media/expense-tracer.d74db83f.jpg',
                    '/manifest.json',
                    '/logo192.png'
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