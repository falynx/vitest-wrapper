// ./node_modules/vitest/vitest.mjs
import path from 'path';
import { spawnSync } from 'node:child_process';

const [ node, module, ...origArgs ] = process.argv;
const args = origArgs.map((arg, i) => {
  if (arg === '--api') {
    return '--api.port';
  }
  if (origArgs[i - 1] === '-t') {
    return arg.replace(/[$^+?()[\]]/g, '\\$&');
  }
  if (/\.(?:js|mjs|cjs|ts|mts|cts|jsx|tsx)$/.test(arg)) {
    const cwd = process.cwd();
    return path.join(cwd, path.relative(cwd, arg));
  }
  return arg;
});

if (!args.includes('--api.host')) {
  args.push('--api.host', '127.0.0.1');
}

spawnSync(node, [module.replace(/\.m?js$/, '.real$&'), ...args], { stdio: [0, 1, 2] });
