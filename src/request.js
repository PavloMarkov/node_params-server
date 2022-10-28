/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:3001';
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

const href = BASE + pathname + search;

console.log(href);

axios.get(href)
  .catch(err => console.log(err));
