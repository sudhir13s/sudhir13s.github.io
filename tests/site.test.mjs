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

test('should keep body text softer than headings and tech names', () => {
  const css = readFileSync(
    new URL('../src/styles/site.css', import.meta.url),
    'utf8',
  );
  assert.match(css, /\.prose \{\s*color: var\(--body\);/);
  assert.match(
    css,
    /\.prose :is\(h1, h2, h3, strong\) \{\s*color: var\(--fg\);/,
  );
});

test('should give every project a month and year', () => {
  const source = readFileSync(
    new URL('../src/content/pages/projects.md', import.meta.url),
    'utf8',
  );
  const projects = source.split(/^### /m).slice(1);
  assert.ok(projects.length > 0);
  for (const project of projects) {
    const [heading] = project.split('\n');
    assert.match(project, /\n\n\*[A-Z][a-z]{2} \d{4}/, heading);
  }
});

test('should list every employer on the experience page', () => {
  const experience = readBuiltPage('experience/index.html');
  for (const employer of [
    'Walmart Global Tech',
    'Strateos',
    'Center On Access Technology',
    'Advarra',
    'Rochester Institute of Technology',
    'Philips',
    'CliniSys',
  ]) {
    assert.ok(experience.includes(employer), employer);
  }
});

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

test('should list focus areas under the Master degree only', () => {
  const education = readBuiltPage('education/index.html');
  const [masters, bachelors] = education.split('Oriental College');
  for (const topic of [
    'Distributed systems',
    'Parallel computing',
    'Machine learning',
    'NLP',
    'Blockchain',
  ]) {
    assert.ok(masters.includes(`<li>${topic}:`), topic);
  }
  assert.ok(!bachelors.includes('<li>'));
});

test('should keep technologies in plain text on the experience page', () => {
  const experience = readBuiltPage('experience/index.html');
  assert.ok(experience.includes('(Java17, WebFlux, Kafka, k8s, cursor)'));
  assert.ok(!experience.includes('<strong>'));
});

test('should link GitHub, LinkedIn and email from the contact section', () => {
  const contact = readBuiltPage('contact/index.html');
  const [, section] = contact.split('<ul>');
  for (const link of [
    'href="https://github.com/sudhir13s"',
    'href="https://www.linkedin.com/in/sudhir13s"',
    'href="mailto:sudhir.19singh@gmail.com"',
  ]) {
    assert.ok(section.includes(link), link);
  }
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
