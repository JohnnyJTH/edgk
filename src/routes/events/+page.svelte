<script lang="ts">
  import { dateFormatter } from "$lib/format";
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ events } = data);
  let filteredEvents = events;

  let showOld = false;
  $: showOld
    ? (filteredEvents = events)
    : (filteredEvents = events.filter((event) => event.start >= new Date()));
</script>

<div class="page-container">
  <header class="flex justify-between items-center">
    <div class="space-y-4">
      <h2>Events</h2>
      <p>Her kan du se alle events i klubben.</p>
    </div>
    <div class="space-y-4">
      <label class="flex items-center space-x-2">
        <input
          class="checkbox"
          type="checkbox"
          on:click={() => (showOld = !showOld)}
        />
        <p>Vis Gamle</p>
      </label>
    </div>
  </header>
  <hr />
  <section class="space-y-4">
    {#if !filteredEvents || filteredEvents.length === 0}
      <p>Der er ingen events.</p>
    {:else}
      {#each filteredEvents as event}
        <article
          class="unstyled block hover:card hover:variant-soft p-4 rounded-container-token space-y-4"
        >
          <div class="flex justify-between items-center">
            <time class="block">{dateFormatter(event.start)}</time>
            {#if event.end < new Date()}
              <div class="badge variant-filled-error">Gammel</div>
            {/if}
          </div>
          <h2>{event.summary}</h2>
          {#if event.description}
            <p>{@html event.description}</p>
          {/if}
          <div class="flex">
            <a
              href={event.htmlLink}
              target="_blank"
              class="btn variant-ghost-surface">Se i kalender →</a
            >
            {#if event.location}
              <a
                href="https://www.google.com/maps/search/?api=1&query={event.location}"
                target="_blank"
                class="btn variant-ghost-surface ml-2">Se lokation →</a
              >
            {/if}
          </div>
        </article>
      {/each}
    {/if}
  </section>
</div>
