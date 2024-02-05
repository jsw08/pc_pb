<script lang="ts">
  import { onMount } from "svelte";
  import PowerButton from "./power_button.svelte";
  import type { Ntfy, State } from "../types";

  export let title: string = "A Wild PC";
  export let ntfyUrl: string = "https://ntfy.sh/example_pcpower_url";

  let ntfyEvents: EventSource;
  let state: State = "loading";

  
  function handleError(this: EventSource, e: Event): void {
    const err: string = JSON.stringify(e)
    state = "error";
    this.close();
    console.error(`Something went wrong while listening for events, ${err}`);
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

  const handleButton = (): void => {
    if (state === "error") {
      ntfyEvents = setupEvents(ntfyUrl);
      return
    }

    sendMsg("p", ntfyUrl)
  };
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
      const err: string = JSON.stringify(e)
      state = "error";
      console.error(`Something went wrong while sending a message. ${err}`);
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

<PowerButton on:click={handleButton} {state} />