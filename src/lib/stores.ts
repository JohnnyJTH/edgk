import { writable } from "svelte/store";

export const heroImageStore = writable({
    url: "",
    isSimplified: false,
});