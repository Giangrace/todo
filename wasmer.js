// Simple HTTP server example for Wasmer/WinterJS
addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    
    // Router
    if (url.pathname === '/') {
        return new Response(
            `<!DOCTYPE html>
            <html>
            <head>
                <title>My Node App on Wasmer</title>
            </head>
            <body>
                <h1>Hello from Wasmer Edge!</h1>
                <p>This is a Node.js app running on WebAssembly</p>
            </body>
            </html>`,
            {
                headers: { 'Content-Type': 'text/html' }
            }
        );
    }
    
    if (url.pathname === '/api/data') {
        return new Response(
            JSON.stringify({
                message: 'API Response',
                timestamp: new Date().toISOString(),
                status: 'success'
            }),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
    
    // 404 Not Found
    return new Response('Not Found', { status: 404 });
}
