<script>
export let data = {};
export let hLevel = 2;
</script>

<article>
    <svelte:element this={'h' + hLevel}>{data.title}</svelte:element>   
    <img src={data.image} alt="">
    <p>{data.description}</p>
</article>

<style>
    article {
        grid-template-rows: subgrid;
        grid-row: 3;
    }
    svelte:element {
        margin: 0;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    p {
        margin: 0.5em 0;
    }

</style>