import { persisted } from "svelte-persisted-store";
import type { Writable } from "svelte/store";

type pc = {
    name: string;
    url: string;
    fullscreen: boolean;
}

export const pcs: Writable<pc[]> = persisted("managed-pcs", [

])