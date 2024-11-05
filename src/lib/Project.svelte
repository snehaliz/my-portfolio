<script>
export let data = {};
export let hLevel = 2;
</script>

<article>
    <svelte:element this={'h' + hLevel}>{data.title}</svelte:element>   
    <img src={data.image} alt="">
    <div>
        <p>{data.description}</p>
        <p class="year">{data.year}</p>
    </div>  
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
    .year{
        color: #888;
        font-size:0.9em;
        margin-top:0.2em;

    }

</style>