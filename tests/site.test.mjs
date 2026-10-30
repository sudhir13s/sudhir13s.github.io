import assert from 'node:assert/strict';
import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {test} from 'node:test';

const DIST_DIR = new URL('../dist/', import.meta.url).pathname;

function listBuiltFiles() {
  return readdirSync(DIST_DIR, {recursive: true}).map(String);
}

function readBuiltPage(path) {
  return readFileSync(join(DIST_DIR, path), 'utf8');
}

test('should publish the home page with the profile photo', () => {
  const home = readBuiltPage('index.html');
  assert.match(home, /Hey, I(&#39;|&#x27;|')m Sudhir/);
  assert.match(home, /avatar\.jpg/);
  assert.ok(existsSync(join(DIST_DIR, 'avatar.jpg')));
});

test('should never publish a PDF', () => {
  const pdfs = listBuiltFiles().filter(file => file.endsWith('.pdf'));
  assert.deepEqual(pdfs, []);
});

test('should show the same navigation on the 404 page', () => {
  assert.match(readBuiltPage('404.html'), /aria-label="Sections"/);
});
