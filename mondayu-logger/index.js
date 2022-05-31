import { Console } from 'console';
import { createWriteStream } from 'fs';

// step 1: use this example: https://melvingeorge.me/blog/save-logs-to-files-nodejs
// export your monday logger here

export const AppendToFile = new Console({
  stdout: createWriteStream("savedData.txt", {flags: 'a'}),
});

export const OverwriteFile = new Console({
  stdout: createWriteStream("savedData.txt"),
});

// step 2: rename the package and publish
