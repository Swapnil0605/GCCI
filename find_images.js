const fs = require('fs');
const files = fs.readdirSync('scraped').filter(f => f.endsWith('.html'));
const images = new Set();
for (const f of files) {
  const html = fs.readFileSync('scraped/' + f, 'utf8');
  const imgMatches = html.matchAll(/(?:src|url)\s*=\s*["']([^"']+\.(?:jpg|jpeg|png|webp|svg))["']/gi);
  for (const m of imgMatches) {
    images.add(m[1]);
  }
  const bgMatches = html.matchAll(/url\(["']?([^"')]+?\.(?:jpg|jpeg|png|webp|svg))["']?\)/gi);
  for (const m of bgMatches) {
    images.add(m[1]);
  }
}
console.log('All image refs in HTML:');
console.log(Array.from(images));
