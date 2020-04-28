<script>
  export let loadManifest;
  export let prefix;

  let componentLoader = loadManifest().then(manifest => {
    const { name, js, css } = manifest;

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = `${prefix}${css}`;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.src = `${prefix}${js}`;
    script.type = "text/javascript";
    const component = new Promise((resolve, reject) => {
      script.onload = () => {
        resolve(window[name]);
      };
    });
    document.body.appendChild(script);

    return component;
  });
</script>

{#await componentLoader}
  <p>Loading</p>
{:then comp}
  <svelte:component this={comp} {...$$restProps} />
{:catch error}
  <p>{error}</p>
{/await}
