<script>
   import projects from '$lib/projects.json';
   import Project from '$lib/Project.svelte';
</script>

<svelte:head>
   <title>Home Page</title>
</svelte:head>

<h1>Sneha Shah</h1>
<p>Hi my name is Sneha and this is my portfolio website.</p>
<img src="/images/home.jpeg" alt="Me at Banff">

<h2>Latest Projects </h2>
<div class="projects">
<div class="projects highlights">
   {#each projects.slice(0,3) as p}
   <Project data={p} hLevel={3} />
   {/each}
</div>
</div>