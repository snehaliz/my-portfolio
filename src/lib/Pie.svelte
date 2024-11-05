<script>
  import * as d3 from 'd3';  

//let data = [1,2,3,4,5,5]

export let data = [];
export let selectedIndex = -1;

//let pieData = [
  //{ value: 1, label: 'apples' },
  //{ value: 2, label: 'oranges' },
  //{ value: 3, label: 'mangos' },
  //{ value: 4, label: 'pears' },
  //{ value: 5, label: 'limes' },
  //{ value: 5, label: 'cherries' },
//];

let colors = d3.scaleOrdinal(d3.schemeTableau10);

let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
//let sliceGenerator = d3.pie();
let sliceGenerator = d3.pie().value((d) => d.value);

let arcData;
let arcs;

$: arcData = sliceGenerator(data);
$: arcs = arcData.map((d) => arcGenerator(d));
//let arc = arcGenerator({
  //startAngle: 0,
  //endAngle: 2 * Math.PI,
  //});
  function toggleWedge(index, event) {
  if (!event.key || event.key === 'Enter') {
    selectedIndex = selectedIndex === index ? -1 : index;
  }
}
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each arcs as arc, index} 
    <path 
      d={arc}
      fill={colors(index)} 
      class:selected={selectedIndex === index} 
      on:click={e => toggleWedge(index, e)}
      on:keyup={e => toggleWedge(index, e)}
      role="button"
      tabindex="0"
      aria-label={`Select ${data[index].label}`}
      style="
      --start-angle: { arcData[index]?.startAngle }rad;
      --end-angle: { arcData[index]?.endAngle }rad;"
      />{/each}
  </svg>
  <ul class="legend">
    {#each data as d, index}
    <li style="--color: { colors(index) }"
    class:selected={selectedIndex === index}
    >
      <span class="swatch"></span>
      {d.label} <em>({d.value})</em>
    </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    display: flex;
    align-items: flex-start;
    gap: 2em;
  }

  svg {
    max-width: 20em;
    margin-block: 2em;
    overflow: visible;
  }

  path {
    transition: 300ms;
    cursor: pointer;
    outline: none;
    --angle: calc(var(--end-angle) - var(--start-angle));
    --mid-angle: calc(var(--start-angle) + var(--angle) / 2);
      &.selected {
  transform: rotate(var(--mid-angle)) translateY(-6px) scale(1.1) rotate(
      calc(-1 * var(--mid-angle))
    );
    }
  } 

  svg:has(path:hover, path:focus-visible){
    path:not(:hover, :focus-visible) {
      opacity: 50%;
    }
  }

  .legend {
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    gap: 1em;
    border: 1px solid #ccc;
    padding: 1em;
    margin-top: 1em;
  }

  .legend li {
    display: flex;
    align-items: center;
    gap: 0.5em;

  }

  .swatch {
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: var(--color);
    border-radius: 50%;
  }

  .selected {
  --color: oklch(60% 45% 0) !important;

  &:is(path){
      fill: var(--color);
    }
  }
</style>