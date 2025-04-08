const { exec } = require('child_process');
exec('node dist/server/index.js', { stdio: 'inherit' });
