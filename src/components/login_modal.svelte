<script lang="ts">
  import { url } from "../store";

  let value: string;
  const submitUrl = (): void => {$url = value}
</script>

<dialog id="my_modal_5" class="modal modal-bottom md:modal-middle" open>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Login</h3>
    <p class="py-4">Specify the ntfy.sh url before you get started.</p>
    <form class="modal-action" action="dialog" on:submit|preventDefault={submitUrl}>
      <input type="text" placeholder="https://ntfy.sh/hello_world" class="input input-bordered flex-grow" bind:value={value}/>
      <button class="btn">Login</button>
    </form>
  </div>
</dialog>