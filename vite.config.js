import { defineConfig, NextFunction } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

const mimeTypeMap = new Map([
    ['.mp3', 'audio/mp3'],
    ['.m4a', 'audio/mp4'],
    ['.opus', 'application/octet-stream'],
]);

// serve music from music-dist, so we don't have extra copying of music to the /dist folder
const serveStaticMiddleware = (req, res, next) => {
    const musicDir = '/media/music/';
    if (!req.url.startsWith(musicDir)) {
        return next();
    }
    const musicFileRelativePath = req.url.slice(musicDir.length);
    const musicFileSourcePath = path.join(
        import.meta.dirname,
        'music-dist',
        musicFileRelativePath
    );
    res.writeHead(200, {
        'Content-Type': mimeTypeMap.get(path.extname(musicFileRelativePath)),
    });
    const readStream = fs.createReadStream(musicFileSourcePath);
    readStream.pipe(res);
    next();
};

export default defineConfig({
    server: {
        port: 3000,
        open: true,
    },
    plugins: [
        vue(),
        {
            name: 'vite-serve-static-plugin',
            configureServer(server) {
                server.middlewares.use(serveStaticMiddleware);
            },
        },
    ],
});
