<script lang="ts">
  import "../theme.postcss";
  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";

  import { AppShell, Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";

  const links = [
    {
      label: "Hjem",
      url: "/",
    },
    {
      label: "Klubben",
      url: "/klubben",
    },
    {
      label: "Banen",
      url: "/banen",
    },
    {
      label: "Lost & Found",
      url: "/lost-and-found",
    },
  ];

  $: isCurrentPage = (url: string) =>
    url === "/" && $page.url.pathname === "/"
      ? true
      : url !== "/" && $page.url.pathname.includes(url);
</script>

<svelte:head>
  <title>Eghjorten Disc Golf Klub</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
</svelte:head>

<Drawer width="w-auto">
  <ul class="flex flex-col p-4 mt-4 space-y-4">
    {#each links as link}
      <a
        href={link.url}
        class="btn btn-sm {isCurrentPage(link.url)
          ? 'variant-filled shadow-[0_0_10px_10px] shadow-white/5'
          : 'hover:variant-soft-primary'}">{@html link.label}</a
      >
    {/each}
  </ul>
</Drawer>

<AppShell slotPageHeader="sticky top-0 z-10">
  <svelte:fragment slot="pageHeader">
    <header
      id="page-header"
      class="bg-surface-900/75 border-b border-surface-500/20 backdrop-blur-lg p-4 py-6"
    >
      <div class="flex flex-row justify-between items-center gap-4">
        <!-- <a href="/" class="unstyled"
          ><strong class="text-xl uppercase">Eghjorten Disc Golf Klub</strong
          ></a
        > -->
        <a href="/" class="unstyled">
          <img
            src="/images/edgk-white.png"
            alt="Eghjorten Disc Golf Klub"
            class="h-12"
          />
        </a>
        <div class="hidden lg:flex gap-2">
          {#each links as link}
            <a
              href={link.url}
              class="btn btn-sm {isCurrentPage(link.url)
                ? 'variant-filled shadow-[0_0_10px_10px] shadow-white/5'
                : 'hover:variant-soft-primary'}">{@html link.label}</a
            >
          {/each}
        </div>
        <div class="flex lg:hidden gap-2">
          <button title="Open drawer" on:click={() => drawerStore.open()}>
            <i class="text-4xl bi bi-list" />
          </button>
        </div>
      </div>
    </header>
  </svelte:fragment>

  <main class="flex-auto">
    <slot />
  </main>

  <svelte:fragment slot="pageFooter">
    <footer class="mt-24">
      <svg
        id="svgWaves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 180"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        ><g
          id="layerBack"
          transform="translate(202.286714,-24.510398)"
          ><path
            d="M-0.000002,523.297489c0,0,193.187772-28.556236,425.502183-28.556236s435.283846,60.419581,611.353713,60.419581s332.576418-31.863345,506.200872-31.863345s308.122272,45.289918,459.737992,45.289918s286.113535-45.289918,457.292575-45.289918q171.17904,0,337.46725,15.080128l2.445415,261.622378h-2800v-276.702506Z"
            transform="translate(-1073.286712,-455.300696)"
            class="fill-secondary-900"
          /></g
        ><g
          id="layerMiddle"
          transform="translate(1053.286714,15.300701)"
          ><path
            d="M-0.000002,523.297489c0,0,200.524017,31.863345,432.838428,31.863345s445.065504-52.027972,621.13537-52.027972s359.475983,45.314685,533.100437,45.314685s293.449783-25.150058,445.065503-25.150058s313.013099,25.150058,484.192139,25.150058q171.17904,0,281.222708-10.06993l2.445415,261.622378h-2800v-276.702506Z"
            transform="translate(-1073.286712,-455.300696)"
            class="fill-secondary-500"
          /></g
        ><g
          id="layerFront"
          transform="translate(193.286714,45.300701)"
          ><path
            d="M-0.000002,523.297489c0,0,193.187772-28.556236,425.502183-28.556236s435.283846,60.419581,611.353713,60.419581s332.576418-31.863345,506.200872-31.863345s308.122272,45.289918,459.737992,45.289918s286.113535-45.289918,457.292575-45.289918q171.17904,0,337.46725,15.080128l2.445415,261.622378h-2800v-276.702506Z"
            transform="translate(-1073.286712,-455.300696)"
            class="fill-primary-500"
          /></g
        ></svg
      >
      <div class="bg-primary-500 px-8 py-16">
        <div
          class="max-w-content mx-auto space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12"
        >
          <section class="space-y-4">
            <img src="/images/edgk-white.png" alt="EDGK Logo" class="h-20" />
            <p class="text-base my-4">
              Disc Golf rundt om Eghjorten i Hillerød
            </p>
            <nav class="space-x-4">
              <a href="https://www.instagram.com/eghjorten_dgk/" target="_blank"
                ><i class="text-white bi bi-instagram text-xl" /></a
              >
              <a
                href="https://www.facebook.com/EghjortenDiscGolfKlubHillerod"
                target="_blank"
                ><i class="text-white bi bi-facebook text-xl" /></a
              >
            </nav>
          </section>
          <section class="hidden lg:block">
            <p
              class="text-base font-bold mb-4 pb-4 border-b border-emerald-400"
            >
              Sponsorer
            </p>
            <nav class="flex flex-col space-y-4">
              <a
                class="unstyled"
                href="https://www.hillerod.dk/borger/kultur-idraet-og-oplevelser/ud-i-naturen/andre-aktiviteter-og-sjov-i-naturen/eghjorten-disc-golf-bane/"
                target="_blank">Hillerød Kommune</a
              >
              <a
                class="unstyled"
                href="http://naturstyrelsen.dk/naturoplevelser/naturskoler/hovedstaden/eghjorten/"
                target="_blank">Naturstyrelsen</a
              >
              <a class="unstyled" href="http://skovgrillen.dk/" target="_blank"
                >Skovgrillen</a
              >
            </nav>
          </section>
          <section class="hidden lg:block">
            <p
              class="text-base font-bold mb-4 pb-4 border-b border-emerald-400"
            >
              Kontakt
            </p>
            <nav class="flex flex-col space-y-4">
              <div class="flex flex-col">
                <span class="font-bold">Kontakt Bestyrelsen</span>
                <a class="unstyled" href="mailto:eghjortendgk@gmail.com"
                  >eghjortendgk@gmail.com</a
                >
              </div>
              <div class="flex flex-col">
                <span class="font-bold">Postaddresse</span>
                Eghjorten Disc Golf Klub - Hillerød c/o
              </div>
            </nav>
          </section>
        </div>
      </div>
    </footer>
  </svelte:fragment>
</AppShell>

<style>
  #svgWaves {
    --svg-speed: 15s;
  }
  #layerBack {
    -webkit-animation: animLayerBack var(--svg-speed) linear infinite normal
      forwards;
    animation: animLayerBack var(--svg-speed) linear infinite normal forwards;
  }
  @-webkit-keyframes animLayerBack {
    0% {
      transform: translate(202.286714px, -24.510398px);
    }
    50% {
      transform: translate(688.655707px, -24.510398px);
    }
    to {
      transform: translate(202.286714px, -24.510398px);
    }
  }
  @keyframes animLayerBack {
    0% {
      transform: translate(202.286714px, -24.510398px);
    }
    50% {
      transform: translate(688.655707px, -24.510398px);
    }
    to {
      transform: translate(202.286714px, -24.510398px);
    }
  }
  #layerMiddle {
    -webkit-animation: animLayerMiddle var(--svg-speed) linear infinite normal
      forwards;
    animation: animLayerMiddle var(--svg-speed) linear infinite normal forwards;
  }
  @-webkit-keyframes animLayerMiddle {
    0% {
      transform: translate(1053.286714px, 15.300701px);
    }
    50% {
      transform: translate(226.286714px, 15.300701px);
    }
    to {
      transform: translate(1053.286714px, 15.300701px);
    }
  }
  @keyframes animLayerMiddle {
    0% {
      transform: translate(1053.286714px, 15.300701px);
    }
    50% {
      transform: translate(226.286714px, 15.300701px);
    }
    to {
      transform: translate(1053.286714px, 15.300701px);
    }
  }
  #layerFront {
    -webkit-animation: animLayerFront var(--svg-speed) linear infinite normal
      forwards;
    animation: animLayerFront var(--svg-speed) linear infinite normal forwards;
  }
  @-webkit-keyframes animLayerFront {
    0% {
      transform: translate(193.286714px, 45.300701px);
    }
    50% {
      transform: translate(1073.286714px, 45.300701px);
    }
    to {
      transform: translate(193.286714px, 45.300701px);
    }
  }
  @keyframes animLayerFront {
    0% {
      transform: translate(193.286714px, 45.300701px);
    }
    50% {
      transform: translate(1073.286714px, 45.300701px);
    }
    to {
      transform: translate(193.286714px, 45.300701px);
    }
  }
</style>
