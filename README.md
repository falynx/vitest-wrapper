Just a temporary hack/workaround to allow the [vscode vitest plugin](https://github.com/vitest-dev/vscode) to work with [Vite 3.0](https://vitejs.dev/guide/migration.html). It intercepts the arguments the extension passes to vitest and fixes/sanitizes them before passing them on to vitest.

To use it, simply rename `node_modules/vitest/vitest.mjs` to `node_modules/vitest/vitest.real.mjs`, and replace the original file with the one in this repo. Then restart vscode.
