import { countEntries } from './filters/count-entries.js';
import { consoleOutput } from './filters/console-output.js';
import { toISOString, formatDate } from './filters/dates.js';
import { markdownFormat } from './filters/markdown-format.js';
import { slugifyString } from './filters/slugify.js';
import { sortAlphabetically } from './filters/sort-alphabetic.js';
import { sortByOrder } from './filters/sort-order.js';
import { shuffleArray } from './filters/sort-random.js';
import { splitlines } from './filters/splitlines.js';
import { striptags } from './filters/striptags.js';

export default {
  countEntries,
  consoleOutput,
  toISOString,
  formatDate,
  markdownFormat,
  slugifyString,
  sortAlphabetically,
  sortByOrder,
  shuffleArray,
  splitlines,
  striptags
};
