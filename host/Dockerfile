FROM node:alpine as svelte-builder

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY rollup.config.js ./
COPY src/ ./src/

RUN npm run build

FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY app.js ./

COPY --from=svelte-builder ./build/public/bundle.js ./public/
COPY --from=svelte-builder ./build/public/bundle.css ./public/
COPY public/index.html ./public/
COPY public/global.css ./public/

EXPOSE 80

ENTRYPOINT [ "node", "app.js" ]
