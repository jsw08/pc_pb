<script lang="ts">
    import { onMount } from "svelte";
    export let ntfyUrl: string = "https://ntfy.sh/example_pcpower_url";

    type ntfy = {
        id: string;
        time: number;
        expires: number;
        event: "open" | "keepalive" | "message" | "poll_request";
        topic: string;
        message?: string;
        title?: string;
        tags?: string[];
        click?: string;
        actions?: any[];
        attachment?: {
            name: string;
            url: string;
            type?: string;
            size?: number;
            expires?: number;
        };
    };

    let ntfyEvents: EventSource;
    let state: "on" | "off" | "loading" | "error" = "loading";

    function handleError(this: EventSource, e: Event): void {
        state = "error";
        this.close();
        console.error(`Something went wrong while listening for events, ${e}`);
    }
    function handleMessages(this: EventSource, message: MessageEvent): void {
        const msg: ntfy = JSON.parse(message.data);
        if (!msg.message || msg.message.split(" ")[0] !== "res" ||!msg.tags || !msg.tags.includes("mcu")) return;

            console.log("res s")
        if (msg.message.includes("res s")) {
            console.log("res s")
            state = msg.message === "res s 1" ? "on" : "off"
        }
    }
    function handleOpen(this: EventSource, e: Event): void {
        state = "loading";
        sendMsg("s", ntfyUrl)
    }

    const sendMsg = (
        msg: string,
        ntfyUrl: string,
        tags: string[] = ["remote"],
    ): void => {
        fetch(ntfyUrl, {
            method: "POST",
            body: msg,
            headers: {
                Tags: tags.toString(),
            },
        }).catch((e) => {
            console.error(`Something went wrong while sending a message. ${e}`);
            state = "error";
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

{state}
