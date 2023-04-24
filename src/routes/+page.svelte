<script lang="ts">
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

<div class="page-container flex justify-center items-center">
  <h1>Indhold</h1>
  <p>Indhold</p>
</div>
