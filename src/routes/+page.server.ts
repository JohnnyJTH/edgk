import { getUpcomingEvents } from "$lib/server/calendar";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const events = await getUpcomingEvents(fetch);

    return {
        events
    }
};