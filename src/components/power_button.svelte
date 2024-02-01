<script lang="ts">
    import type { State } from "../types";
    export let state: State;

    const colors = {
        on: "su",
        off: "er",
        loading: "b1",
        error: "wa",
    }
</script>

<button
    on:click
    class="
        shadow-lg
        active:shadow-sm

        border-b-4
        active:border-b-0

        w-full
        h-full
        btn
        btn-square

        flex
        flex-col
    "
    style:background-color={`oklch(var(--${colors[state]}))`}
    style:color={`oklch(var(--${colors[state]}c))`}
    style:border-bottom-color={`color-mix(in srgb, oklch(var(--${colors[state]})) 75%, black)`}
>
    {state}

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 512 512"
        ><path
            fill="currentColor"
            d="M256 464c-114.69 0-208-93.47-208-208.35c0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65C92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464"
        /><path
            fill="currentColor"
            d="M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22"
        /></svg
    >
</button>