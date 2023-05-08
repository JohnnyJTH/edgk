<script lang="ts">
  import { dateFormatter } from "$lib/format";
  import { heroImageStore } from "$lib/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { events } = data;
  events.length = 5;

  let heroElement: HTMLDivElement;
  $: if (heroElement)
    heroElement.style.backgroundImage = `url(${$heroImageStore})`;

  let innerHeight: number = 0;

  function heroCalc() {
    const headerHeight = document.getElementById("header")?.clientHeight || 0;
    const hero = document.getElementById("hero");
    if (hero) {
      hero.style.marginTop = `-${headerHeight}px`;
    }
  }

  $: if (innerHeight) heroCalc();
</script>

<svelte:window bind:innerHeight />

<div
  bind:this={heroElement}
  id="hero"
  class="w-screen h-screen bg-center bg-no-repeat bg-cover"
>
  <div
    class="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center"
  >
    <h1 class="unstyled text-6xl lg:text-8xl font-bold">
      <span
        class="bg-gradient-to-br from-primary-600 to-primary-800 bg-clip-text text-transparent box-decoration-clone"
        >Eghjorten Disc Golf Klub</span
      >
    </h1>
    <p class="unstyled text-xl lg:text-3xl text-white mt-2">
      Disc Golf rundt om Eghjorten i Hillerød
    </p>
  </div>
</div>

<div class="page-container">
  <section
    class="p-4 md:p-10 container mx-auto flex flex-col items-center gap-4 text-center"
  >
    <h1 class="max-w-[700px] mx-auto">
      Velkommen til <span class="text-primary-500"
        >Eghjorten Disc Golf Klub</span
      >
    </h1>
    <p class="!text-xl">
      Eghjorten Disc Golf Klub er en klub for alle, der har interesse i Disc
      Golf. Vi har en 18 hullers bane, der er åben for alle, og vi arrangerer
      løbende events for medlemmerne.
      <br />
      Vi har en aktiv Facebook gruppe, hvor vi deler informationer om klubben, events
      og meget mere. Du kan finde gruppen her:
    </p>
    <div class="flex items-center gap-2">
      <a href="/klubben" class="btn variant-filled-primary">Læs Mere →</a>
      <a
        href="https://www.facebook.com/EghjortenDiscGolfKlubHillerod"
        target="_blank"
        class="btn variant-soft">Gå til Facebook-gruppen</a
      >
    </div>
  </section>
  <section class="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center">
    <img
      alt="Hul 1 på banen"
      src="/images/HoleOne.jpg"
      loading="lazy"
      class="w-full aspect-video flex justify-center items-center rounded-container-token shadow-lg"
    />
    <div class="pt-4 lg:p-10 space-y-4">
      <div class="space-y-2">
        <small class="font-bold text-primary-500">Hjælp klubben</small>
        <h2 class="max-w-[320px]">Bliv Medlem</h2>
      </div>
      <div class="lg:max-w-[500px] space-y-2">
        <p>
          Som medlem af Eghjorten Disc Golf Klub får du adgang til en masse
          fordele. Du får blandt andet:
        </p>
        <ul class="list-disc list-inside">
          <li>Et bagtag</li>
          <li>10% rabat på Skovgrillen</li>
          <li>
            10% rabat hos <a href="https://flyvende.dk/" target="_blank"
              >flyvende.dk</a
            >
          </li>
          <li>Mulighed for at deltage i vores onsdags-league</li>
        </ul>
        <p>
          Læs mere og meld dig ind i klubben ved at trykke på knappen herunder.
        </p>
      </div>
      <a class="btn variant-filled-primary" href="/klubben/tilmeld"
        >Bliv Medlem →</a
      >
    </div>
  </section>
  <section class="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center">
    <img
      alt="Lost and found kassen"
      src="/images/LostFound.jpg"
      loading="lazy"
      class="w-full aspect-video flex justify-center items-center rounded-container-token shadow-lg"
    />
    <div class="pt-4 lg:p-10 space-y-4">
      <div class="space-y-2">
        <small class="font-bold text-primary-500">God karma</small>
        <h2 class="max-w-[320px]">Lost & Found</h2>
      </div>
      <p class="lg:max-w-[500px]">
        Har du mistet en disc på banen? Eller har du fundet en disc, som du
        gerne vil aflevere til ejeren? Så kan du bruge vores Lost & Found
        system. Læs mere om hvordan du gør herunder.
      </p>
      <a class="btn variant-filled-primary" href="/lost-and-found"
        >Lost & Found →</a
      >
    </div>
  </section>
  <section class="space-y-10">
    <header class="flex justify-between items-center">
      <div class="space-y-4">
        <h2>Kommende Events</h2>
        <p>Her kan du se de næste 5 events i klubben.</p>
      </div>
      <a href="/events" class="btn variant-soft-primary">Se alle events →</a>
    </header>
    <hr />
    <div class="space-y-4">
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
    </div>
  </section>
</div>
