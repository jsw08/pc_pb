<script lang="ts">
  import { onMount } from "svelte";
  import PowerButton from "./power_button.svelte";
  import type { Ntfy, State } from "../types";

  export let url: string = "https://ntfy.sh/example_pcpower_url";
  export const reload = handleOpen;
  export const press = handleButton;

  let ntfyEvents: EventSource;
  let state: State = "loading"

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
  function handleOpen(): void {
    state = "loading";
    sendMsg("s", url);
  }
  function handleButton(): void {
    if (state === "error") {
      ntfyEvents = setupEvents(url);
      return
    } else if (state === "loading") return

    sendMsg("p", url)
  };
  function sendMsg (
    msg: string,
    url: string,
    tags: string[] = ["req"]
  ): void {
    fetch(url, {
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

  function setupEvents (url: string): EventSource {
    const events: EventSource = new EventSource(url + "/sse");

    events.addEventListener("error", handleError);
    events.addEventListener("message", handleMessages);
    events.addEventListener("open", handleOpen);

    return events;
  };
  onMount(() => {
    ntfyEvents = setupEvents(url);
  });
</script>

<PowerButton on:click={handleButton} {state} />
