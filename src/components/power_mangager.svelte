<script lang="ts">
  import { onMount } from "svelte";
  import PowerButton from "./power_button.svelte";
  import type { Ntfy, State } from "../types";

  export let title: string = "A Wild PC";
  export let ntfyUrl: string = "https://ntfy.sh/example_pcpower_url";

  let ntfyEvents: EventSource;
  let state: State = "loading";

  function handleError(this: EventSource, e: Event): void {
    state = "error";
    this.close();
    console.error(`Something went wrong while listening for events, ${e}`);
  }
  function handleMessages(this: EventSource, message: MessageEvent): void {
    const msg: Ntfy = JSON.parse(message.data);
    if (!msg.message || !msg.tags || !msg.tags.includes("res")) return;
    console.info("Message RES: ", msg.message);

    if (msg.message.includes("s")) {
      state = msg.message === "s 1" ? "on" : "off";
    }
  }
  function handleOpen(this: EventSource, e: Event): void {
    state = "loading";
    sendMsg("s", ntfyUrl);
  }

  const sendMsg = (
    msg: string,
    ntfyUrl: string,
    tags: string[] = ["req"]
  ): void => {
    fetch(ntfyUrl, {
      method: "POST",
      body: msg,
      headers: {
        Tags: tags.toString(),
      },
    }).catch((e) => {
      state = "error";
      console.error(`Something went wrong while sending a message. ${e}`);
    });
  };
  const setupEvents = (ntfyUrl: string): EventSource => {
    const events: EventSource = new EventSource(ntfyUrl + "/sse");

    events.addEventListener("error", handleError);
    events.addEventListener("message", handleMessages);
    events.addEventListener("open", handleOpen);

    return events;
  };
  onMount(() => {
    ntfyEvents = setupEvents(ntfyUrl);
  });
</script>

<div class="card w-52 m-4 aspect-square bg-base-200 shadow-sm ">
  <div class="card-body flex flex-col p-5">
    <h2 class="card-title overflow-scroll whitespace-nowrap w-full">
      {title}
    </h2>
    <div class="card-actions flex-grow justify-center items-center">
      <PowerButton on:click={() => sendMsg("p", ntfyUrl)} {state} />
    </div>
  </div>
</div>