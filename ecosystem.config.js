module.exports = {
  apps: [{
    script: 'serve',
    name: 'psychology',
    env: {
      PM2_SERVE_PATH: 'out',
      PM2_SERVE_PORT: 8080,
      PM2_SERVE_SPA: 'true',
    }
  }],
};
