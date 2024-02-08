<script lang="ts">
  import { onMount } from "svelte";
  import { url } from "./store";
  import LoginModal from "./components/login_modal.svelte";
  import PowerMangager from "./components/power_mangager.svelte";
  import StatusButtons from "./components/status_buttons.svelte";

  let reload = (): void => {};
  let pm: PowerMangager;

  onMount(() => {
    reload = pm.reload;
  })
</script>

<main
  class="w-full h-full p-4 flex flex-col items-center justify-end md:justify-center"
>
  {#if $url === ""}
    <LoginModal />
  {:else}
    <PowerMangager bind:this={pm} url={$url}/>
    <StatusButtons on:reload={reload}/>
  {/if}
</main>
