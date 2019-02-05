import * as fs from 'fs-extra';
import {reduce} from 'lodash';
import {join} from 'path';

const spec = {
  'dist/dhm-dashboard.min.user.js': 'src/dhm-dashboard.meta.js'
};

const promises: Promise<any>[] = reduce(
  spec,
  (acc: Promise<any>[], metaPath: string, userPath: string): Promise<any>[] => {
    const promise = Promise.resolve()
      .then(async () => {
        userPath = join(__dirname, userPath);
        const user$ = fs.readFile(userPath, 'utf8');
        const meta$ = fs.readFile(join(__dirname, metaPath), 'utf8');

        const joint = `${await meta$}\n${await user$}`;

        await fs.writeFile(userPath, joint);
      });

    acc.push(promise);

    return acc;
  },
  []
);

Promise.all(promises)
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  });
