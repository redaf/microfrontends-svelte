<script>
  import { onMount } from "svelte";

  let Component = null;

  export let loadManifest;
  export let prefix;

  export let props;

  onMount(async () => {
    if (!Component) {
      return loadManifest().then(manifest => {
        const { name, js } = manifest;

        const script = document.createElement("script");
        script.src = `${prefix}${js}`;
        script.type = "text/javascript";
        script.onload = () => {
          Component = window[name];
        };

        document.body.appendChild(script);
      });
    }
  });
</script>

{#if Component}
  <svelte:component this={Component} {...props} />
{/if}
