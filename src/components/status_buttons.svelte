<script>
  import { createEventDispatcher } from "svelte";
  import { funMode, url } from "../store";

  const dp = createEventDispatcher();
</script>

<div class="flex flex-col items-end gap-2 md:block w-full absolute bottom-0 p-4">
  <button class="btn btn-square md:float-left" on:click={() => dp("reload")} class:animate-bounce={$funMode}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class:animate-spin={$funMode}
      ><path
        fill="currentColor"
        d="M6 12q0 1.35.538 2.488T8 16.45V15q0-.425.288-.712T9 14q.425 0 .713.288T10 15v4q0 .425-.288.713T9 20H5q-.425 0-.712-.288T4 19q0-.425.288-.712T5 18h1.725q-1.275-1.1-2-2.65T4 12q0-2.375 1.237-4.275t3.213-2.9q.35-.2.725-.012t.5.587q.125.4-.038.775t-.512.575q-1.4.775-2.262 2.163T6 12m9 8q-1.25 0-2.125-.875T12 17q0-1.2.825-2.062t2.025-.913q.425-.9 1.263-1.463T18 12q1.325 0 2.288.863T21.45 15q1.05 0 1.8.725t.75 1.75q0 1.05-.725 1.788T21.5 20zm1-12.45V9q0 .425-.288.713T15 10q-.425 0-.712-.288T14 9V5q0-.425.288-.712T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6h-1.725q.825.725 1.438 1.663T19.65 9.7q.125.4-.1.725t-.65.4q-.425.075-.762-.162t-.488-.638q-.25-.725-.675-1.35T16 7.55M15 18h6.5q.2 0 .35-.15t.15-.35q0-.2-.15-.35T21.5 17h-1.75v-1.25q0-.725-.513-1.237T18 14q-.725 0-1.237.513t-.513 1.237V16H15q-.425 0-.712.288T14 17q0 .425.288.713T15 18m3-2"
      /></svg
    >
  </button>
  <button class="btn btn-square md:float-right" on:click={() => $url = ""} class:animate-bounce={$funMode}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14 14"
      class:animate-spin={$funMode}
      ><path
        fill="currentColor"
        fill-rule="evenodd"
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0-.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5zm10.963 2.807A.75.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.817-.163"
        clip-rule="evenodd"
      /></svg
    ></button
  >
</div>