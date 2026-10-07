import {spawnSync} from 'node:child_process';
import {copyFileSync,writeFileSync} from 'node:fs';
const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build','--config','vite.pages.config.ts'],{stdio:'inherit'});
if(result.status!==0)process.exit(result.status||1);
copyFileSync('dist-pages/index.html','dist-pages/404.html');
writeFileSync('dist-pages/.nojekyll','');
