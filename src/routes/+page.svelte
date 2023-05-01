<script lang="ts">
  import { dateFormatter } from "$lib/format";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { events } = data;
  events.length = 5;

  let innerHeight: number = 0;

  function heroCalc() {
    const headerHeight =
      document.getElementById("page-header")?.clientHeight || 0;
    const hero = document.getElementById("hero");
    if (hero) {
      hero.style.marginTop = `-${headerHeight}px`;
    }
  }

  $: if (innerHeight) heroCalc();
</script>

<svelte:window bind:innerHeight />

<div
  id="hero"
  class="w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url('/images/Soerne_Middle.jpg')]"
>
  <div
    class="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center"
  >
    <h1 class="unstyled text-6xl lg:text-8xl font-bold">
      <span
        class="bg-gradient-to-br from-primary-700 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
        >Eghjorten Disc Golf Klub</span
      >
    </h1>
    <p class="unstyled text-xl lg:text-3xl text-white mt-2">
      Disc Golf rundt om Eghjorten i Hillerød
    </p>
  </div>
</div>

<div class="page-container">
  <header class="flex justify-between items-center">
    <div class="space-y-4">
      <h2>Kommende Events</h2>
      <p>Her kan du se de næste 5 events i klubben.</p>
    </div>
    <a href="/events" class="btn variant-soft-primary">Se alle events →</a>
  </header>
  <hr />
  <section class="space-y-4">
    {#if !events || events.length === 0}
      <p>Der er ingen kommende events.</p>
      <a href="/events" class="btn variant-soft-primary">Se alle events →</a>
    {:else}
      {#each events as event}
        <article
          class="unstyled block hover:card hover:variant-soft p-4 rounded-container-token space-y-4"
        >
          <time class="block">{dateFormatter(event.start)}</time>
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
