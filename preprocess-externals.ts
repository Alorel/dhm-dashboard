import * as Bluebird from 'bluebird';
import * as fs from 'fs-extra';
import {join} from 'path';

const files = [
  'src/dhm-dashboard.meta.js'
];

//tslint:disable-next-line:max-line-length
const reg = /^\/\/\s*@require(\s+)https?:\/\/cdn\.jsdelivr\.net\/npm\/([a-zA-Z\-_0-9]+)@([\^~]?[0-9]+\.[0-9]+\.[0-9]+)/gm;
const mReg = /([a-zA-Z\-_0-9]+)@[\^~]?[0-9]+\.[0-9]+\.[0-9]+/;

Bluebird.resolve(files.map(f => join(__dirname, f)))
  .map(async path => {
    let text = await fs.readFile(path, 'utf8');
    const matches = text.match(reg);
    if (matches) {
      for (const match of matches) {
        const pkgMatch = match.match(mReg);
        if (pkgMatch) {
          const pkg = pkgMatch[1];
          const pkgVer: string = require(`${pkg}/package.json`).version;
          text = text.replace(match, `// @require https://cdn.jsdelivr.net/npm/${pkg}@${pkgVer}`);
        } else {
          throw new Error(`Pkg match regex fail for ${match}`);
        }
      }

      await fs.writeFile(path, text);
    }
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
