module.exports = {
  apps: [{
    name: "portfolio",
    script: "node dist/portfolio/server/server.mjs",
    env: {
      PORT: 4100,
      BASE_HREF: '/portfolio/'
    }
  }]
}
