import adapter from '@sveltejs/adapter-static';Cannot find module '@sveltejs/adapter-static' or its corresponding type declarations.2307Cannot find module '@sveltejs/adapter-static' or its corresponding type declarations.
/** @type {import('@sveltejs/kit').Config} */const config = {	kit: {		adapter: adapter({			fallback: '404.html'		}),		paths: {			base: process.argv.includes('dev') ? '' : process.env.BASE_PATHType 'string | undefined' is not assignable to type '"" | `/${string}` | undefined'.
  Type 'string' is not assignable to type '"" | `/${string}` | undefined'.2322Type 'string | undefined' is not assignable to type '"" | `/${string}` | undefined'.
  Type 'string' is not assignable to type '"" | `/${string}` | undefined'.		}	}};
export default config;