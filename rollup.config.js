import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';

import css from "rollup-plugin-css-only";
import json from "rollup-plugin-json";

const production = !process.env.ROLLUP_WATCH;

const publicConfig = {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js',
		inlineDynamicImports: 'true'
	},
	plugins: [
		svelte({
			dev: !production,
			css: (css) => {
				css.write("public/build/bundle.css");
			},
			emitCss: true,
		}),

		resolve({
			browser: true,
			dedupe: ["svelte"],
		}),

		css({ output: "public/build/vendor.css" }),
		commonjs(),

		postcss({
			extract: true,
			minimize: true,
			use: [
				['sass', {
					includePaths: [
						'./theme',
						'./node_modules'
					]
				}]
			]
		}),

		// replace({
		// 	// 2 level deep object should be stringify
		// 	process: JSON.stringify({
		// 		env: {
		// 			isProd: production,
		// 		},
		// 		browser: true
		// 	}),
		// }),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload("public"),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
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

				require("child_process").spawn("sirv", ["public"], {
					stdio: ["ignore", "inherit", "inherit"],
					shell: true,
				});
			}
		},
	};
}

// bundle workers
const workerConfig = ["compiler", "bundler"].map((x) => ({
	input: `src/workers/${x}/index.js`,
	output: {
		file: `public/workers/${x}.js`,
		format: "iife",
	},
	plugins: [resolve(), json(), production && terser()],
}));

export default [...workerConfig, publicConfig];

// 	plugins: [
// 		svelte({
// 			// enable run-time checks when not in production
// 			dev: !production,
// 			// we'll extract any component CSS out into
// 			// a separate file - better for performance
// 			// css: css => {
// 			// 	css.write('public/build/bundle.css');
// 			// },

// 			// allows you to override styles from within component
// 			emitCss: true
// 		}),

// 		// If you have external dependencies installed from
// 		// npm, you'll most likely need these plugins. In
// 		// some cases you'll need additional configuration -
// 		// consult the documentation for details:
// 		// https://github.com/rollup/plugins/tree/master/packages/commonjs

// 		// SAMPLE INSTALL
// 		// copy({
// 		// 	targets: [{
// 		// 		src: 'node_modules/bootstrap/dist/**/*',
// 		// 		dest: 'public/vendor/bootstrap'
// 		// 	}]
// 		// }),

// 		resolve({
// 			browser: true,
// 			dedupe: ['svelte'] // importee => importee === 'svelte' || importee.startsWith('svelte/')
// 		}),
// 		commonjs(),
// 		postcss({
// 			extract: true,
// 			minimize: true,
// 			use: [
// 				['sass', {
// 					includePaths: [
// 						'./theme',
// 						'./node_modules'
// 					]
// 				}]
// 			]
// 		}),

// 		// In dev mode, call `npm run start` once
// 		// the bundle has been generated
// 		!production && serve(),

// 		// Watch the `public` directory and refresh the
// 		// browser on changes when not in production
// 		!production && livereload('public'),

// 		// If we're building for production (npm run build
// 		// instead of npm run dev), minify
// 		production && terser(),

// 		replace({
// 			// 2 level deep object should be stringify
// 			process: JSON.stringify({
// 				env: {
// 					isProd: production,
// 				}
// 			}),
// 		}),
// 	],
// 	watch: {
// 		clearScreen: false
// 	}
// };

// function serve() {
// 	let started = false;

// 	return {
// 		writeBundle() {
// 			if (!started) {
// 				started = true;

// 				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
// 					stdio: ['ignore', 'inherit', 'inherit'],
// 					shell: true
// 				});
// 			}
// 		}
// 	};
// }
