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
      label: "Banen",
      url: "/banen",
    },
    {
      label: "Klubben",
      url: "/klubben",
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
  <link rel="icon" type="image/png" href="/images/favicon.ico" />
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
</AppShell>
