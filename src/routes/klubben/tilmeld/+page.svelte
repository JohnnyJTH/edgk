<script lang="ts">
  import {
    ConicGradient,
    toastStore,
    type ConicStop,
  } from "@skeletonlabs/skeleton";
  import type { PageData } from "./$types";
  import { superForm } from "sveltekit-superforms/client";

  export let data: PageData;
  const { form, enhance, message, errors, submitting, constraints } = superForm(
    data.form
  );
  $: $message != undefined &&
    toastStore.trigger({
      message: $message,
      background: "variant-filled-secondary",
    });

  const loadingGradient: ConicStop[] = [
    { color: "transparent", start: 0, end: 25 },
    { color: "rgb(var(--color-primary-500))", start: 75, end: 100 },
  ];
</script>

<form method="POST" use:enhance>
  <label class="label pb-4">
    <span>Navn</span>
    <input
      type="text"
      name="name"
      class="input"
      data-invalid={$errors.name}
      bind:value={$form.name}
      {...$constraints.name}
    />
    {#if $errors.name}<span class="text-error-500">{$errors.name}</span>{/if}
  </label>

  <label class="label pb-4">
    <span>Email</span>
    <input
      type="email"
      name="email"
      class="input"
      data-invalid={$errors.email}
      bind:value={$form.email}
      {...$constraints.email}
    />
    {#if $errors.email}<span class="text-error-500">{$errors.email}</span>{/if}
  </label>

  <button class="btn variant-glass-primary" type="submit" disabled={$submitting}>
    Tilmeld {#if $submitting}
      <div class="ml-4">
        <ConicGradient width="w-6" stops={loadingGradient} spin />
      </div>
    {/if}
  </button>
</form>
