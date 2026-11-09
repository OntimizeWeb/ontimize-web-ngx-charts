const fs = require('fs');
const path = require('path');

const src = path.join('projects', 'ontimize-web-ngx-charts', 'assets');
const dest = path.join('dist', 'assets');

fs.mkdirSync(dest, { recursive: true });

for (const file of fs.readdirSync(src)) {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
  console.log(`Copied: ${file}`);
}

console.log('----¡Assets copied!----');
