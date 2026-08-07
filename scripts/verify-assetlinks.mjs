import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const PLAY_SIGNING = 'B8:3B:3E:B3:A0:6D:45:F9:04:A2:7E:50:3F:78:BF:FD:22:E0:F0:AC:86:87:D9:EC:98:70:0E:76:83:E5:BB:BD';
const candidates = [
  '.vercel/output/static/.well-known/assetlinks.json',
  'dist/.well-known/assetlinks.json',
];

const path = candidates.map((p) => resolve(p)).find((p) => existsSync(p));
if (!path) {
  console.error('verify-assetlinks: missing assetlinks.json in build output');
  process.exit(1);
}

const body = readFileSync(path, 'utf8');
if (!body.includes(PLAY_SIGNING)) {
  console.error(`verify-assetlinks: Play signing SHA B8 missing in ${path}`);
  process.exit(1);
}

console.log(`verify-assetlinks: OK (${path})`);
