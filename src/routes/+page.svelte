<script>
   import projects from '$lib/projects.json';
   import Project from '$lib/Project.svelte';

   //let profileData = fetch('https://api.github.com/users/snehaliz');

   //let profileData = {
   //  ok: true,
   //  json: async () => ({
   //     followers: 100,
   //     following: 100,
   //     public_repos: 100,
   //     public_gists: 100,
   //   }),
   //};

</script>

<svelte:head>
   <title>Home Page</title>
</svelte:head>

<h1>Sneha Shah</h1>
<p>Hi my name is Sneha and this is my portfolio website.</p>
<img src="/images/home.jpeg" alt="Me at Banff">

<!--
<h2>Latest Projects </h2>
<div class="projects">
<div class="projects highlights">
   {#each projects.slice(0,3) as p}
   <Project data={p} hLevel={3} />
   {/each}
</div>
</div>
-->
<section class="github-profile">
   <h2>My GitHub Profile</h2>
   {#await fetch("https://api.github.com/users/snehaliz") }
   <p>Loading...</p>
   {:then response} {#await response.json()}
   <p>Decoding...</p>
   {:then data}
   <dl class="github-stats">
     <dt>Followers</dt>
     <dd>{data.followers}</dd>

     <dt>Following</dt>
     <dd>{data.following}</dd>

     <dt>Public Repos</dt>
     <dd>{data.public_repos}</dd>

     <dt>Public Gists</dt>
     <dd>{data.public_gists}</dd>
   </dl>
   <!----<p>The data is { JSON.stringify(data) }</p>---->
   {:catch error}
   <p class="error">Something went wrong: {error.message}</p>
   {/await} {:catch error}
   <p class="error">Something went wrong: {error.message}</p>
   {/await}
</section>

<style>
   .github-stats {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 1rem;
   }
 
   .github-stats dt {
     grid-row: 1;
     font-weight: bold;
   }
 
   .github-stats dd {
     grid-row: 2;
     margin: 0;
     text-align: center;
   }
 
   .error {
     color: red;
   }
 </style>