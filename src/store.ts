import { persisted } from "svelte-persisted-store";
import type { Writable } from "svelte/store";

export const url: Writable<string> = persisted("pc-url", "");
export const funMode: Writable<boolean> = persisted("fun-mode", false)
