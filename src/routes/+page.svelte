<script>
  import { session } from "$lib/session";
  import IsAuthenticated from "$lib/components/IsAuthenticated.svelte";
  import IsNotAuthenticated from "$lib/components/IsNotAuthenticated.svelte";
  import { auth } from "$lib/auth";
</script>

session:
<pre>{JSON.stringify($session, null, 2)}</pre>

<IsAuthenticated>
  <h1>Authenticated</h1>
  <button on:click={() => auth.logout()}>Logout</button>
</IsAuthenticated>

<IsNotAuthenticated>
  <h1>Not Authenticated</h1>
  <button on:click={() => auth.signInWith("google")}>Login</button>
</IsNotAuthenticated>

<style>
  pre {
    font-size: 12px;
  }
</style>
