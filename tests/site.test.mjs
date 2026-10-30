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

test('should publish every section at its own URL', () => {
  for (const section of [
    'experience',
    'projects',
    'research',
    'education',
    'blog',
    'contact',
  ]) {
    assert.ok(existsSync(join(DIST_DIR, section, 'index.html')), section);
  }
});

test('should keep the site free of resume wording and old contact details', () => {
  const pages = listBuiltFiles().filter(file => file.endsWith('.html'));
  const site = pages.map(readBuiltPage).join('\n');
  for (const banned of [
    'sudhir.13singh',
    'Compunnel',
    'Technical Leader',
    'Technical Lead',
  ]) {
    assert.ok(!site.includes(banned), `found "${banned}"`);
  }
});

test('should use the current public email on the contact page', () => {
  assert.match(
    readBuiltPage('contact/index.html'),
    /sudhir\.19singh@gmail\.com/,
  );
});

test('should leave the blog empty until there is a first post', () => {
  assert.match(readBuiltPage('blog/index.html'), /Nothing here yet/);
});

test('should never publish a PDF', () => {
  const pdfs = listBuiltFiles().filter(file => file.endsWith('.pdf'));
  assert.deepEqual(pdfs, []);
});

test('should show the same navigation on the 404 page', () => {
  assert.match(readBuiltPage('404.html'), /aria-label="Sections"/);
});
