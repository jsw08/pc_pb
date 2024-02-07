<script lang="ts">
    import type { State } from "../types";
    export let state: State;

    const iSize: number = 48;

    const colors = {
        on: "su",
        off: "er",
        loading: "b2",
        error: "wa",
    };
</script>

<div class:cursor-wait={state === "loading"} class="w-fit h-fit">
    <button
        on:click
        class="
        shadow-lg
        active:shadow-sm

        border-b-4
        active:border-b-0

        w-48
        md:w-64
        lg:w-80
        xl:w-96

        text-2xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl

        h-auto
        aspect-square

        btn
        btn-square

        flex
        flex-col
    "
        style:background-color={`oklch(var(--${colors[state]}))`}
        style:color={`oklch(var(--${colors[state]}c))`}
        style:border-bottom-color={`color-mix(in srgb, oklch(var(--${colors[state]})) 75%, black)`}
        disabled={state === "loading"}
    >
        {#if state === "error"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 3em; height: 3em;"
                viewBox="0 0 24 24"
                ><path
                    d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z"
                    fill="currentColor"
                /></svg
            >
        {:else if state === "loading"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 3em; height: 3em;"
                viewBox="0 0 24 24"
                ><circle cx="18" cy="12" r="0" fill="currentColor"
                    ><animate
                        attributeName="r"
                        begin=".67"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                    /></circle
                ><circle cx="12" cy="12" r="0" fill="currentColor"
                    ><animate
                        attributeName="r"
                        begin=".33"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                    /></circle
                ><circle cx="6" cy="12" r="0" fill="currentColor"
                    ><animate
                        attributeName="r"
                        begin="0"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                    /></circle
                ></svg
            >
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 3em; height: 3em;"
                viewBox="0 0 512 512"
                ><path
                    fill="currentColor"
                    d="M256 464c-114.69 0-208-93.47-208-208.35c0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65C92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464"
                /><path
                    fill="currentColor"
                    d="M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22"
                /></svg
            >
        {/if}
    </button>
</div>