<script lang="ts">
  import { funMode, url } from "../store";

  let value: string = "https://ntfy.sh/";
  const submitUrl = (): void => {$url = value}
</script>

<dialog id="my_modal_5" class="modal modal-bottom md:modal-middle" open class:animate-bounce={$funMode}>
  <div class="modal-box" class:overflow-hidden={$funMode}>
    <h3 class="font-bold text-lg" class:animate-spin={$funMode}>Login</h3>
    <p class="py-4" class:animate-spin={$funMode}>Specify the ntfy.sh url before you get started.</p>
    <form class="modal-action" action="dialog" on:submit|preventDefault={submitUrl}>
      <input type="text" placeholder="https://ntfy.sh/hello_world" class="input input-bordered flex-grow" bind:value={value} class:animate-spin={$funMode}/>
      <button class="btn" class:animate-spin={$funMode}>Login</button>
    </form>
  </div>
</dialog>