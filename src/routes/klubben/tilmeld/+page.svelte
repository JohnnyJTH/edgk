<script lang="ts">
  import { toastStore } from "@skeletonlabs/skeleton";
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
</script>

<form method="POST" use:enhance>
  <label for="name">Navn</label>
  <input
    type="text"
    name="name"
    class="input"
    data-invalid={$errors.name}
    bind:value={$form.name}
    {...$constraints.name}
  />
  {#if $errors.name}<span class="text-error-500">{$errors.name}</span>{/if}

  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    class="input"
    data-invalid={$errors.email}
    bind:value={$form.email}
    {...$constraints.email}
  />
  {#if $errors.email}<span class="text-error-500">{$errors.email}</span>{/if}

  <div>
    <button class="btn variant-glass-primary" type="submit">Tilmeld</button>
    {#if $submitting}<span>Working...</span>{/if}
  </div>
</form>
