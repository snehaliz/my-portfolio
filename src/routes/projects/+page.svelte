<script>
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';
    import Pie from '$lib/Pie.svelte';
    import * as d3 from 'd3'; 

    //let pieData = [
        //{ value: 1, label: 'apples' },
        //{ value: 2, label: 'oranges' },
        //{ value: 3, label: 'mangos' },
        //{ value: 4, label: 'pears' },
        //{ value: 5, label: 'limes' },
        //{ value: 5, label: 'cherries' },
    //];
    let query = '';
    let filteredProjects;
    let pieData;

    $: filteredProjects = projects.filter((project) => {
        let values = Object.values(project).join('\n').toLowerCase();
        return values.includes(query.toLowerCase());
    });

    $: {
        let rolledData = d3.rollups(
        filteredProjects,
        (v) => v.length,
        (d) => d.year,
        );

        pieData = rolledData.map(([year, count]) => {
            return { value: count, label: year };
        });
    }
</script>

<svelte:head>
   <title>My Projects</title>
</svelte:head>

<h1>Projects ({filteredProjects.length})</h1>

<input
  type="search"
  bind:value="{query}"
  aria-label="Search projects"
  placeholder="🔍 Search projects…"
/>

<Pie data="{pieData}" />

<div class="projects">
    {#each filteredProjects as p}
    <Project data={p} />
    {/each}
</div>