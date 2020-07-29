/* eslint-env node */
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { string } from 'rollup-plugin-string';

import css from 'rollup-plugin-css-only';
import json from 'rollup-plugin-json';

const production = !process.env.ROLLUP_WATCH;

const publicConfig = {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
    inlineDynamicImports: 'true',
  },
  plugins: [
    svelte({
      dev: !production,
      css: (css) => {
        css.write('public/build/bundle.css');
      },
      emitCss: true,
    }),

    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    string({
      include: ['**/piling*', '**/pixi*', '**/umap*'],
    }),

    css({ output: 'public/build/vendor.css' }),
    commonjs(),

    postcss({
      extract: true,
      minimize: true,
      use: [
        [
          'sass',
          {
            includePaths: ['./theme', './node_modules'],
          },
        ],
      ],
    }),

    // replace({
    //   // 2 level deep object should be stringify
    //   process: JSON.stringify({
    //     env: {
    //       isProd: production,
    //     },
    //     browser: true
    //   }),
    // }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('sirv', ['public'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
}

// bundle workers
const workerConfig = ['compiler', 'bundler'].map((x) => ({
  input: `src/repl/workers/${x}/index.js`,
  output: {
    file: `public/workers/${x}.js`,
    format: 'iife',
  },
  plugins: [resolve(), json(), production && terser()],
}));

export default [...workerConfig, publicConfig];
