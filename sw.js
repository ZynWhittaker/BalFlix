// Service worker ringkas — boleh kosong, elak error 404 je
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
