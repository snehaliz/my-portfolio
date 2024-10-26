<script>
import '../style.css';
import { page } from '$app/stores';

let localStorage = globalThis.localStorage ?? {};
let colorScheme = localStorage.colorScheme ?? 'light dark';
let root = globalThis?.document?.documentElement;
$: root?.style.setProperty('color-scheme', colorScheme);
$: localStorage.colorScheme = colorScheme;

let pages = [
  { url: './', title: 'Home' },
  { url: './projects', title: 'Projects' },
  { url:'./contact',title:'Contact'},
  { url:'https://github.com/snehaliz/portfolio',title:'Profile'},
  { url:'./resume',title:'Resume'}
];
</script>

<nav>
    {#each pages as p }
    <a 
        href={p.url} 
        class:current={'.' + $page.route.id === p.url}
        target={ p.url.startsWith("http") ? "_blank" : null }
    >
        {p.title}
      </a>
    {/each}
</nav>


<label class="color-scheme">
  Theme:
  <select bind:value={ colorScheme}>
    <option value="light dark">Automatic</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</label>

<slot />

<style>

nav {
    display: flex;
    margin-bottom: 1em;
    --border-color: oklch(50% 10% 200 / 40%);
    border-bottom: 1px solid var(--border-color);
  }

nav a {
    flex: 1;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
    color: inherit;
  }

nav a.current{
    border-bottom: 0.4em solid var(--border-color);
    padding-bottom: 0.1em;
  }
nav a:hover{
    border-bottom: 0.4em solid var(--border-color);
    padding-bottom: 0.1em;
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
  }

.color-scheme {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 80%;
  }

.color-scheme select {
    font: inherit;
  }

</style>

