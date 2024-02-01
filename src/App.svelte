<script lang="ts">
    import PowerMangager from "./components/power_mangager.svelte";
    import { pcs } from "./store";
</script>

<PowerMangager/>

{#each $pcs as pc}
    <PowerMangager title={pc.name} ntfyUrl={pc.url}/>
{/each}

<!-- <main class="w-full h-full p-4">

</main> -->