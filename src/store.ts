import { persisted } from "svelte-persisted-store";
import type { Writable } from "svelte/store";

type pc = {
    name: string;
    url: string;
    fullscreen: boolean;
}

export const pcs: Writable<pc[]> = persisted("managed-pcs", [
    {
        name: "PC 1",
        url: "https://ntfy.sh/helloPC7",
        fullscreen: false
    },
    {
        name: "PC 2",
        url: "https://ntfy.sh/helloPCC6",
        fullscreen: false
    },
    {
        name: "PC 3",
        url: "https://ntfy.sh/helloPCC5",
        fullscreen: false
    },
    {
        name: "PC 4",
        url: "https://ntfy.sh/helloPCC4",
        fullscreen: false
    },
    {
        name: "PC 5",
        url: "https://ntfy.sh/helloPCC3",
        fullscreen: false
    },
    {
        name: "PC 6",
        url: "https://ntfy.sh/helloPCC2",
        fullscreen: false
    },
    {
        name: "PC 7",
        url: "https://ntfy.sh/helloPCC1",
        fullscreen: false
    },

])