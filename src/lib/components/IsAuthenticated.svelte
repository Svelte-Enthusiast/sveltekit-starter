<script>
  import { session } from "$lib/session";
</script>

{#if $session.user}
  <slot />
{/if}
