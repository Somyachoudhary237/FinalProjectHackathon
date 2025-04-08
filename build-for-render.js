const { execSync } = require('child_process');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Build client-side code only (no server bundling)
console.log('Building client...');
try {
  execSync('node ./node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
  console.log('Client build successful');
} catch (error) {
  console.error('Client build failed:', error);
}

// Copy server files without bundling
console.log('Preparing server files...');
try {
  execSync('mkdir -p dist/server', { stdio: 'inherit' });
  execSync('cp -r server/* dist/server/', { stdio: 'inherit' });
  console.log('Server files copied successfully');
} catch (error) {
  console.error('Server file preparation failed:', error);
}

console.log('Build completed!');
