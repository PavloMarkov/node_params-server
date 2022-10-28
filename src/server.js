/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = 3001;

const server = http.createServer((req, resp) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const pathParts = normalizedURL.pathname;

  const outputInfo = {
    parts: pathParts
      .split('/')
      .filter(el => el.length > 0) || [],
    query: Object.fromEntries(normalizedURL
      .searchParams.entries()),
  };

  console.log('outputInfo ', outputInfo);
  resp.write(JSON.stringify(outputInfo));
  resp.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
