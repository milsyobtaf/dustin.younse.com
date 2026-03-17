import * as util from 'util';

export const consoleOutput = function (value) {
  const str = util.inspect(value);
  return `<pre>${unescape(str)}</pre>`;
};
