<script>
  import { session } from "$lib/session";
  import IsAuthenticated from "$lib/components/IsAuthenticated.svelte";
  import IsNotAuthenticated from "$lib/components/IsNotAuthenticated.svelte";
</script>

session:
<pre>{JSON.stringify($session, null, 2)}</pre>

<IsAuthenticated>
  <h1>Authenticated</h1>
</IsAuthenticated>

<IsNotAuthenticated>
  <h1>Not Authenticated</h1>
</IsNotAuthenticated>

<style>
  pre {
    font-size: 12px;
  }
</style>
